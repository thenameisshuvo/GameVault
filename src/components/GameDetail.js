import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchGameDetails } from "../actions/gameDetialActions";
import starEmpty from "../assets/star-empty.png";
import starFull from "../assets/star-full.png";
import playstation from "../assets/playstation.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";
import nintendo from "../assets/nintendo.svg";
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import LinearProgress from "@mui/material/LinearProgress";

const GameDetail = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const gameDetails = useSelector((state) => state.gameDetails.game) || {};

  const func = async () => {
    await dispatch(fetchGameDetails(params.id));
    setLoading(false);
  };

  useEffect(() => {
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStars = () => {
    const stars = [];
    const rating = Math.round(gameDetails?.rating || 0);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img
            alt="star"
            key={i}
            src={starFull}
            className="w-5 h-5 inline-block mr-1"
          />
        );
      } else {
        stars.push(
          <img
            alt="star"
            key={i}
            src={starEmpty}
            className="w-5 h-5 inline-block mr-1"
          />
        );
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    if (!platform) return gamepad;
    const p = platform.toLowerCase();
    if (p.includes("playstation")) return playstation;
    if (p.includes("xbox")) return xbox;
    if (p.includes("pc") || p.includes("steam")) return steam;
    if (p.includes("nintendo")) return nintendo;
    if (p.includes("ios") || p.includes("apple")) return apple;
    return gamepad;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {loading && <LinearProgress color="secondary" />}

      {!loading && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:flex md:gap-8">
            {/* Left: Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={gameDetails.background_image}
                alt={gameDetails.name}
                className="w-full rounded-lg object-cover shadow-sm"
              />
              <div className="mt-4" />
            </div>

            {/* Right: Details */}
            <div className="md:flex-1 mt-6 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-semibold">
                {gameDetails.name}
              </h1>
              <div className="mt-2 flex items-center gap-4">
                <div className="text-lg">
                  Rating:{" "}
                  <span className="font-semibold">
                    {gameDetails.rating || "N/A"}
                  </span>
                </div>
                <div className="flex items-center">{getStars()}</div>
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed">
                {gameDetails.description_raw}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Available on</h4>
                  <div className="flex items-center gap-3">
                    {(gameDetails.platforms || []).map((p) => (
                      <img
                        key={p.platform?.id || p.id}
                        src={getPlatform(p.platform?.name || p.name)}
                        alt={p.platform?.name || p.name}
                        className="w-8 h-8"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Publishers & Genres</h4>
                  <div className="flex flex-wrap gap-2">
                    {(gameDetails.publishers || []).map((pub) => (
                      <span
                        key={pub.id || pub.name}
                        className="px-2 py-1 bg-gray-100 rounded text-sm"
                      >
                        {pub.name}
                      </span>
                    ))}
                    {(gameDetails.genres || []).map((g) => (
                      <span
                        key={g.id || g.name}
                        className="px-2 py-1 bg-gray-100 rounded text-sm"
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetail;

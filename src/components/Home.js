import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchGames } from "../actions/gamesActions";
import Game from "./Game";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Popular");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {
    popularGames = [],
    newGames = [],
    upcomingGames = [],
  } = useSelector((state) => state.games || {});
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favs") || "[]");
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    const onFavs = (e) => setFavoriteIds(e.detail || []);
    window.addEventListener("favs:changed", onFavs);
    return () => window.removeEventListener("favs:changed", onFavs);
  }, []);

  function updateSelectedOption(selectedOption) {
    setSelectedOption(selectedOption);
  }

  const getAllGames = async () => {
    await dispatch(fetchGames());
    setLoading(false);
  };

  useEffect(() => {
    getAllGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        selectedOption={selectedOption}
        updateSelectedOption={updateSelectedOption}
        setSelectedOption={setSelectedOption}
      />

      {(loading || !popularGames.length) && (
        <div style={{ padding: 48, display: "flex", justifyContent: "center" }}>
          <CircularProgress value={20} />
        </div>
      )}

      <div className="game-list-bg">
        <GameList>
          {selectedOption === "Popular" && (
            <Games>
              {popularGames.map((popularGame) => (
                <Game key={popularGame.id} gameData={popularGame} />
              ))}
            </Games>
          )}

          {selectedOption === "Upcoming" && (
            <Games>
              {upcomingGames.map((upcomingGame) => (
                <Game key={upcomingGame.id} gameData={upcomingGame} />
              ))}
            </Games>
          )}

          {selectedOption === "Latest Released" && (
            <Games>
              {newGames.map((newGame) => (
                <Game key={newGame.id} gameData={newGame} />
              ))}
            </Games>
          )}

          {selectedOption === "Favorites" && (
            <Games>
              {[...new Set(favoriteIds)].length === 0 && (
                <p style={{ color: "var(--muted)" }}>No favorites yet</p>
              )}
              {popularGames
                .concat(upcomingGames)
                .concat(newGames)
                .filter((g) => favoriteIds.includes(g.id))
                .map((game) => (
                  <Game key={game.id} gameData={game} />
                ))}
            </Games>
          )}
        </GameList>
      </div>

      <Footer />
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0 1rem 4rem 1rem;
  h2 {
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const Games = styled(motion.div)`
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Home;

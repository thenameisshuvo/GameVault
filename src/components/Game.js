import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Game = ({ gameData }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("favs") || "[]");
      setFav(favs.includes(gameData.id));
    } catch (e) {
      setFav(false);
    }
  }, [gameData.id]);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const favs = JSON.parse(localStorage.getItem("favs") || "[]");
      let next = [];
      if (favs.includes(gameData.id)) {
        next = favs.filter((id) => id !== gameData.id);
        setFav(false);
      } else {
        next = [...favs, gameData.id];
        setFav(true);
      }
      localStorage.setItem("favs", JSON.stringify(next));
      // emit a simple event so Home can react if needed
      window.dispatchEvent(new CustomEvent("favs:changed", { detail: next }));
    } catch (err) {
      /* ignore */
    }
  };

  return (
    <StyledGame className="glass-card game-card">
      <Link to={`/${gameData.id}`}>
        <div className="cover">
          <img src={gameData.background_image} alt={gameData.name} />
          <button
            className={`fav-btn ${fav ? "is-fav" : ""}`}
            onClick={toggleFav}
            aria-label="Toggle favorite"
          >
            {fav ? "♥" : "♡"}
          </button>
        </div>
        <div className="meta">
          <h3>{gameData.name}</h3>
          <p>{gameData.released}</p>
          <p>
            Rating: <strong>{gameData.rating}</strong>
          </p>
        </div>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 32vh;
  width: 100%;
  box-shadow: none;
  text-align: left;
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;

  .cover img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  .meta {
    padding: 12px 14px;
  }

  @media (max-width: 818px) {
    .cover img {
      height: 160px;
    }
    .meta h3 {
      font-size: 1rem;
    }
    .meta p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 420px) {
    .cover img {
      height: 140px;
    }
    .meta h3 {
      font-size: 0.95rem;
    }
  }
`;

export default Game;

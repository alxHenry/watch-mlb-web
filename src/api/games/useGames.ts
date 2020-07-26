import { GameItem } from "./types";

import { useEffect, useState, useCallback } from "react";

const gamesUrl = "https://warm-gorge-48832.herokuapp.com/api/games";

export const useGames = () => {
  const [games, setGames] = useState<GameItem[]>([]);

  const getGames = useCallback(async () => {
    const response = await fetch(gamesUrl);
    const gamesData = (await response.json()) as GameItem[];

    setGames(gamesData);
  }, []);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return games;
};

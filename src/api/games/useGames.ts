import { GameItem } from "./types";

import { useEffect, useState, useCallback } from "react";

const gamesUrl = "https://warm-gorge-48832.herokuapp.com/api/games";

export const useGames = () => {
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getGames = useCallback(async () => {
    setLoading(true);

    const response = await fetch(gamesUrl);
    const gamesData = (await response.json()) as GameItem[];

    setGames(gamesData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return { games, loading };
};

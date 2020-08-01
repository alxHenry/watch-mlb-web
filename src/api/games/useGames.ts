import { GameItem, SportsLeague } from "./types";

import { useEffect, useState, useCallback } from "react";

const baseUrl = "https://warm-gorge-48832.herokuapp.com";
const devUrl = "http://localhost:4000";

const getGamesUrl = (league: SportsLeague) => {
  switch (league) {
    case SportsLeague.MLB:
      return `${baseUrl}/api/mlb/games`;
    case SportsLeague.NBA:
      return `${baseUrl}/api/nba/games`;
  }
};

export const useGames = (league: SportsLeague) => {
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getGames = useCallback(async () => {
    setLoading(true);

    const response = await fetch(getGamesUrl(league));
    const gamesData = (await response.json()) as GameItem[];

    setGames(gamesData);
    setLoading(false);
  }, [league]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return { games, loading };
};

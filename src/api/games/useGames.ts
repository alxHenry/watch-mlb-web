import { GameItem, SportsLeague } from "./types";

import { useEffect, useRef, useState, useCallback } from "react";

const baseUrl = "https://warm-gorge-48832.herokuapp.com";
const devUrl = "http://localhost:4000";

const getGamesUrl = (league: SportsLeague) => {
  switch (league) {
    case SportsLeague.NFL:
      return `${baseUrl}/api/nfl/games`;
    case SportsLeague.MLB:
      return `${baseUrl}/api/mlb/games`;
    case SportsLeague.NBA:
      return `${baseUrl}/api/nba/games`;
  }
};

export const useGames = (league: SportsLeague) => {
  const fetchedLeague = useRef(league);
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getGames = useCallback(async () => {
    setLoading(true);

    let gamesData: GameItem[];
    try {
      const response = await fetch(getGamesUrl(league));
      gamesData = (await response.json()) as GameItem[];
    } catch (err) {
      setError(err);
      setLoading(false);
      return;
    }

    if (league === fetchedLeague.current) {
      setGames(gamesData);
      setLoading(false);
    }
  }, [league]);

  useEffect(() => {
    fetchedLeague.current = league;
    getGames();
  }, [getGames, league]);

  return { games, loading, error };
};

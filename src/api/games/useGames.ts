import { ResponseData, SportsLeague } from "./types";

import { useEffect, useRef, useState, useCallback } from "react";

const baseUrl = "https://watch-sports.apps.alxhenry.work";

const getGamesUrl = (league: SportsLeague) => {
  switch (league) {
    case SportsLeague.NFL:
      return `${baseUrl}/api/nfl/games`;
    case SportsLeague.MLB:
      return `${baseUrl}/api/mlb/games`;
    case SportsLeague.NBA:
      return `${baseUrl}/api/nba/games`;
    case SportsLeague.EPL:
      return `${baseUrl}/api/epl/games`;
  }
};

export const useGames = (league: SportsLeague) => {
  const fetchedLeague = useRef(league);
  const [data, setData] = useState<ResponseData>({ games: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getGames = useCallback(async () => {
    setLoading(true);

    let responseData: ResponseData;
    try {
      const response = await fetch(getGamesUrl(league));
      responseData = (await response.json()) as ResponseData;
    } catch (err) {
      setError(err);
      setLoading(false);
      return;
    }

    if (league === fetchedLeague.current) {
      setData(responseData);
      setLoading(false);
    }
  }, [league]);

  useEffect(() => {
    fetchedLeague.current = league;
    getGames();
  }, [getGames, league]);

  return { data, loading, error };
};

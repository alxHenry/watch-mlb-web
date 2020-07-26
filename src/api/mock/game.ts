import { GameItem } from "../games/types";

export const getMockGame = (): GameItem => ({
  homeTeamFullName: "Los Angeles Dodgers",
  homeTeamScore: 4,
  homeTeamLogoUrl: "https://s.yimg.com/cv/apiv2/default/mlb/20190311/70x70/dodgers_wbgs.png",
  awayTeamFullName: "Boston Red Sox",
  awayTeamScore: 1,
  awayTeamLogoUrl: "https://s.yimg.com/cv/apiv2/default/mlb/20190311/70x70/redsox_wbgs.png",
  statusDisplay: "Bot 9",
  streamUrl: "http://6stream.xyz/video/rangers-vs-rockies/",
});

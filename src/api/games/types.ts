export enum SportsLeague {
  NBA = "NBA",
  MLB = "MLB",
  NFL = "NFL",
}

export interface GameItem {
  readonly homeTeamFullName: string;
  readonly homeTeamScore: number | null;
  readonly homeTeamLogoUrl: string;
  readonly homeTeamRecord: string;
  readonly homeTeamConferenceAbbr: string;
  readonly homeTeamDivisionName: string;
  readonly homeTeamDivisionRank: string;
  readonly awayTeamFullName: string;
  readonly awayTeamScore: number | null;
  readonly awayTeamLogoUrl: string;
  readonly awayTeamRecord: string;
  readonly awayTeamConferenceAbbr: string;
  readonly awayTeamDivisionName: string;
  readonly awayTeamDivisionRank: string;
  readonly statusDisplay: string;
  readonly homeStreamUrl: string;
  readonly awayStreamUrl: string;
  readonly winningPitcherName?: string;
  readonly losingPitcherName?: string;
  readonly savingPitcherName?: string;
  readonly currentBatterName?: string;
  readonly currentPitcherName?: string;
  readonly homePitcherName?: string;
  readonly awayPitcherName?: string;
}

export interface ResponseData {
  readonly games: GameItem[];
  readonly redzone?: RedzoneItem;
}

type RedzoneGameItemId = "nfl-redzone";
export interface RedzoneItem {
  readonly id: RedzoneGameItemId;
  readonly url: string;
}

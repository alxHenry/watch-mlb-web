export interface GameItem {
  readonly homeTeamFullName: string;
  readonly homeTeamScore: number | null;
  readonly homeTeamLogoUrl: string;
  readonly homeTeamConferenceAbbr: string;
  readonly homeTeamDivisionName: string;
  readonly homeTeamDivisionRank: string;
  readonly awayTeamFullName: string;
  readonly awayTeamScore: number | null;
  readonly awayTeamLogoUrl: string;
  readonly awayTeamConferenceAbbr: string;
  readonly awayTeamDivisionName: string;
  readonly awayTeamDivisionRank: string;
  readonly statusDisplay: string;
  readonly streamUrl: string;
}

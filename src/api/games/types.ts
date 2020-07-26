export interface GameItem {
  readonly homeTeamFullName: string;
  readonly homeTeamScore: number | null;
  readonly homeTeamLogoUrl: string;
  readonly awayTeamFullName: string;
  readonly awayTeamScore: number | null;
  readonly awayTeamLogoUrl: string;
  readonly statusDisplay: string;
  readonly streamUrl: string;
}

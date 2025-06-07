// src/types/essay.ts

export interface Essay {
  slug: string; // Unique identifier for the essay
  title: string; // Title of the essay
  summary: string; // Brief summary of the essay
  season: number; // Season number the essay belongs to
  sortOrder: number; // Order in which the essay should be displayed within its season
  date: string; // Date of publication in ISO format
}

export interface EssayComponentProps {
  title: string;
  summary: string;
}

// src/types/components.ts
import { ReactNode } from 'react';

export interface PersistentDetailsProps {
  season: string;
  title: ReactNode;
  children: ReactNode;
}

export interface WithChildren {
  children: React.ReactNode;
}

import MemoriesFromHighSchoolYears from '../../components/essay/season03/memories-from-high-school/page';
import CritiqueAiQuestionBook from '../../components/essay/season03/critique-ai-question-book/page';
import TheUnacknowledgedInitiation from '../../components/essay/season03/the-unacknowledged-initiation/page';
import TheRarestKindOfFriendship from '../../components/essay/season03/the-rarest-kind-of-friendship/page';
import TheOriginOfWWA2 from '../../components/essay/season03/origin-of-wwa2/page';
import FP1100BetaCertainty from '../../components/essay/season04/fp1100-beta-certainty/page';
import TheVoidSurface from '../../components/essay/season04/the-void-surface/page';
import type { EssayComponentProps } from '@/types';
import type { FC } from 'react';

export const essayComponents: Record<string, FC<EssayComponentProps>> = {
  'memories-from-high-school': MemoriesFromHighSchoolYears,
  'critique-ai-question-book': CritiqueAiQuestionBook,
  'the-unacknowledged-initiation': TheUnacknowledgedInitiation,
  'the-rarest-kind-of-friendship': TheRarestKindOfFriendship,
  'origin-of-wwa2': TheOriginOfWWA2,
  'fp1100-beta-certainty': FP1100BetaCertainty,
  'the-void-surface': TheVoidSurface
};

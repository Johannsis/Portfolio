import type { Draft } from 'immer';
import { produce } from 'immer';

import { baseTheme } from './baseTheme';

export const theme = produce(
  baseTheme,
  (draft: Draft<unknown>): Draft<unknown> => {
    return draft;
  },
);

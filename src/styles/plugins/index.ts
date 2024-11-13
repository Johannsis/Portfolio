import type { Draft } from 'immer';
import { produce } from 'immer';

import { basePlugins } from './basePlugin';

export const plugins = produce(
  basePlugins,
  (draft: Draft<unknown>): Draft<unknown> => {
    return draft;
  },
);

import type { AtomBoxProps } from '@tsu-org/ui-kit/components/Box/types';
import { Gutter } from '@tsu-org/ui-kit/types/grid';

export interface RowProps extends AtomBoxProps {
  gutter?: Gutter | [Gutter, Gutter];
}

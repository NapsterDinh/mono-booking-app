import { AtomBoxProps } from '@tsu-org/ui';
import { Gutter } from '@tsu-org/ui-kit/types/grid';

export interface RowProps extends AtomBoxProps {
  gutter?: Gutter | [Gutter, Gutter];
}

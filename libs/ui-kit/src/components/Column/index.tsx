import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { forwardRef, Ref } from 'react';

export const Column = forwardRef((props: AtomBoxProps, ref: Ref<any>) => (
  <AtomBox
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    ref={ref}
    {...props}
  />
));

Column.displayName = 'Column';

export const AutoColumn = forwardRef(({ gap, justify, ...props }: AtomBoxProps & { justify?: any }, ref: Ref<any>) => (
  <AtomBox
    display="grid"
    gridAutoRows="auto"
    justifyItems={justify}
    rowGap={gap}
    ref={ref}
    {...props}
  />
));

AutoColumn.displayName = 'AutoColumn';

export const ColumnCenter = forwardRef((props: AtomBoxProps, ref: Ref<any>) => (
  <Column
    width="full"
    alignItems="center"
    ref={ref}
    {...props}
  />
));

ColumnCenter.displayName = 'ColumnCenter';

import type { AtomBoxProps } from '@tsu-org/ui-kit/components/Box/types';
import { AtomBox } from '@tsu-org/ui-kit/components/Box';
import { forwardRef, Ref } from 'react';

export const Row = forwardRef(
  (
    { width = '100%', alignItems = 'center', justifyContent = 'flex-start', padding = '0', ...props }: AtomBoxProps,
    ref: Ref<any>,
  ) => (
    <AtomBox
      display="flex"
      width={width}
      alignItems={alignItems}
      justifyContent={justifyContent}
      padding={padding}
      ref={ref}
      {...props}
    />
  ),
);

export const AutoRow = (props: AtomBoxProps) => (
  <Row
    flexWrap="wrap"
    {...props}
  />
);

export const RowFixed = (props: AtomBoxProps) => (
  <Row
    width="fit"
    flexWrap="wrap"
    {...props}
  />
);

export const RowBetween = (props: AtomBoxProps) => (
  <Row
    flexWrap="wrap"
    justifyContent="space-between"
    {...props}
  />
);

import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box } from '@tsu-org/ui-kit';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function OverlayMenu({
  children,
  isRolling,
  show = true,
}: {
  children?: ReactNode;
  isRolling?: boolean;
  show?: boolean;
}) {
  useEffect(() => {
    document.body.classList.add(
      sprinkles({
        overflow: 'hidden',
      }),
    );

    return () => {
      document.body.classList.remove(
        sprinkles({
          overflow: 'hidden',
        }),
      );
    };
  }, [isRolling]);

  return createPortal(
    <Box
      backgroundColor="rgba(2, 11, 39, 0.5)"
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      top="0"
      display={show ? 'block' : 'none'}
      zIndex="1"
    >
      {children}
    </Box>,
    document.getElementById('overlay-menu') as any,
  );
}

export default OverlayMenu;

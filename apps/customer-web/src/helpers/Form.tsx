import { Row } from '@tsu-org/ui-kit';
import { AlertGradientRedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';

export const getErrorElement = (message: string) => {
  return (
    <Row gap="1">
      <AlertGradientRedIcon />
      {message}
    </Row>
  );
};

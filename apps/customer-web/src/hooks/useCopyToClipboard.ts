import { notification } from 'antd';
import { useEffect, useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  useEffect(() => {
    if (copiedText) {
      const timeout = setTimeout(() => {
        setCopiedText(null);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copiedText]);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator?.clipboard.writeText(text);
      setCopiedText(text);

      notification.success({
        message: 'Sao chép thành công',
      });

      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };
  return [copiedText, copy];
};

export default useCopyToClipboard;

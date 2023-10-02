import { FormInstance, notification } from 'antd';
import { getErrorElement } from './Form';

interface ErrorProps {
  error: any;
  form: FormInstance;
  defaultMsg?: string;
}

export const handleError = ({ error, form, defaultMsg }: ErrorProps) => {
  if (!error) return;
  if (error?.data?.length > 0) {
    error.data?.map((item: { [key: string]: string }) =>
      form.setFields([
        {
          name: Object.keys(item)[0],
          // @ts-ignore
          errors: [getErrorElement(Object.values(item)[0])],
        },
      ]),
    );
  } else {
    notification.error({
      message: defaultMsg,
    });
  }
};

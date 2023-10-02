import { variants } from './types';

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: 'tagPrimaryBackground',
    color: 'textLink',
  },
  [variants.WARNING]: {
    backgroundColor: 'tagWarningBackground',
    color: 'textWarning',
  },
  [variants.SUCCESS]: {
    backgroundColor: 'tagSuccessBackground',
    color: 'success',
  },
  [variants.ERROR]: {
    backgroundColor: 'tagErrorBackground',
    color: 'colorError',
  },
};

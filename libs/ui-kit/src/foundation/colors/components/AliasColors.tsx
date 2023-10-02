import {
  BG_OVERLAY_USAGE_ROWS,
  BG_USAGE_ROWS,
  STROKE_USAGE_ROWS,
  DIVIDER_USAGE_ROWS,
  TEXT_USAGE_ROWS,
} from '../constants/alias';
import { BUTTON_USAGE_ROWS } from '../constants/alias/button';
import { FIELD_USAGE_ROWS } from '../constants/alias/field';
import { ICON_USAGE_ROWS } from '../constants/alias/icon';
import { LAYER_USAGE_ROWS } from '../constants/alias/layer';
import { SEMANTIC_USAGE_ROWS } from '../constants/alias/semantic';
import { DemoColorUsageSection } from './DemoColorUsageTable';

export const AliasBackgroundGuide = () => {
  return (
    <DemoColorUsageSection
      title="Background"
      data={BG_USAGE_ROWS}
    />
  );
};

export const AliasBackgroundOverlayGuide = () => {
  return (
    <DemoColorUsageSection
      title="Overlay"
      data={BG_OVERLAY_USAGE_ROWS}
    />
  );
};

export const AliasLayerGuide = () => {
  return (
    <DemoColorUsageSection
      title="Layer"
      data={LAYER_USAGE_ROWS}
    />
  );
};

export const AliasStrokeGuide = () => {
  return (
    <DemoColorUsageSection
      title="Stroke"
      data={STROKE_USAGE_ROWS}
    />
  );
};

export const AliasDividerGuide = () => {
  return (
    <DemoColorUsageSection
      title="Divider"
      data={DIVIDER_USAGE_ROWS}
    />
  );
};

export const AliasFieldGuide = () => {
  return (
    <DemoColorUsageSection
      title="Field"
      data={FIELD_USAGE_ROWS}
    />
  );
};

export const AliasTextGuide = () => {
  return (
    <DemoColorUsageSection
      title="Text"
      data={TEXT_USAGE_ROWS}
    />
  );
};

export const AliasButtonGuide = () => {
  return (
    <DemoColorUsageSection
      title="Button"
      data={BUTTON_USAGE_ROWS}
    />
  );
};

export const AliasIconGuide = () => {
  return (
    <DemoColorUsageSection
      title="Icon"
      data={ICON_USAGE_ROWS}
    />
  );
};

export const AliasSemanticGuide = () => {
  return (
    <DemoColorUsageSection
      title="Semantic"
      data={SEMANTIC_USAGE_ROWS}
    />
  );
};

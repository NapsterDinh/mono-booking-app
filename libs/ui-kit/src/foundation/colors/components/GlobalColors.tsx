import { COLOR_SET, TColor } from '../constants';
import DemoColor, { ColorsContainer } from './DemoColor';
import { ExampleTable } from './ExampleTable';

export function BrandColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.BRAND_COLOR.title}
      description={COLOR_SET.BRAND_COLOR.description}
      usageGuide={COLOR_SET.BRAND_COLOR.usageGuide}
      colors={COLOR_SET.BRAND_COLOR.colors}
    />
  );
}

export function PrimaryColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.PRIMARY.title}
      description={COLOR_SET.PRIMARY.description}
      usageGuide={COLOR_SET.PRIMARY.usageGuide}
      colors={COLOR_SET.PRIMARY.colors}
    />
  );
}

export function NeutralsColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.NEUTRALS.title}
      description={COLOR_SET.NEUTRALS.description}
      usageGuide={COLOR_SET.NEUTRALS.usageGuide}
      colors={COLOR_SET.NEUTRALS.colors}
    />
  );
}

export function ErrorColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.ERROR.title}
      description={COLOR_SET.ERROR.description}
      usageGuide={COLOR_SET.ERROR.usageGuide}
      colors={COLOR_SET.ERROR.colors}
    />
  );
}

export function WarningColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.WARNING.title}
      description={COLOR_SET.WARNING.description}
      usageGuide={COLOR_SET.WARNING.usageGuide}
      colors={COLOR_SET.WARNING.colors}
    />
  );
}

export function SuccessColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.SUCCESS.title}
      description={COLOR_SET.SUCCESS.description}
      usageGuide={COLOR_SET.SUCCESS.usageGuide}
      colors={COLOR_SET.SUCCESS.colors}
    />
  );
}

export function GradientColorsSection() {
  return (
    <ColorsSection
      title={COLOR_SET.GRADIENT.title}
      description={COLOR_SET.GRADIENT.description}
      usageGuide={COLOR_SET.GRADIENT.usageGuide}
      colors={COLOR_SET.GRADIENT.colors}
    />
  );
}

type TColorsSectionProps = {
  title: string;
  description: string;
  usageGuide?: string;
  colors: TColor[];
};

export function ColorsSection(props: TColorsSectionProps) {
  return (
    <section
      style={{
        marginInline: 20,
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: 72,
          lineHeight: '94px',
          color: '#0D1422',
        }}
      >
        {props.title}
      </h2>
      <p
        style={{
          marginTop: 16,
          marginBottom: 48,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '19px',
          color: '#2F3A4C',
        }}
      >
        {props.description}
      </p>
      <ExampleTable colorName={props.colors[0].colorClassName} />
      <div style={{ marginTop: 48 }}>
        <ColorsContainer>
          {props.colors.map((color) => (
            <DemoColor
              key={color.colorClassName}
              colorName={color.colorName}
              colorClassName={color.colorClassName}
              demoClassName={color.demoClassName}
            />
          ))}
        </ColorsContainer>
      </div>
    </section>
  );
}

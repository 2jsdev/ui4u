type TwoJsDevDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface TwoJsDevDemoControlProps {
  type: TwoJsDevDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface TwoJsDevDemoBase {
  component?: React.FC;
  wrapper?: React.FC<{ children: React.ReactNode }>;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface TwoJsDevCodeDemo extends TwoJsDevDemoBase {
  type: 'demo';
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface TwoJsDevConfiguratorDemo extends TwoJsDevDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: TwoJsDevDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type TwoJsDevDemo = TwoJsDevCodeDemo | TwoJsDevConfiguratorDemo;

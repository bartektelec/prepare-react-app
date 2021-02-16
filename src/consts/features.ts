// NOTE
// All feature lists / enums are to be stored here
export enum Feature {
  'TypeScript',
  'PWA Support',
  'Streamed imports',
  'Router',
  'Redux',
  'Linter / Formatter',
  'Unit testing',
  'E2E testing',
}

export const FEATURE_TO_DIR: { [key: string]: string } = {
  TypeScript: 'ts',
  'PWA Support': 'pwa',
  'Streamed imports': 'cdn',
  Router: 'router',
  Redux: 'redux',
  'Linter / Formatter': 'lint',
  'Unit testing': 'unit_test',
  'E2E testing': 'e2e_test',
};

export enum StyleFormat {
  'BASE' = 'CSS / SCSS',
  'TAILWIND' = 'Tailwind CSS with PostCSS',
  'CSS_MOD' = 'CSS Modules',
  'STYLE_COMP' = 'Styled Components',
}

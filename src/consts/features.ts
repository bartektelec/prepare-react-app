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
  [Feature['TypeScript']]: 'ts',
  [Feature['PWA Support']]: 'pwa',
  [Feature['Streamed imports']]: 'cdn',
  [Feature['Router']]: 'router',
  [Feature['Redux']]: 'redux',
  [Feature['Linter / Formatter']]: 'lint',
  [Feature['Unit testing']]: 'unit_test',
  [Feature['E2E testing']]: 'e2e_test',
};

export enum StyleFormat {
  'BASE' = 'CSS / SCSS',
  'TAILWIND' = 'Tailwind CSS with PostCSS',
  'CSS_MOD' = 'CSS Modules',
  'STYLE_COMP' = 'Styled Components',
}

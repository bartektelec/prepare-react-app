// NOTE
// All feature lists / enums are to be stored here
export enum Feature {
  TS = <any>'TypeScript',
  PWA = <any>'PWA Support',
  CDN = <any>'Streamed imports',
  ROUTER = <any>'Router',
  REDUX = <any>'Redux',
  LINT = <any>'Linter / Formatter',
  UNIT_TEST = <any>'Unit testing',
  E2E_TEST = <any>'E2E testing',
}

export enum StyleFormat {
  'BASE' = 'CSS / SCSS',
  'TAILWIND' = 'Tailwind CSS with PostCSS',
  'CSS_MOD' = 'CSS Modules',
  'STYLE_COMP' = 'Styled Components',
}

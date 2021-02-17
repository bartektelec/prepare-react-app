import { Feature } from '../../consts/features';
import { PATH_BLUEPRINTS } from '../../consts/paths';
import resolveBlueprints from '../../core/blueprints/resolveBlueprints';
import path from 'path';

describe('resolveBlueprints', () => {
  it('should add a base folder', () => {
    const dir = resolveBlueprints([]);
    expect(dir).toHaveLength(1);
  });
  it('should add a base ts folder', () => {
    const dir = resolveBlueprints(['TypeScript']);
    expect(dir).toContain(path.join(PATH_BLUEPRINTS, 'base_ts'));
  });
  it('should find directory for one blueprint', () => {
    expect(resolveBlueprints(['PWA Support'])).toContain(
      path.join(PATH_BLUEPRINTS, 'pwa')
    );
    expect(resolveBlueprints(['Streamed imports'])).toContain(
      path.join(PATH_BLUEPRINTS, 'cdn')
    );
  });
  it('should find directory for multiple blueprint', () => {
    const dirs = resolveBlueprints(['PWA Support', 'Streamed imports']);
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'cdn'));
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'pwa'));
  });
  it('should find directories for typescript variants', () => {
    const dirs = resolveBlueprints([
      'PWA Support',
      'Streamed imports',
      'TypeScript',
    ]);
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'pwa'));
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'cdn_ts'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'cdn'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'pwa_ts'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'ts'));
  });

  it('should not add directories that have not been added yet', () => {
    const dir = resolveBlueprints(['Linter / Formatter']);
    expect(dir).toContain(path.join(PATH_BLUEPRINTS, 'base'));
    expect(dir).not.toContain(path.join(PATH_BLUEPRINTS, 'lint'));
    expect(dir).not.toContain(path.join(PATH_BLUEPRINTS, 'lint_ts'));
  });
});

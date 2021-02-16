import { Feature } from '../../consts/features';
import resolveBlueprints from '../../core/blueprints/resolveBlueprints';

describe('resolveBlueprints', () => {
  it('should add a base folder', () => {
    const dir = resolveBlueprints([]);
    expect(dir).toContain('base');
  });
  it('should add a base ts folder', () => {
    const dir = resolveBlueprints([Feature.TypeScript]);
    expect(dir).toContain('base_ts');
  });
  it('should find directory for one blueprint', () => {
    expect(resolveBlueprints([Feature['PWA Support']])).toContain('pwa');
    expect(resolveBlueprints([Feature['Streamed imports']])).not.toContain(
      'cdn'
    );
  });
  it('should find directory for multiple blueprint', () => {
    const dirs = resolveBlueprints([
      Feature['PWA Support'],
      Feature['Streamed imports'],
    ]);
    expect(dirs).toContain('cdn');
    expect(dirs).toContain('pwa');
  });
  it('should find directories for typescript variants', () => {
    const dirs = resolveBlueprints([
      Feature['PWA Support'],
      Feature['Streamed imports'],
      Feature['TypeScript'],
    ]);
    expect(dirs).toContain('pwa');
    expect(dirs).toContain('cdn_ts');
    expect(dirs).not.toContain('cdn');
    expect(dirs).not.toContain('pwa_ts');
    expect(dirs).not.toContain('ts');
  });

  it('should not add directories that have not been added yet', () => {
    const dir = resolveBlueprints([Feature['Linter / Formatter']]);
    expect(dir).toContain('base');
    expect(dir).not.toContain('lint');
    expect(dir).not.toContain('lint_ts');
  });
});

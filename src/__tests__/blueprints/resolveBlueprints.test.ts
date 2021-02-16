import { Feature } from '../../consts/features';
import resolveBlueprints from '../../core/blueprints/resolveBlueprints';

describe('resolveBlueprints', () => {
  it('should add a base folder', () => {
    const dir = resolveBlueprints([]);
    expect(dir).toContain('base');
  });
  it('should add a base ts folder', () => {
    const dir = resolveBlueprints([Feature.TS]);
    expect(dir).toContain('base_ts');
  });
  it('should find directory for one blueprint', () => {
    expect(resolveBlueprints([Feature.PWA])).toContain('pwa');
    expect(resolveBlueprints([Feature.PWA])).not.toContain('cdn');
  });
  it('should find directory for multiple blueprint', () => {
    const dirs = resolveBlueprints([Feature.PWA, Feature.CDN]);
    expect(dirs).toContain('cdn');
    expect(dirs).toContain('pwa');
  });
  it('should find directories for typescript variants', () => {
    const dirs = resolveBlueprints([Feature.PWA, Feature.CDN, Feature.TS]);
    expect(dirs).toContain('pwa');
    expect(dirs).toContain('cdn_ts');
    expect(dirs).not.toContain('cdn');
    expect(dirs).not.toContain('pwa_ts');
    expect(dirs).not.toContain('ts');
  });

  it('should not add directories that have not been added yet', () => {
    const dir = resolveBlueprints([Feature.LINT]);
    expect(dir).toContain('base');
    expect(dir).not.toContain('lint');
    expect(dir).not.toContain('lint_ts');
  });
});

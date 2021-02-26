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
    expect(resolveBlueprints(['Redux'])).toContain(
      path.join(PATH_BLUEPRINTS, 'redux')
    );
    expect(resolveBlueprints(['Router'])).toContain(
      path.join(PATH_BLUEPRINTS, 'router')
    );
  });
  it('should find directory for multiple blueprint', () => {
    const dirs = resolveBlueprints(['Redux', 'Router']);
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'redux'));
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'router'));
  });
  it('should find directories for typescript variants', () => {
    const dirs = resolveBlueprints([
      'Redux',
      'Router',
      'TypeScript',
    ]);
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'redux_ts'));
    expect(dirs).toContain(path.join(PATH_BLUEPRINTS, 'router_ts'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'redux'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'router'));
    expect(dirs).not.toContain(path.join(PATH_BLUEPRINTS, 'ts'));
  });


});

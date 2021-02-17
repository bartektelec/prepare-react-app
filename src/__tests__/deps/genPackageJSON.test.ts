import genPkgJSON from '../../core/deps/genPackageJSON';

describe('genPkgJSON', () => {
  it('should add project name to json', () => {
    const projName = 'this-is-a-test';

    const template = genPkgJSON(projName, { deps: [], devDeps: [] });

    expect(template.name).toBe(projName);
  });

  it('should add dependencies', () => {
    const mockDeps = [
      { pkg: 'abc', ver: '1.1.1' },
      { pkg: 'bcd', ver: '2.2.2' },
    ];

    const template = genPkgJSON('abc', { deps: mockDeps, devDeps: [] });

    expect(template.dependencies).toHaveProperty('abc');
    expect(template.dependencies.abc).toEqual('1.1.1');
    expect(template.dependencies).toHaveProperty('bcd');
    expect(template.dependencies.bcd).toEqual('2.2.2');
    expect(template.devDependencies).not.toHaveProperty('abc');
    expect(template.devDependencies).not.toHaveProperty('bcd');
    expect(template.devDependencies).toEqual({});
  });

  it('should add devdependencies', () => {
    const mockDeps = [
      { pkg: 'eff', ver: '1.1.1' },
      { pkg: 'ffe', ver: '2.2.2' },
    ];

    const temp = genPkgJSON('abc', { deps: [], devDeps: mockDeps });

    expect(temp.devDependencies).toHaveProperty('eff');
    expect(temp.devDependencies.eff).toEqual('1.1.1');
    expect(temp.devDependencies).toHaveProperty('ffe');
    expect(temp.devDependencies.ffe).toEqual('2.2.2');
    expect(temp.dependencies).not.toHaveProperty('eef');
    expect(temp.dependencies).not.toHaveProperty('ffe');
    expect(temp.dependencies).toEqual({});
  });
});

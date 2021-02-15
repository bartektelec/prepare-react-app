import genPkgJSON from '../../core/deps/genPackageJSON'

describe('genPkgJSON', () => {
    it('should add project name to json', () => {
        const projName = "this-is-a-test";

        const template = genPkgJSON(projName, {deps: [], devDeps: []});

        expect(template.name).toBe(projName);
    })

    it('should add dependencies', () => {
        const mockDeps = [{pkg: 'abc', ver: '1.1.1'}, {pkg: 'bcd', ver: '2.2.2'}];

        const template = genPkgJSON('abc', {deps: mockDeps, devDeps: []});

        expect(template.dependencies).toHaveProperty("abc");
        expect(template.dependencies.abc).toEqual("1.1.1");
        expect(template.dependencies).toHaveProperty("bcd");
        expect(template.dependencies.bcd).toEqual("2.2.2");
        expect(template.devDependencies).not.toHaveProperty("abc");
        expect(template.devDependencies).not.toHaveProperty("bcd");
        expect(template.devDependencies).toEqual({});

    })

    it('should add devdependencies', () => {
        const mockDeps = [{pkg: 'abc', ver: '1.1.1'}, {pkg: 'bcd', ver: '2.2.2'}];

        const template = genPkgJSON('abc', {deps: [], devDeps: mockDeps});

        expect(template.devDependencies).toHaveProperty("abc");
        expect(template.devDependencies.abc).toEqual("1.1.1");
        expect(template.devDependencies).toHaveProperty("bcd");
        expect(template.devDependencies.bcd).toEqual("2.2.2");
        expect(template.dependencies).not.toHaveProperty("abc");
        expect(template.dependencies).not.toHaveProperty("bcd");
        expect(template.dependencies).toEqual({});

    })
})
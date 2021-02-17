// NOTE
// This function is supposed to build a package.json file
// It should use provided project name
// It should add all npm scripts
// It should add all dependencies and devDependencies

// SECTION
// Input: Dependencies lists, project name
// Return: package.json file

import { Feature } from '../../consts/features';
import { DepsFile } from '../../types/index';

type JSONDependencyList = Record<string, string>;
interface PackageJSON {
  name: string;
  version: string;
  private: boolean;
  scripts: Record<string, string>;
  devDependencies: JSONDependencyList;
  dependencies: JSONDependencyList;
}

const JSON_TEMPLATE: PackageJSON = {
  name: '',
  version: '1.0.0',
  private: true,
  scripts: {
    dev: 'snowpack dev',
    build: 'snowpack build',
    lint: 'eslint ./ --quiet --ext .js,.jsx,.ts,.tsx',
    'lint:fix': 'eslint ./ --quiet --fix',
    test: 'jest',
    'test:watch': 'jest --watchAll',
  },
  devDependencies: {},
  dependencies: {},
};

export default function (name: string, deps: DepsFile): PackageJSON {
  const tmp: PackageJSON = JSON.parse(JSON.stringify(JSON_TEMPLATE));
  tmp.name = name;

  for (let d of deps.deps) {
    tmp.dependencies[d.pkg] = d.ver;
  }
  for (let d of deps.devDeps) {
    tmp.devDependencies[d.pkg] = d.ver;
  }

  return tmp;
}

// NOTE
// This function is supposed to build a package.json file
// It should use provided project name
// It should add all npm scripts
// It should add all dependencies and devDependencies

// SECTION
// Input: Dependencies lists, project name
// Return: package.json file

import {Feature} from '../../consts/features';
import {DepsFile} from '../../types/index';

type JSONDependencyList = Record<string, string> 
interface PackageJSON {
  name: string,
  version: string,
  private: boolean,
  scripts: Record<string, string>
  devDependencies: JSONDependencyList,
  dependencies: JSONDependencyList,
}

const JSON_TEMPLATE: PackageJSON = {
    "name": "",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "snowpack dev",
      "build": "snowpack build",
      "lint": "eslint ./ --quiet --ext .js,.jsx,.ts,.tsx",
      "lint:fix": "eslint ./ --quiet --fix",
      "test": "jest",
      "test:watch": "jest --watchAll"
    },
    "devDependencies": {
    },
    "dependencies": {
    }
  }


  export default function(name: string, deps: DepsFile):PackageJSON {
      const tmp = {...JSON_TEMPLATE};
      tmp.name = name;

      for(let d of deps.deps) {
        const tdp = {
          [d.pkg]: d.ver
        }
        tmp.dependencies = {...tmp.dependencies, ...tdp}
      }
      for(let d of deps.devDeps) {
        const tdp = {
          [d.pkg]: d.ver
        }
        tmp.devDependencies = {...tmp.devDependencies, ...tdp}
      }

      return tmp;
  }
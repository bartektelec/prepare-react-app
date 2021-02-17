// NOTE
// This function is supposed to get all dependencies for all features
// It should scan through the deps directory and get data from every dependency file
// It should prefer _ts files if TypeScript is one of the features

// SECTION
// Input: Features list
// Return: Concat All deps for all the features

import path from 'path';
import fs from 'fs';

import { Feature, FEATURE_TO_DIR } from '../../consts/features';
import { PATH_DEPS } from '../../consts/paths';

export default async function (features: (keyof typeof Feature)[]) {
  let requiresTS = false;
  if (features.some(x => x === 'TypeScript')) {
    requiresTS = true;
  }

  let dependencies: { deps: any[]; devDeps: any[] } = { deps: [], devDeps: [] };

  for (let feature of features) {
    if (feature === 'TypeScript') return;
    const dirName = FEATURE_TO_DIR[Feature[feature]].toLowerCase();
    const pathname_ts = path.join(PATH_DEPS, `${dirName}_ts.ts`);
    const pathname_js = path.join(PATH_DEPS, `${dirName}.ts`);
    const doesTSexist = fs.existsSync(pathname_ts);
    const doesJSexist = fs.existsSync(pathname_js);

    if (requiresTS && doesTSexist) {
      console.log('required ts and getting ts');
      // if ts is added to project try to add _ts directory
      const data = await import(path.join(PATH_DEPS, `${dirName}_ts.ts`));
      return (dependencies = { ...dependencies, ...data.default });
    }
    if (!doesJSexist) return;

    const data = await import(path.join(PATH_DEPS, `${dirName}.ts`));
    // if ts is added but no directory with _ts exists or ts is disabled
    dependencies = { ...dependencies, ...data.default };
    return dependencies;
  }

  return dependencies;
}

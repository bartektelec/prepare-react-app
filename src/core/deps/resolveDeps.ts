// NOTE
// This function is supposed to get all dependencies for all features
// It should scan through the deps directory and get data from every dependency file
// It should prefer _ts files if TypeScript is one of the features

// SECTION
// Input: Features list
// Return: Concat All deps for all the features

import path from 'path';
import fs from 'fs';
import util from 'util';

import { Feature, FEATURE_TO_DIR } from '../../consts/features';
import { PATH_DEPS } from '../../consts/paths';

const readFileAsync = util.promisify(fs.readFile);

export default async function (features: (keyof typeof Feature)[]) {
  let requiresTS = false;
  if (features.some(x => x === 'TypeScript')) {
    requiresTS = true;
  }

  let dependencies: { deps: any[]; devDeps: any[] } = { deps: [], devDeps: [] };

  for (let feature of features) {
    if (feature === 'TypeScript') continue;
    const dirName = FEATURE_TO_DIR[Feature[feature]].toLowerCase();
    const pathname_ts = path.join(PATH_DEPS, `${dirName}_ts.json`);
    const pathname_js = path.join(PATH_DEPS, `${dirName}.json`);
    const doesTSexist = fs.existsSync(pathname_ts);
    const doesJSexist = fs.existsSync(pathname_js);

    if (requiresTS && doesTSexist) {
      console.log('required ts and getting ts');
      // if ts is added to project try to add _ts directory
      const data = await readFileAsync(
        path.join(PATH_DEPS, `${dirName}_ts.json`),
        'utf-8'
      );
      const dataObj = JSON.parse(data);
      dependencies = { ...dependencies, ...dataObj };
      continue;
    }
    if (!doesJSexist) continue;

    const data = await readFileAsync(
      path.join(PATH_DEPS, `${dirName}.json`),
      'utf-8'
    );
    // if ts is added but no directory with _ts exists or ts is disabled
    const dataObj = JSON.parse(data);
    dependencies = { ...dependencies, ...dataObj };
  }

  return dependencies;
}

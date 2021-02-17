// NOTE
// This function is a higher abstraction for all ./deps functions

// SECTION
// Input: Features list
// Return: Dependency files - package.json (and optional deps.js file if needed)

import { Feature } from '../consts/features';
import resolveDeps from './deps/resolveDeps';
import genPkgJSON from './deps/genPackageJSON';

export default async function (
  projectName: string,
  features: (keyof typeof Feature)[]
) {
  const deps = await resolveDeps(features);
  console.log('Adding dependencies to package.json...');
  const pkgFile = await genPkgJSON(projectName, deps);
  return pkgFile;
}

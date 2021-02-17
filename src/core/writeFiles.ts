// NOTE
// This function is supposed to write all given files to the destination project directory

// SECTION
// Input: Project path ,Files
// Return:

import fs from 'fs-extra';
import util from 'util';

const writeAsync = util.promisify(fs.writeFile);

export default async function (path: string, files: string[]) {
  for (let file of files) {
    await fs.copy(file, path);
  }
}

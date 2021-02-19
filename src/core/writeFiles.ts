// NOTE
// This function is supposed to write all given files to the destination project directory

// SECTION
// Input: Project path ,Files
// Return:

import fs from 'fs-extra';

export default async function (path: string, files: string[]) {
  for (let file of files) {
    await fs.copy(file, path);
  }
}

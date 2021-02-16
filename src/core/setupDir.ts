// NOTE
// This function is supposed to create a project directory
// It should check if directory exists, and if so if it's empty
// It should throw if the directory isn't empty or couldn't be created

// SECTION
// Input: project name
// Return: project directory

import fs from 'fs';
import path from 'path';
import util from 'util';

const mkdirAsync = util.promisify(fs.mkdir);
const readdirAsync = util.promisify(fs.readdir);

export default async function (directory: string) {
  const pathname = path.join('.', directory);
  const doesDirectoryExist = fs.existsSync(pathname);
  if (!doesDirectoryExist) {
    await mkdirAsync(pathname);
  }

  const dirContent = await readdirAsync(pathname);
  if (dirContent.length)
    throw new Error(`Directory must be empty to create a project`);
  return pathname;
}

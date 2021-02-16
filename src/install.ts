// NOTE
// This function is supposed to get created project directory
// It should then let wizard ask questions and handle further installation
// by passing features list to blueprint and deps handlers

// SECTION
// Input: Project directory
// Return: void

import fs from 'fs';
import path from 'path';

import { Feature } from './consts/features';

import setupDir from './core/setupDir';
import resolveBlueprints from './core/blueprints/resolveBlueprints';
import handleDeps from './core/handleDeps';

export default async function install(name: string, deps: Feature[]) {
  try {
    console.log('Preparing directory for install');
    const dirname = await setupDir(name);
    console.log('Fetching needed blueprints...');
    const blueprints = await resolveBlueprints(deps);
    console.log('Generating a package.json file...');
    const pkgJSONfile = await handleDeps(name, deps);
    console.log(pkgJSONfile);
  } catch (error) {
    console.error(error);
  }
}

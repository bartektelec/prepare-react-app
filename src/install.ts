// NOTE
// This function is supposed to get created project directory
// It should then let wizard ask questions and handle further installation
// by passing features list to blueprint and deps handlers

// SECTION
// Input: Project directory
// Return: void

import fs from 'fs';
import path from 'path';
import util from 'util';
import { exec } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

import { Feature } from './consts/features';

import setupDir from './core/setupDir';
import resolveBlueprints from './core/blueprints/resolveBlueprints';
import handleDeps from './core/handleDeps';
import writeFiles from './core/writeFiles';

const writeFileAsync = util.promisify(fs.writeFile);
const execAsync = util.promisify(exec);
const renameAsync = util.promisify(fs.rename);

export default async function install(
  name: string,
  features: (keyof typeof Feature)[]
) {
  const spinner = ora('Preparing directory for install').start();
  spinner.spinner = 'dots3';
  try {
    const dirname = await setupDir(name);

    spinner.text = 'Studying recipes';
    const blueprints = await resolveBlueprints(features);

    spinner.text = 'Heating up the oven';
    const pkgJSONfile = await handleDeps(name, features);

    spinner.text = 'Blending all the ingredients';
    await writeFiles(dirname, blueprints);

    spinner.text = 'Adding a pinch of salt';
    await writeFileAsync(
      path.join(dirname, 'package.json'),
      JSON.stringify(pkgJSONfile)
    );

    spinner.text = 'Waiting for it to finish baking';

    spinner.text = 'Adding sprinkles on top';
    if(fs.existsSync(path.join(dirname, '.npmignore'))) {
      await renameAsync(
        path.join(dirname, '.npmignore'),
        path.join(dirname, '.gitignore')
        );
      }

    spinner.succeed('Enjoy!');
    if (!spinner.isSpinning) {
      console.log('Project was succefully created.');

      console.log(
        chalk.green(
          `You can now create awesome stuff in your project directory`
        )
      );
      console.log(chalk.yellow(`$ cd ./${dirname}/`));
      console.log(chalk.underline(`Useful NPM commands:`));
      console.log(chalk.cyan(`dev - Start a development server`));
      console.log(chalk.cyan(`build - Build your project`));
      console.log(chalk.cyan(`lint - Check for linter warnings`));
      console.log(
        chalk.cyan(`lint:fix - Check for linter warnings and fix them`)
      );
      console.log(chalk.cyan(`test - Run tests`));
      console.log(chalk.cyan(`test:watch - Run tests with watcher`));
    }
  } catch (error) {
    spinner.fail(error.message);
  }
}

#!/usr/bin/env node

import inquirer from 'inquirer';
import projectWizard from './wizard';
import { PATH_BLUEPRINTS } from './consts/paths';

const pathName = process.argv[2];
console.log(PATH_BLUEPRINTS);
// check if directory exists and is empty if not warn user
if (!pathName) {
  init();
} else {
  projectWizard(pathName);
}

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'project_name',
        message: 'What do you want to call the project?',
        validate: input => Boolean(input.length),
      },
    ])
    .then(answers => {
      projectWizard(answers.project_name);
    })
    .catch(error => {
      if (error.isTtyError) {
        console.log(error);
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error);
        // Something else went wrong
      }
    });
}

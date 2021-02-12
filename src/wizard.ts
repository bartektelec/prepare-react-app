// NOTE
// This function is supposed to ask the user some questions
// It should return all the choices made by user

// SECTION
// Input: none
// Return: List of features

import inquirer from 'inquirer';
import install from './install';

export default function projectWizard(name: string) {
  console.log(`Creating a project named ${name}`);
  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'features',
        message: 'Choose features',
        choices: [],
      },
    ])
    .then(answers => {
      console.log(name);
      console.log(answers);
      // install(name, answers.features);
    })
    .catch(error => {
      console.error(error);
    });
}

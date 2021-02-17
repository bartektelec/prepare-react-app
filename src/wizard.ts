// NOTE
// This function is supposed to ask the user some questions
// It should return all the choices made by user

// SECTION
// Input: none
// Return: List of features

import { Feature } from './consts/features';
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
        choices: [...Object.values(Feature)],
      },
    ])
    .then((answers: { features: Feature[] }) => {
      install(name, answers.features);
    })
    .catch(error => {
      console.error(error);
    });
}

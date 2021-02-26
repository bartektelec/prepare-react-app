// NOTE
// This function is supposed to ask the user some questions
// It should return all the choices made by user

// SECTION
// Input: none
// Return: List of features

import { Feature } from './consts/features';
import inquirer from 'inquirer';
import install from './install';
import fs from 'fs';
import path from 'path';
import {PATH_BLUEPRINTS} from './consts/paths';
import {FEATURE_TO_DIR} from './consts/features'

export default function projectWizard(name: string) {
  console.log(`Creating a project named ${name}`);
  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'features',
        message: 'Choose features',
        choices: [
          ...Object.values(Feature).filter(key => typeof key === 'string').map((x) => {
            const k = x as keyof typeof Feature;
            const tmp = FEATURE_TO_DIR[Feature[k]];
            const dirname = path.join(PATH_BLUEPRINTS, tmp);
            if(k === 'TypeScript' || fs.existsSync(dirname)){
              return x;
            }
            return ({
              name: x,
              disabled: true
            })
            
          }), // prevent number values to display
        ],
      },
    ])
    .then((answers: { features: (keyof typeof Feature)[] }) => {
      install(name, answers.features);
    })
    .catch(error => {
      console.error(error);
    });
}

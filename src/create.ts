import inquirer from 'inquirer';

export default function createProject(name: string) {
  console.log(`Creating a project named ${name}`);
  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'features',
        message: 'Choose features',
        choices: [
          'TypeScript',
          'PWA Support',
          'Router',
          'Redux',
          'Linter / Formatter',
          'Unit testing',
          'E2E Testing',
        ],
      },
    ])
    .then(answers => {
      console.log(name);
      console.log(answers);
    })
    .catch(error => {
      console.error(error);
    });
}

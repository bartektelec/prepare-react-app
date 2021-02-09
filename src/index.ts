import inquirer from 'inquirer';
import createProject from './create';

const pathName = process.argv[2];

// check if directory exists and is empty if not warn user
if (!pathName) {
  init();
} else {
  createProject(pathName);
}

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'project_name',
        message: 'What do you want to call the project?',
      },
    ])
    .then(answers => {
      if (!answers.project_name.length) {
        console.log('Cannot create a project without a name');
        return init();
      }
      createProject(answers.project_name);
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

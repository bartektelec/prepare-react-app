var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "inquirer"], function (require, exports, inquirer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    inquirer_1 = __importDefault(inquirer_1);
    inquirer_1.default
        .prompt(['This is my quiestion'])
        .then(function (answers) {
        console.log(answers);
    })
        .catch(function (error) {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
});

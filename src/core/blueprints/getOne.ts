// NOTE
// This function is supposed to get all files for one directory name

// SECTION
// Input: Directory name (optionally _ts if needed)
// Return: All blueprint files for that directory

import fs from 'fs';
import path from 'path';

import {PATH_BLUEPRINTS} from '@src/consts/paths';

export default async function(dirName: string) {
    try {
        const dirPath = path.join(PATH_BLUEPRINTS, dirName);
        if(!fs.existsSync(dirPath)) throw new Error(`Directory blueprint ${dirName} doesn't exist`);
        const files = await fs.readdirSync(dirPath).map(x => dirName + '/' + x);
        return files;

    } catch(error) {
        console.log(error);
    }


}
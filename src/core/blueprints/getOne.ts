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
        const files = fs.createReadStream(dirPath, {encoding: 'utf-8'});

        return files;

    } catch(error) {
        console.log(error);
    }


}
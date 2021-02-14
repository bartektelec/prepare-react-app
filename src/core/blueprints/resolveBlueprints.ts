// NOTE
// This function is supposed to scan the blueprints directory
// It should return all the blueprint files for all chosen features
// It should prefer _ts directories if TypeScript is one of the features.

// SECTION
// Input: Features list
// Return: Concat All blueprint files for the project

import fs from 'fs';
import path from 'path';

import {Feature} from '../../consts/features';
import {PATH_BLUEPRINTS} from '../../consts/paths';


export default function(features: Feature[]) {
    let requiresTS = false;
    if(features.some(x => x === Feature.TS)) {requiresTS = true};

    const directories: string[] = [];

    if(requiresTS) {        
        if(!fs.existsSync(path.join(PATH_BLUEPRINTS, 'base_ts'))) throw new Error('Couldnt find base (TS) folder!');
        directories.push('base_ts')
    } else {
        if(!fs.existsSync(path.join(PATH_BLUEPRINTS, 'base'))) throw new Error('Couldnt find base folder!');
        directories.push('base')
    }

    features.forEach(feature => {
        if(feature === Feature.TS) return;
        const dirName = (Feature[feature]).toLowerCase();
        if(requiresTS && fs.existsSync(path.join(PATH_BLUEPRINTS, `${dirName}_ts`))) {
            // if ts is added to project try to add _ts directory
            return directories.push(`${dirName}_ts`);
        }
        if(!fs.existsSync(path.join(PATH_BLUEPRINTS, dirName))) return;
        // if ts is added but no directory with _ts exists or ts is disabled
        return directories.push(`${dirName}`);
    })

    return directories;
}
// NOTE
// This function is supposed to get all dependencies for all features
// It should scan through the deps directory and get data from every dependency file
// It should prefer _ts files if TypeScript is one of the features

// SECTION
// Input: Features list
// Return: Concat All deps for all the features

import path from 'path';
import util from 'util';
import fs from 'fs';

import {Feature} from '../../consts/features';
import {PATH_DEPS} from '../../consts/paths';

export default async function (features: Feature[]) {
    try {

        let requiresTS = false;
        if(features.some(x => x === Feature.TS)) {requiresTS = true};
    
        
        let dependencies:{deps: any[], devDeps: any[]} ={deps: [], devDeps: []};
        
        for(let feature of features) {
            if(feature === Feature.TS) return;
            const dirName = (Feature[feature]).toLowerCase();
            const pathname_ts = path.join(PATH_DEPS, `${dirName}_ts.ts`);
            const pathname_js = path.join(PATH_DEPS, `${dirName}.ts`);
            const doesTSexist =  fs.existsSync(pathname_ts);
            const doesJSexist =  fs.existsSync(pathname_js)
            
            if(requiresTS && doesTSexist) {
                console.log('required ts and getting ts')
                // if ts is added to project try to add _ts directory
                const data = await import(path.join(PATH_DEPS, `${dirName}_ts.ts`))
                return dependencies = {...dependencies, ...data.default};
            }
            if(!doesJSexist) return;
            
            const data = await import(path.join(PATH_DEPS, `${dirName}.ts`))
            // if ts is added but no directory with _ts exists or ts is disabled
            
            return dependencies = {...dependencies, ...data.default};
        }
        
        
        return dependencies;
    } catch(error) {
        console.error(error);
    }
}
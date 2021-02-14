import getOne from '../../../src/core/blueprints/getOne';
import {PATH_BLUEPRINTS} from '../../../src/consts/paths';
import fs from 'fs';

describe('Blueprint getOne', () => {
    it('should return all files out of base JS blueprint', () => {
        const files = getOne('base');
        expect(files).toHaveLength(0);
    })
    it('should return all files out of base TS blueprint', () => {

    })
})
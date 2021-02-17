import mock from 'mock-fs';
import setupDir from '../core/setupDir';

describe('setupDir', () => {
  it('should be able to create a directory', async () => {
    mock({});
    await expect(setupDir('test-app')).resolves.toEqual('test-app');
  });
  it('should get path for directory that is empty', async () => {
    mock({
      'test-app': {},
    });
    await expect(setupDir('test-app')).resolves.toEqual('test-app');
  });
  it('should throw an error for directory that is not empty', async () => {
    mock({
      'test-app': {
        'testfile.txt': 'test file here',
      },
    });
    await expect(setupDir('test-app')).rejects.toThrowError(
      'Directory must be empty to create a project'
    );
  });
});

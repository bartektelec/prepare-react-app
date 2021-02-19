import resolveDeps from '../../core/deps/resolveDeps';
import { Feature } from '../../consts/features';

describe('resolveDeps', () => {
  it('should not get any deps for a empty project', async () => {
    const data = await resolveDeps([]);
    await expect(data.deps).toHaveLength(2);
    await expect(data.devDeps).toHaveLength(5);
  });

  it('should find dependencies for unit testing', async () => {
    const data = await resolveDeps(['Unit testing']);
    await expect(data.deps).toHaveLength(3);
    await expect(data.devDeps).toHaveLength(11);
  });

  it('should find dependencies for unit testing when TS project', async () => {
    const data = await resolveDeps(['Unit testing', 'TypeScript']);
    await expect(data.deps).toHaveLength(3);
    await expect(data.devDeps).toHaveLength(16);
  });
});

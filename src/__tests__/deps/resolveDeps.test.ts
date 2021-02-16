import resolveDeps from '../../core/deps/resolveDeps';
import { Feature } from '../../consts/features';

describe('resolveDeps', () => {
  it('should not get any deps for a empty project', async () => {
    const data = await resolveDeps([]);
    await expect(data.deps).toHaveLength(0);
    await expect(data.devDeps).toHaveLength(0);
  });

  it('should find dependencies for unit testing', async () => {
    const data = await resolveDeps([Feature['Unit testing']]);
    await expect(data.deps).toHaveLength(1);
    await expect(data.devDeps).toHaveLength(5);
  });

  it('should find dependencies for unit testing when TS project', async () => {
    const data = await resolveDeps([
      Feature['Unit testing'],
      Feature['TypeScript'],
    ]);
    await expect(data.deps).toHaveLength(1);
    await expect(data.devDeps).toHaveLength(5);
  });
});

import { join, isAbsolute } from 'node:path';
import { cp, mkdir, rm } from 'fs/promises';
import type { Plugin } from 'vite';

const toAbsolutePath = (path: string) => {
  const cwd = process.cwd();
  if (!isAbsolute(path)) {
    return join(cwd, path);
  }

  return path;
};

function createPlugin(): Plugin {

  const plugin: Plugin = { name: 'vite:postBuild' };

  let called = false;

  plugin.closeBundle = async function postBundle() {
    // run once
    if (called) {
      return;
    }

    const startTime = Date.now();
    called = true;

    const src = toAbsolutePath('dist/src');
    const srcLib = toAbsolutePath('dist/src/lib');
    const destLib = toAbsolutePath('dist/lib');
    const configPath = toAbsolutePath('dist/vite.config.d.ts');

    await mkdir(destLib);
    await cp(srcLib, destLib, { recursive: true });
    await rm(src, { recursive: true });
    await rm(configPath);

    const expired = Number((Date.now() - startTime) / 1000);

    // eslint-disable-next-line no-console
    console.info(`Post-build done in ${expired.toFixed(1)}s`);
  };

  return plugin;
}

export {
  createPlugin,
};

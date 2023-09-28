import path from 'path';

// @ts-ignore
import tsConfig from './tsconfig.json';

const createAliases = () => {
  const tsAliases = tsConfig.compilerOptions.paths;
  type TKey = keyof typeof tsAliases;

  return Object.keys(tsAliases).reduce((result, key) => {
    const alias = tsAliases[key as TKey][0]?.replace('/*', '') || '';
    const resKey = key.replace('/*', '') as TKey;

    if (alias) {
      result[resKey] = path.resolve(__dirname, `./${alias}`);
    }

    return result;
  }, {} as Record<TKey, string>);
}

export {
  createAliases,
}

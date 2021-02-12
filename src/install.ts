// NOTE
// This function is supposed to get created project directory
// It should then let wizard ask questions and handle further installation
// by passing features list to blueprint and deps handlers

// SECTION
// Input: Project directory
// Return: void

import fs from 'fs';
import path from 'path';

const presets: Record<string, { [key: string]: string }> = {
  parcel: {
    'parcel-bundler': '^1.12.4',
  },
  typescript: {
    typescript: '^4.1.3',
  },
};

interface Package {
  name: string;
  version: string;
  private: boolean;
  scripts: Record<string, string>;
  devDependencies: { [key: string]: string };
}

export default function install(name: string, deps: string[]) {
  const pkg: Package = {
    name,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: 'parcel public/index.html',
      build: 'parcel build public/index.html --public-url .',
    },
    devDependencies: {
      react: '^17.0.1',
      'react-dom': '^17.0.1',
      'parcel-bundler': '^1.12.4',
    },
  };

  deps.forEach((dep: string) => {
    const pkgDeps = { ...pkg.devDependencies };
    const depName = dep.toLowerCase();
    pkg.devDependencies = { ...pkgDeps, ...presets[depName] };
  });

  const fileExtension = deps.includes('TypeScript') ? 'tsx' : 'js';

  fs.mkdirSync(path.join('.', name));
  fs.mkdirSync(path.join('.', name, 'public'));
  fs.mkdirSync(path.join('.', name, 'src'));

  fs.writeFile(
    path.join('.', name, 'package.json'),
    JSON.stringify(pkg),
    err => {
      if (err) console.error(err);
    }
  );

  console.log(pkg);
}

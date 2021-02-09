import fs from 'fs';
import path from 'path';
import getHTMLtemplate from './utils/getHTMLtemplate';
import {
  getInitialScript,
  getAppScript,
  getStyleTemplate,
} from './utils/getScriptTemplate';

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
      build: 'parcel build public/index.html ',
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

  fs.mkdirSync(path.join(__dirname, name));
  fs.mkdirSync(path.join(__dirname, name, 'public'));
  fs.mkdirSync(path.join(__dirname, name, 'src'));

  fs.writeFile(
    path.join(__dirname, name, 'package.json'),
    JSON.stringify(pkg),
    err => {
      if (err) console.error(err);
    }
  );
  fs.writeFile(
    path.join(__dirname, name, 'src', `index.${fileExtension}`),
    getInitialScript(fileExtension),
    err => {
      if (err) console.error(err);
    }
  );
  fs.writeFile(
    path.join(__dirname, name, 'src', `App.${fileExtension}`),
    getAppScript(name),
    err => {
      if (err) console.error(err);
    }
  );
  fs.writeFile(
    path.join(__dirname, name, 'src', `style.css`),
    getStyleTemplate(),
    err => {
      if (err) console.error(err);
    }
  );
  fs.writeFile(
    path.join(__dirname, name, 'public', 'index.html'),
    getHTMLtemplate(name),
    err => {
      if (err) console.error(err);
    }
  );

  console.log(pkg);
}

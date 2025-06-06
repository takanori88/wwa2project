import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectRoot = path.resolve(__dirname, '..');
const ROOT_DIRS = [
  path.join(projectRoot, 'src/app'),
  path.join(projectRoot, 'src/app/components')
];

const TARGET_EXT = '.js';
const NEW_EXT = '.jsx';

function walk(dir) {
  console.log(`📂 Walking through: ${dir}`);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && path.extname(entry.name) === TARGET_EXT) {
      const newPath = fullPath.replace(/\.js$/, NEW_EXT);
      fs.renameSync(fullPath, newPath);
      console.log(`✅ Renamed: ${fullPath} → ${newPath}`);
    }
  }
}

for (const dir of ROOT_DIRS) {
  if (fs.existsSync(dir)) {
    walk(dir);
  } else {
    console.warn(`❌ Not found: ${dir}`);
  }
}

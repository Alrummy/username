const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const filePath = path.join(outDir, 'entry.txt');
// Entry is a codename ID: the joke is that a 20-char make.fun "entry" is already its own punchline.
const entryText = 'nimble-finch-76-8842';
fs.writeFileSync(filePath, entryText);
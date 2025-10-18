const fs = require('fs');
const path = require('path');

// Recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Remove version suffixes from imports
function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Remove @version from all imports
  content = content.replace(/@\d+\.\d+\.\d+['"`]/g, (match) => {
    // Keep the closing quote/backtick
    return match.slice(-1);
  });
  
  // If content changed, write it back
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main
console.log('Fixing versioned imports...\n');

const files = findFiles('.');
let fixedCount = 0;

files.forEach(file => {
  if (fixImports(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files!`);

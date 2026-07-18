const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const navGallery = {
  ar: "المعرض",
  en: "Gallery",
  it: "Galleria",
  ru: "Галерея"
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(localesDir, file);
  
  if (fs.existsSync(filePath)) {
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (fileContent.nav) {
      fileContent.nav.gallery = navGallery[lang];
    }
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated nav.gallery in ${file}`);
  }
});

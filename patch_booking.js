const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const bookingDict = {
  en: {
    title: "Book Your Tour",
    name: "Full Name",
    phone: "Phone / WhatsApp",
    date: "Tour Date",
    adults: "Adults",
    children: "Children",
    notes: "Special Requests",
    fillRequired: "Please fill in your Name, Phone, and Date."
  },
  ar: {
    title: "احجز رحلتك",
    name: "الاسم بالكامل",
    phone: "رقم الهاتف / واتساب",
    date: "تاريخ الرحلة",
    adults: "البالغين",
    children: "الأطفال",
    notes: "طلبات خاصة",
    fillRequired: "يرجى ملء الاسم، رقم الهاتف، والتاريخ."
  },
  it: {
    title: "Prenota il tuo tour",
    name: "Nome e cognome",
    phone: "Telefono / WhatsApp",
    date: "Data del tour",
    adults: "Adulti",
    children: "Bambini",
    notes: "Richieste speciali",
    fillRequired: "Si prega di inserire Nome, Telefono e Data."
  },
  ru: {
    title: "Забронировать тур",
    name: "Полное имя",
    phone: "Телефон / WhatsApp",
    date: "Дата тура",
    adults: "Взрослые",
    children: "Дети",
    notes: "Особые пожелания",
    fillRequired: "Пожалуйста, укажите имя, телефон и дату."
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(localesDir, file);
  
  if (fs.existsSync(filePath)) {
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    fileContent.booking = bookingDict[lang];
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated booking object in ${file}`);
  }
});

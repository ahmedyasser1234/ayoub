const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const transferData = {
  en: {
    fleetTitle: "Our Premium Fleet & Pricing",
    fleetDesc: "Choose the perfect vehicle for your journey. We offer transparent pricing for popular destinations.",
    privateCar: "Private Car (Sedan)",
    privateDesc: "Hyundai, Chery, Mitsubishi Lancer, Toyota Corolla, Nissan. Perfect for up to 4 passengers.",
    minibus: "Minibus (Van)",
    minibusDesc: "Toyota Hiace. Comfortable seating for up to 14 passengers.",
    dest: "Destination",
    pricePrivate: "Private Car Price",
    priceMini: "Minibus Price",
    destSharm: "Inside Sharm El Sheikh (Any trip)",
    destDahab: "Dahab",
    destTaba: "Taba",
    destNuweiba: "Nuweiba"
  },
  ar: {
    fleetTitle: "أسطول سياراتنا وقائمة الأسعار",
    fleetDesc: "اختر السيارة المناسبة لرحلتك. نقدم أسعاراً واضحة لأشهر الوجهات.",
    privateCar: "سيارة خاصة (ملاكي)",
    privateDesc: "هيونداي، شيري، ميتسوبيشي لانسر، تويوتا كورولا، نيسان. مثالية حتى 4 ركاب.",
    minibus: "ميكروباص (فان)",
    minibusDesc: "تويوتا هاي ايس. مقاعد مريحة وتتسع حتى 14 راكباً.",
    dest: "الوجهة",
    pricePrivate: "سعر الملاكي",
    priceMini: "سعر الميكروباص",
    destSharm: "داخل شرم الشيخ (أي مشوار)",
    destDahab: "دهب",
    destTaba: "طابا",
    destNuweiba: "نويبع"
  },
  ru: {
    fleetTitle: "Наш Автопарк и Цены",
    fleetDesc: "Выберите идеальный автомобиль для вашей поездки. Прозрачные цены на популярные направления.",
    privateCar: "Легковой автомобиль",
    privateDesc: "Hyundai, Chery, Mitsubishi Lancer, Toyota Corolla, Nissan. До 4 пассажиров.",
    minibus: "Микроавтобус",
    minibusDesc: "Toyota Hiace. Комфортабельный салон до 14 пассажиров.",
    dest: "Направление",
    pricePrivate: "Цена (Легковой)",
    priceMini: "Цена (Микроавтобус)",
    destSharm: "Внутри Шарм-эль-Шейха (любая поездка)",
    destDahab: "Дахаб",
    destTaba: "Таба",
    destNuweiba: "Нувейба"
  },
  it: {
    fleetTitle: "La Nostra Flotta e Prezzi",
    fleetDesc: "Scegli il veicolo perfetto per il tuo viaggio. Prezzi trasparenti per le destinazioni popolari.",
    privateCar: "Auto Privata (Berlina)",
    privateDesc: "Hyundai, Chery, Mitsubishi Lancer, Toyota Corolla, Nissan. Ideale per un massimo di 4 passeggeri.",
    minibus: "Minibus (Furgone)",
    minibusDesc: "Toyota Hiace. Posti a sedere comodi fino a 14 passeggeri.",
    dest: "Destinazione",
    pricePrivate: "Prezzo Auto Privata",
    priceMini: "Prezzo Minibus",
    destSharm: "All'interno di Sharm El Sheikh (Qualsiasi viaggio)",
    destDahab: "Dahab",
    destTaba: "Taba",
    destNuweiba: "Nuweiba"
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(localesDir, file);
  
  if (fs.existsSync(filePath)) {
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Inject the new transfer keys
    if (!fileContent.transfer) {
      fileContent.transfer = {};
    }
    
    fileContent.transfer.fleetTitle = transferData[lang].fleetTitle;
    fileContent.transfer.fleetDesc = transferData[lang].fleetDesc;
    fileContent.transfer.privateCar = transferData[lang].privateCar;
    fileContent.transfer.privateDesc = transferData[lang].privateDesc;
    fileContent.transfer.minibus = transferData[lang].minibus;
    fileContent.transfer.minibusDesc = transferData[lang].minibusDesc;
    fileContent.transfer.dest = transferData[lang].dest;
    fileContent.transfer.pricePrivate = transferData[lang].pricePrivate;
    fileContent.transfer.priceMini = transferData[lang].priceMini;
    fileContent.transfer.destSharm = transferData[lang].destSharm;
    fileContent.transfer.destDahab = transferData[lang].destDahab;
    fileContent.transfer.destTaba = transferData[lang].destTaba;
    fileContent.transfer.destNuweiba = transferData[lang].destNuweiba;
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated ${file}`);
  }
});

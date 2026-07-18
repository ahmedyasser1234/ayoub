const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const transferData = {
  en: {
    fleetTitle: "Our Premium Fleet & Pricing",
    fleetDesc: "Choose the perfect vehicle for your journey. We offer transparent pricing for popular destinations.",
    dest: "Destination",
    priceHead: "Price",
    destSharm: "Inside Sharm El Sheikh (Any trip)",
    destDahab: "Dahab",
    destTaba: "Taba",
    destNuweiba: "Nuweiba",
    cars: {
      hyundai: { name: "Hyundai Sedan", desc: "Comfortable sedan. Perfect for up to 4 passengers." },
      chery: { name: "Chery Sedan", desc: "Modern and efficient. Perfect for up to 4 passengers." },
      lancer: { name: "Mitsubishi Lancer", desc: "Reliable and spacious. Perfect for up to 4 passengers." },
      corolla: { name: "Toyota Corolla", desc: "Classic comfort. Perfect for up to 4 passengers." },
      nissan: { name: "Nissan Sedan", desc: "Smooth ride. Perfect for up to 4 passengers." },
      minibus: { name: "Toyota Hiace Minibus", desc: "Comfortable seating for up to 14 passengers." }
    }
  },
  ar: {
    fleetTitle: "أسطول سياراتنا وقائمة الأسعار",
    fleetDesc: "اختر السيارة المناسبة لرحلتك. نقدم أسعاراً واضحة لأشهر الوجهات.",
    dest: "الوجهة",
    priceHead: "السعر",
    destSharm: "داخل شرم الشيخ (أي مشوار)",
    destDahab: "دهب",
    destTaba: "طابا",
    destNuweiba: "نويبع",
    cars: {
      hyundai: { name: "هيونداي (ملاكي)", desc: "سيارة سيدان مريحة. مثالية حتى 4 ركاب." },
      chery: { name: "شيري (ملاكي)", desc: "حديثة واقتصادية. مثالية حتى 4 ركاب." },
      lancer: { name: "ميتسوبيشي لانسر", desc: "اعتمادية وواسعة. مثالية حتى 4 ركاب." },
      corolla: { name: "تويوتا كورولا", desc: "راحة كلاسيكية. مثالية حتى 4 ركاب." },
      nissan: { name: "نيسان (ملاكي)", desc: "رحلة سلسة ومريحة. مثالية حتى 4 ركاب." },
      minibus: { name: "تويوتا هاي ايس (ميكروباص)", desc: "مقاعد مريحة وتتسع حتى 14 راكباً." }
    }
  },
  ru: {
    fleetTitle: "Наш Автопарк и Цены",
    fleetDesc: "Выберите идеальный автомобиль для вашей поездки. Прозрачные цены на популярные направления.",
    dest: "Направление",
    priceHead: "Цена",
    destSharm: "Внутри Шарм-эль-Шейха",
    destDahab: "Дахаб",
    destTaba: "Таба",
    destNuweiba: "Нувейба",
    cars: {
      hyundai: { name: "Hyundai (Седан)", desc: "Комфортный седан. До 4 пассажиров." },
      chery: { name: "Chery (Седан)", desc: "Современный седан. До 4 пассажиров." },
      lancer: { name: "Mitsubishi Lancer", desc: "Надежный и просторный. До 4 пассажиров." },
      corolla: { name: "Toyota Corolla", desc: "Классический комфорт. До 4 пассажиров." },
      nissan: { name: "Nissan (Седан)", desc: "Плавный ход. До 4 пассажиров." },
      minibus: { name: "Toyota Hiace (Микроавтобус)", desc: "Комфортабельный салон до 14 пассажиров." }
    }
  },
  it: {
    fleetTitle: "La Nostra Flotta e Prezzi",
    fleetDesc: "Scegli il veicolo perfetto per il tuo viaggio. Prezzi trasparenti per le destinazioni popolari.",
    dest: "Destinazione",
    priceHead: "Prezzo",
    destSharm: "All'interno di Sharm El Sheikh",
    destDahab: "Dahab",
    destTaba: "Taba",
    destNuweiba: "Nuweiba",
    cars: {
      hyundai: { name: "Hyundai (Berlina)", desc: "Berlina confortevole. Ideale per un massimo di 4 passeggeri." },
      chery: { name: "Chery (Berlina)", desc: "Moderna ed efficiente. Ideale per un massimo di 4 passeggeri." },
      lancer: { name: "Mitsubishi Lancer", desc: "Affidabile e spaziosa. Ideale per un massimo di 4 passeggeri." },
      corolla: { name: "Toyota Corolla", desc: "Comfort classico. Ideale per un massimo di 4 passeggeri." },
      nissan: { name: "Nissan (Berlina)", desc: "Guida fluida. Ideale per un massimo di 4 passeggeri." },
      minibus: { name: "Toyota Hiace (Minibus)", desc: "Posti a sedere comodi fino a 14 passeggeri." }
    }
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
    fileContent.transfer.dest = transferData[lang].dest;
    fileContent.transfer.priceHead = transferData[lang].priceHead;
    fileContent.transfer.destSharm = transferData[lang].destSharm;
    fileContent.transfer.destDahab = transferData[lang].destDahab;
    fileContent.transfer.destTaba = transferData[lang].destTaba;
    fileContent.transfer.destNuweiba = transferData[lang].destNuweiba;
    fileContent.transfer.cars = transferData[lang].cars;
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated ${file}`);
  }
});

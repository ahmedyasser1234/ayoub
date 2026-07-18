const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const data = {
  en: {
    whatYouWillSee: "What You Will See",
    includesAndExcludes: "What's Included & Excluded",
    whatToBring: "What To Bring",
    exploreOtherTours: "Explore Other Tours",
    safari: {
      tours: {
        single: {
          highlights: ["ATV riding in the Sinai desert", "Echo mountains stop", "Traditional Bedouin tea break", "Sunrise or Sunset views", "Optional Bedouin dinner"],
          bring: ["Comfortable clothes", "Sunglasses", "Camera/Phone", "Scarf/Keffiyeh", "Closed shoes"]
        },
        double: {
          highlights: ["Shared ATV riding in the Sinai desert", "Echo mountains stop", "Traditional Bedouin tea break", "Sunrise or Sunset views", "Optional Bedouin dinner"],
          bring: ["Comfortable clothes", "Sunglasses", "Camera/Phone", "Scarf/Keffiyeh", "Closed shoes"]
        },
        buggy2: {
          highlights: ["Off-road driving in a 2-seater buggy", "Echo mountains stop", "Traditional Bedouin tea break", "Sunrise or Sunset views"],
          bring: ["Comfortable clothes", "Sunglasses", "Camera/Phone", "Scarf/Keffiyeh", "Closed shoes"]
        },
        buggy4: {
          highlights: ["Family off-road driving in a 4-seater buggy", "Echo mountains stop", "Traditional Bedouin tea break", "Sunrise or Sunset views"],
          bring: ["Comfortable clothes", "Sunglasses", "Camera/Phone", "Scarf/Keffiyeh", "Closed shoes"]
        },
        dinner: {
          highlights: ["ATV desert adventure", "Camel riding experience", "Traditional Bedouin tea and dinner", "Oriental show and fire show", "Stargazing in the desert"],
          bring: ["Comfortable clothes", "Sunglasses", "Camera/Phone", "Scarf/Keffiyeh", "Light jacket (for evening)"]
        }
      }
    }
  },
  ar: {
    whatYouWillSee: "ما الذي سترونه",
    includesAndExcludes: "ما يشمله وما لا يشمله",
    whatToBring: "ما يجب إحضاره",
    exploreOtherTours: "استكشف رحلات أخرى",
    safari: {
      tours: {
        single: {
          highlights: ["مغامرة بيتش باجي في صحراء سيناء", "وقفة صدى الصوت بين الجبال", "الشاي البدوي في ريست بدوي تقليدي", "لقطات الغروب أو الشروق بين الجبال", "إضافة اختيارية: سهرة عشاء بدوي"],
          bring: ["ملابس مريحة", "نظارة شمسية", "كاميرا أو هاتف", "إسكارف خفيف", "حذاء مريح"]
        },
        double: {
          highlights: ["مغامرة بيتش باجي مزدوج في صحراء سيناء", "وقفة صدى الصوت بين الجبال", "الشاي البدوي في ريست بدوي تقليدي", "لقطات الغروب أو الشروق بين الجبال", "إضافة اختيارية: سهرة عشاء بدوي"],
          bring: ["ملابس مريحة", "نظارة شمسية", "كاميرا أو هاتف", "إسكارف خفيف", "حذاء مريح"]
        },
        buggy2: {
          highlights: ["قيادة باجي مقعدين في الصحراء", "وقفة صدى الصوت بين الجبال", "الشاي البدوي في ريست بدوي تقليدي", "لقطات الغروب أو الشروق بين الجبال"],
          bring: ["ملابس مريحة", "نظارة شمسية", "كاميرا أو هاتف", "إسكارف خفيف", "حذاء مريح"]
        },
        buggy4: {
          highlights: ["مغامرة عائلية في باجي 4 مقاعد", "وقفة صدى الصوت بين الجبال", "الشاي البدوي في ريست بدوي تقليدي", "لقطات الغروب أو الشروق بين الجبال"],
          bring: ["ملابس مريحة", "نظارة شمسية", "كاميرا أو هاتف", "إسكارف خفيف", "حذاء مريح"]
        },
        dinner: {
          highlights: ["مغامرة السفاري والبيتش باجي", "تجربة ركوب الجمال", "عشاء بدوي تقليدي وشاي", "عرض شرقي وعرض التنورة والنار", "مشاهدة النجوم في سماء الصحراء"],
          bring: ["ملابس مريحة", "نظارة شمسية", "كاميرا أو هاتف", "إسكارف خفيف", "جاكيت خفيف (للمساء)"]
        }
      }
    }
  },
  it: {
    whatYouWillSee: "Cosa Vedrai",
    includesAndExcludes: "Cosa è Incluso e Non Incluso",
    whatToBring: "Cosa Portare",
    exploreOtherTours: "Esplora Altri Tour",
    safari: {
      tours: {
        single: {
          highlights: ["Giro in ATV nel deserto del Sinai", "Sosta alle montagne dell'eco", "Tè beduino tradizionale", "Vista all'alba o al tramonto", "Cena beduina facoltativa"],
          bring: ["Vestiti comodi", "Occhiali da sole", "Fotocamera/Telefono", "Sciarpa", "Scarpe chiuse"]
        },
        double: {
          highlights: ["Giro in ATV doppio nel deserto", "Sosta alle montagne dell'eco", "Tè beduino tradizionale", "Vista all'alba o al tramonto", "Cena beduina facoltativa"],
          bring: ["Vestiti comodi", "Occhiali da sole", "Fotocamera/Telefono", "Sciarpa", "Scarpe chiuse"]
        },
        buggy2: {
          highlights: ["Guida fuoristrada in buggy a 2 posti", "Sosta alle montagne dell'eco", "Tè beduino tradizionale", "Vista all'alba o al tramonto"],
          bring: ["Vestiti comodi", "Occhiali da sole", "Fotocamera/Telefono", "Sciarpa", "Scarpe chiuse"]
        },
        buggy4: {
          highlights: ["Avventura in famiglia in buggy a 4 posti", "Sosta alle montagne dell'eco", "Tè beduino tradizionale", "Vista all'alba o al tramonto"],
          bring: ["Vestiti comodi", "Occhiali da sole", "Fotocamera/Telefono", "Sciarpa", "Scarpe chiuse"]
        },
        dinner: {
          highlights: ["Avventura in ATV", "Passeggiata in cammello", "Cena beduina e tè", "Spettacolo orientale e di fuoco", "Osservazione delle stelle"],
          bring: ["Vestiti comodi", "Occhiali da sole", "Fotocamera", "Sciarpa", "Giacca leggera (per la sera)"]
        }
      }
    }
  },
  ru: {
    whatYouWillSee: "Что вы увидите",
    includesAndExcludes: "Что включено и не включено",
    whatToBring: "Что взять с собой",
    exploreOtherTours: "Посмотреть другие туры",
    safari: {
      tours: {
        single: {
          highlights: ["Катание на квадроциклах по пустыне", "Остановка у гор эха", "Традиционный бедуинский чай", "Встреча рассвета или заката", "Бедуинский ужин (по желанию)"],
          bring: ["Удобная одежда", "Солнцезащитные очки", "Камера/Телефон", "Арафатка", "Закрытая обувь"]
        },
        double: {
          highlights: ["Совместное катание на квадроциклах", "Остановка у гор эха", "Традиционный бедуинский чай", "Встреча рассвета или заката", "Бедуинский ужин (по желанию)"],
          bring: ["Удобная одежда", "Солнцезащитные очки", "Камера/Телефон", "Арафатка", "Закрытая обувь"]
        },
        buggy2: {
          highlights: ["Езда по бездорожью на 2-местном багги", "Остановка у гор эха", "Традиционный бедуинский чай", "Встреча рассвета или заката"],
          bring: ["Удобная одежда", "Солнцезащитные очки", "Камера/Телефон", "Арафатка", "Закрытая обувь"]
        },
        buggy4: {
          highlights: ["Семейная поездка на 4-местном багги", "Остановка у гор эха", "Традиционный бедуинский чай", "Встреча рассвета или заката"],
          bring: ["Удобная одежда", "Солнцезащитные очки", "Камера/Телефон", "Арафатка", "Закрытая обувь"]
        },
        dinner: {
          highlights: ["Сафари на квадроциклах", "Катание на верблюдах", "Традиционный бедуинский чай и ужин", "Восточное шоу и фаер-шоу", "Наблюдение за звездами"],
          bring: ["Удобная одежда", "Солнцезащитные очки", "Камера/Телефон", "Арафатка", "Легкая куртка (на вечер)"]
        }
      }
    }
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(localesDir, file);
  
  if (fs.existsSync(filePath)) {
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Merge base keys
    fileContent.whatYouWillSee = data[lang].whatYouWillSee;
    fileContent.includesAndExcludes = data[lang].includesAndExcludes;
    fileContent.whatToBring = data[lang].whatToBring;
    fileContent.exploreOtherTours = data[lang].exploreOtherTours;
    
    // Merge safari tour details
    if (fileContent.safari && fileContent.safari.tours && data[lang].safari && data[lang].safari.tours) {
      Object.keys(data[lang].safari.tours).forEach(tourId => {
        if (fileContent.safari.tours[tourId]) {
          fileContent.safari.tours[tourId] = {
            ...fileContent.safari.tours[tourId],
            ...data[lang].safari.tours[tourId]
          };
        }
      });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated ${file}`);
  }
});

const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const data = {
  en: {
    readMore: "Read More",
    details: "Tour Details",
    overview: "Overview",
    includes: "What's Included",
    excludes: "What's Not Included",
    bookNowCard: "Book Now",
    contactUs: "Contact Us",
    secureBooking: "Secure Booking",
    from: "From",
    perPerson: "/ person",
    safari: {
      tours: {
        single: {
          longDesc: "Experience the ultimate freedom of the desert on your own ATV. This tour is designed for thrill-seekers who want to navigate the golden sand dunes of Sinai at their own pace.",
          included: ["Hotel pick-up & drop-off", "Professional guide", "Safety briefing & equipment", "ATV for single rider", "Bedouin tea break in the desert"],
          excluded: ["Personal expenses", "Photography service", "Scarf and goggles (available for rent)"]
        },
        double: {
          longDesc: "Share the excitement with a partner on a double ATV. Perfect for couples or friends, you can switch drivers midway and enjoy the breathtaking views together.",
          included: ["Hotel pick-up & drop-off", "Professional guide", "Safety briefing & equipment", "ATV for two riders", "Bedouin tea break in the desert"],
          excluded: ["Personal expenses", "Photography service", "Scarf and goggles (available for rent)"]
        },
        buggy2: {
          longDesc: "Take control of our powerful 2-seater side-by-side buggies. These robust vehicles offer a comfortable yet thrilling ride through the desert landscape, with a roll cage for extra safety.",
          included: ["Hotel pick-up & drop-off", "Professional guide", "Safety briefing & equipment", "2-seater Buggy", "Bedouin tea break"],
          excluded: ["Personal expenses", "Photography service", "Scarf and goggles"]
        },
        buggy4: {
          longDesc: "The ultimate group adventure! Our 4-seater buggies are perfect for families or groups of friends. Enjoy the off-road experience together in one vehicle.",
          included: ["Hotel pick-up & drop-off", "Professional guide", "Safety briefing & equipment", "4-seater Buggy", "Bedouin tea break"],
          excluded: ["Personal expenses", "Photography service", "Scarf and goggles"]
        },
        dinner: {
          longDesc: "A complete desert experience combining adventure with Bedouin culture. Start with an exhilarating ATV ride, enjoy a peaceful camel ride, and end the evening with a traditional Bedouin dinner and show under the stars.",
          included: ["Hotel pick-up & drop-off", "Professional guide", "ATV ride", "Camel ride", "Traditional Bedouin dinner", "Oriental show & fire show", "Soft drinks & tea"],
          excluded: ["Personal expenses", "Photography service", "Scarf and goggles"]
        }
      }
    }
  },
  ar: {
    readMore: "اقرأ المزيد",
    details: "تفاصيل الرحلة",
    overview: "نظرة عامة",
    includes: "الرحلة تشمل",
    excludes: "الرحلة لا تشمل",
    bookNowCard: "احجز الآن",
    contactUs: "اتصل بنا",
    secureBooking: "حجز آمن",
    from: "من",
    perPerson: "/ للفرد",
    safari: {
      tours: {
        single: {
          longDesc: "استمتع بالحرية المطلقة في الصحراء على البيتش باجي الخاص بك. صُممت هذه الرحلة لمحبي المغامرة الذين يرغبون في استكشاف الكثبان الرملية الذهبية في سيناء بأنفسهم.",
          included: ["الانتقالات من وإلى الفندق", "مرشد محترف", "إرشادات ومعدات السلامة", "بيتش باجي لراكب واحد", "استراحة لشرب الشاي البدوي في الصحراء"],
          excluded: ["المصاريف الشخصية", "خدمة التصوير", "الإسكارف (شال بدوي) والنظارة (متاح للإيجار)"]
        },
        double: {
          longDesc: "شارك الحماس مع رفيقك على بيتش باجي مزدوج. مثالي للأزواج أو الأصدقاء، حيث يمكنكم التبديل في القيادة والاستمتاع بالمناظر الخلابة معاً.",
          included: ["الانتقالات من وإلى الفندق", "مرشد محترف", "إرشادات ومعدات السلامة", "بيتش باجي لراكبين", "استراحة لشرب الشاي البدوي في الصحراء"],
          excluded: ["المصاريف الشخصية", "خدمة التصوير", "الإسكارف والنظارة (متاح للإيجار)"]
        },
        buggy2: {
          longDesc: "تولَّ قيادة سيارات الدفع الرباعي (Buggy) القوية ذات المقعدين. توفر هذه المركبات رحلة مريحة ومثيرة عبر الصحراء مع قفص حماية لمزيد من الأمان.",
          included: ["الانتقالات من وإلى الفندق", "مرشد محترف", "إرشادات ومعدات السلامة", "سيارة باجي مقعدين", "استراحة لشرب الشاي البدوي"],
          excluded: ["المصاريف الشخصية", "خدمة التصوير", "الإسكارف والنظارة"]
        },
        buggy4: {
          longDesc: "المغامرة الجماعية الأروع! سيارات الباجي ذات الـ 4 مقاعد مثالية للعائلات أو مجموعات الأصدقاء. استمتعوا بتجربة السفاري معاً في سيارة واحدة.",
          included: ["الانتقالات من وإلى الفندق", "مرشد محترف", "إرشادات ومعدات السلامة", "سيارة باجي 4 مقاعد", "استراحة لشرب الشاي البدوي"],
          excluded: ["المصاريف الشخصية", "خدمة التصوير", "الإسكارف والنظارة"]
        },
        dinner: {
          longDesc: "تجربة صحراوية متكاملة تجمع بين المغامرة والثقافة البدوية. ابدأ برحلة مثيرة على البيتش باجي، تليها جولة هادئة على الجمال، واختتم المساء بعشاء بدوي تقليدي وعرض فني تحت النجوم.",
          included: ["الانتقالات من وإلى الفندق", "مرشد محترف", "رحلة بيتش باجي", "ركوب جمال", "عشاء بدوي تقليدي", "عرض شرقي وعرض النار", "مشروبات غازية وشاي"],
          excluded: ["المصاريف الشخصية", "خدمة التصوير", "الإسكارف والنظارة"]
        }
      }
    }
  },
  it: {
    readMore: "Leggi di più",
    details: "Dettagli del Tour",
    overview: "Panoramica",
    includes: "Cosa è Incluso",
    excludes: "Cosa Non è Incluso",
    bookNowCard: "Prenota Ora",
    contactUs: "Contattaci",
    secureBooking: "Prenotazione Sicura",
    from: "Da",
    perPerson: "/ persona",
    safari: {
      tours: {
        single: {
          longDesc: "Vivi la massima libertà nel deserto sul tuo ATV personale. Questo tour è pensato per chi cerca forti emozioni e vuole esplorare le dune dorate del Sinai.",
          included: ["Trasferimento da/per hotel", "Guida professionale", "Briefing e attrezzatura", "ATV singolo", "Pausa tè beduino nel deserto"],
          excluded: ["Spese personali", "Servizio fotografico", "Sciarpa e occhiali (noleggiabili)"]
        },
        double: {
          longDesc: "Condividi l'emozione con un partner su un ATV doppio. Perfetto per coppie o amici.",
          included: ["Trasferimento da/per hotel", "Guida professionale", "Briefing e attrezzatura", "ATV per due", "Pausa tè beduino"],
          excluded: ["Spese personali", "Servizio fotografico", "Sciarpa e occhiali"]
        },
        buggy2: {
          longDesc: "Prendi il controllo dei nostri potenti buggy a 2 posti. Offrono una guida comoda e sicura nel deserto.",
          included: ["Trasferimento da/per hotel", "Guida professionale", "Briefing di sicurezza", "Buggy a 2 posti", "Tè beduino"],
          excluded: ["Spese personali", "Fotografie", "Sciarpa e occhiali"]
        },
        buggy4: {
          longDesc: "L'avventura di gruppo definitiva! I nostri buggy a 4 posti sono perfetti per famiglie o amici.",
          included: ["Trasferimento da/per hotel", "Guida", "Briefing di sicurezza", "Buggy a 4 posti", "Tè beduino"],
          excluded: ["Spese personali", "Fotografie", "Sciarpa e occhiali"]
        },
        dinner: {
          longDesc: "Un'esperienza completa nel deserto. Inizia con un giro in ATV, goditi una passeggiata in cammello e termina con una cena beduina tradizionale sotto le stelle.",
          included: ["Trasferimenti", "Guida", "Giro in ATV", "Giro in cammello", "Cena beduina", "Spettacolo orientale", "Bevande analcoliche"],
          excluded: ["Spese personali", "Fotografie", "Sciarpa e occhiali"]
        }
      }
    }
  },
  ru: {
    readMore: "Узнать больше",
    details: "Детали тура",
    overview: "Обзор",
    includes: "Что включено",
    excludes: "Что не включено",
    bookNowCard: "Забронировать",
    contactUs: "Связаться с нами",
    secureBooking: "Безопасное бронирование",
    from: "От",
    perPerson: "/ чел",
    safari: {
      tours: {
        single: {
          longDesc: "Испытайте абсолютную свободу в пустыне на собственном квадроцикле. Этот тур создан для любителей острых ощущений.",
          included: ["Трансфер из/в отель", "Профессиональный гид", "Инструктаж и экипировка", "Одиночный квадроцикл", "Бедуинский чай"],
          excluded: ["Личные расходы", "Услуги фотографа", "Арафатка и очки (можно арендовать)"]
        },
        double: {
          longDesc: "Разделите восторг с партнером на двухместном квадроцикле. Идеально для пар или друзей.",
          included: ["Трансфер из/в отель", "Профессиональный гид", "Инструктаж и экипировка", "Двухместный квадроцикл", "Бедуинский чай"],
          excluded: ["Личные расходы", "Услуги фотографа", "Арафатка и очки"]
        },
        buggy2: {
          longDesc: "Управляйте нашими мощными 2-местными багги. Они предлагают комфортную и захватывающую поездку по пустыне.",
          included: ["Трансфер из/в отель", "Профессиональный гид", "Инструктаж безопасности", "2-местный багги", "Бедуинский чай"],
          excluded: ["Личные расходы", "Фотограф", "Арафатка и очки"]
        },
        buggy4: {
          longDesc: "Идеальное групповое приключение! Наши 4-местные багги отлично подходят для семей или друзей.",
          included: ["Трансфер из/в отель", "Гид", "Инструктаж безопасности", "4-местный багги", "Бедуинский чай"],
          excluded: ["Личные расходы", "Фотограф", "Арафатка и очки"]
        },
        dinner: {
          longDesc: "Полный опыт в пустыне. Начните с захватывающей поездки на квадроциклах, насладитесь катанием на верблюдах и завершите вечер традиционным бедуинским ужином под звездами.",
          included: ["Трансфер", "Гид", "Квадроциклы", "Катание на верблюдах", "Бедуинский ужин", "Шоу-программа", "Напитки"],
          excluded: ["Личные расходы", "Фотограф", "Арафатка и очки"]
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
    fileContent.readMore = data[lang].readMore;
    fileContent.details = data[lang].details;
    fileContent.overview = data[lang].overview;
    fileContent.includes = data[lang].includes;
    fileContent.excludes = data[lang].excludes;
    fileContent.bookNowCard = data[lang].bookNowCard;
    fileContent.contactUs = data[lang].contactUs;
    fileContent.secureBooking = data[lang].secureBooking;
    fileContent.from = data[lang].from;
    fileContent.perPerson = data[lang].perPerson;
    
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

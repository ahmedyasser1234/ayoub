const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'ar.json', 'it.json', 'ru.json'];

const seoData = {
  ar: {
    seo: {
      home: {
        title: "أفضل مكتب رحلات سفاري وترانسفير في شرم الشيخ",
        description: "احجز أفضل رحلات السفاري والترانسفير في شرم الشيخ وجنوب سيناء. أسعار مميزة لرحلات البيتش باجي والعشاء البدوي. للتواصل والحجز: 01027284402",
        keywords: "ترانسفير شرم الشيخ, رحلات سفاري شرم الشيخ, مكتب رحلات في شرم, رحلات جنوب سيناء, حجز بيتش باجي, سفاري شرم, توصيل مطار شرم الشيخ, تاكسي شرم, سياحة شرم الشيخ, عروض رحلات شرم, حجز رحلات شرم الشيخ, رحلات بحرية شرم, غطس شرم الشيخ, رحلات شرم الشيخ 2026, اسعار رحلات شرم الشيخ, مكاتب سياحة فى شرم الشيخ, حجز رحلات سفارى شرم, بيتش باجى شرم الشيخ, ترانسفير دهب, رحلات سفاري للمصريين, ارخص تاكسي في شرم الشيخ"
      },
      safari: {
        title: "رحلات سفاري شرم الشيخ | بيتش باجي وعشاء بدوي",
        description: "استكشف صحراء شرم الشيخ مع أفضل رحلات السفاري، بيتش باجي، عشاء بدوي، وركوب جمال وموتوسيكلات. تواصل معنا: 01027284402",
        keywords: "رحلات سفاري شرم الشيخ, بيتش باجي شرم, عشاء بدوي شرم الشيخ, سفاري جنوب سيناء, موتوسيكلات شرم الشيخ, رحلات سفاري صحراوية, سفاري عائلية شرم, ركوب الجمال شرم الشيخ, رحلة العشاء البدوي في شرم الشيخ, سفاري الموتوسيكلات شرم, افضل اسعار السفاري في شرم, رحلة النجوم شرم الشيخ"
      },
      transfer: {
        title: "خدمات نقل وترانسفير شرم الشيخ | ليموزين المطار",
        description: "سيارات ليموزين ونقل سياحي من وإلى مطار شرم الشيخ وجميع الفنادق بأفضل الأسعار. خدمة 24 ساعة. 01027284402",
        keywords: "ترانسفير شرم الشيخ, توصيل مطار شرم الشيخ, تاكسي شرم الشيخ, سيارات سياحية شرم الشيخ, ليموزين مطار شرم, نقل فنادق شرم الشيخ, سيارات خاصة شرم الشيخ, حجز توصيل شرم, تاكسي شرم الشيخ المطار, اسعار التوصيل من مطار شرم الشيخ, حجز سيارة مطار شرم الشيخ, سيارات ليموزين شرم الشيخ"
      },
      gallery: {
        title: "معرض الصور والفيديوهات | أيوب سفاري",
        description: "شاهد أمتع اللحظات لرحلات السفاري وخدمات الترانسفير في شرم الشيخ مع أيوب سفاري. 01027284402",
        keywords: "صور رحلات شرم الشيخ, فيديوهات سفاري شرم الشيخ, صور ترانسفير شرم, ذكريات سفاري شرم, صور بيتش باجي"
      }
    }
  },
  en: {
    seo: {
      home: {
        title: "Best Safari & Transfer Excursions in Sharm El Sheikh",
        description: "Book the best safari tours and transfers in Sharm El Sheikh and South Sinai. Special prices for ATV buggies and Bedouin dinner. Call/WhatsApp: 01027284402",
        keywords: "Sharm El Sheikh transfers, Safari tours, Sharm excursions, Tour office in Sharm, South Sinai trips, ATV booking, Sharm safari, Sharm airport taxi, Sharm El Sheikh sightseeing, best tours in Sharm, private transfer Sharm, Sharm El Sheikh excursions 2026, cheap excursions Sharm El Sheikh, Dahab transfer from Sharm, reliable transfer Sharm El Sheikh"
      },
      safari: {
        title: "Sharm El Sheikh Safari Tours | ATV & Bedouin Dinner",
        description: "Explore the Sharm El Sheikh desert with the best safari trips, ATV buggies, Bedouin dinner, stargazing and camel riding. Contact us: 01027284402",
        keywords: "Sharm El Sheikh safari, ATV buggy Sharm, Bedouin dinner Sharm, South Sinai safari, desert safari Egypt, quad bike Sharm, camel ride Sharm, stargazing Sharm El Sheikh, Bedouin dinner and stargazing Sharm, Sharm El Sheikh family tours"
      },
      transfer: {
        title: "Sharm El Sheikh Transfer & Taxi Services",
        description: "Limousine and tourist transport to and from Sharm El Sheikh airport and all hotels at the best prices. 24/7 service. 01027284402",
        keywords: "Sharm El Sheikh transfer, Sharm airport pickup, Sharm taxi, Tourist cars Sharm, private transfer Sharm El Sheikh, airport shuttle Sharm, hotel transfer Sharm, Sharm El Sheikh airport transfer price, Sharm El Sheikh taxi to hotel, limousine service Sharm El Sheikh"
      },
      gallery: {
        title: "Media Gallery | Ayoub Safari",
        description: "Watch photos and videos of our amazing safari tours and transfer services in Sharm El Sheikh with Ayoub Safari. 01027284402",
        keywords: "Sharm excursions photos, Sharm safari videos, Transfer photos Sharm, ATV buggy gallery, Sharm memories"
      }
    }
  },
  it: {
    seo: {
      home: {
        title: "Le Migliori Escursioni Safari e Transfer a Sharm El Sheikh",
        description: "Prenota i migliori tour safari e transfer a Sharm El Sheikh e nel Sud Sinai. Prezzi speciali per quad ATV e cene beduine. Contattaci: 01027284402",
        keywords: "Transfer Sharm El Sheikh, Tour Safari, Escursioni Sharm, Agenzia viaggi Sharm, Escursioni Sud Sinai, Prenotazione ATV, navetta aeroporto Sharm, vacanze Sharm El Sheikh, escursioni deserto Sharm, Escursioni Sharm El Sheikh 2026, prezzi escursioni Sharm"
      },
      safari: {
        title: "Tour Safari a Sharm El Sheikh | Quad ATV e Cena Beduina",
        description: "Esplora il deserto di Sharm El Sheikh con le migliori escursioni safari, quad ATV, cene beduine, osservazione delle stelle e passeggiate in cammello. 01027284402",
        keywords: "Safari Sharm El Sheikh, ATV quad Sharm, Cena beduina Sharm, Safari Sud Sinai, safari nel deserto Egitto, giro in cammello Sharm, motorata nel deserto Sharm, cena beduina e cammellata Sharm"
      },
      transfer: {
        title: "Servizi di Trasferimento e Taxi a Sharm El Sheikh",
        description: "Trasporto turistico e limousine da e per l'aeroporto di Sharm El Sheikh e tutti gli hotel ai migliori prezzi. Servizio 24/7. 01027284402",
        keywords: "Transfer Sharm El Sheikh, Navetta aeroporto Sharm, Taxi Sharm, Auto turistiche Sharm, trasferimento privato Sharm, navetta hotel Sharm, taxi economico Sharm, transfer per Dahab"
      },
      gallery: {
        title: "Galleria Multimediale | Ayoub Safari",
        description: "Guarda foto e video dei nostri fantastici tour safari e servizi di trasferimento a Sharm El Sheikh con Ayoub Safari. 01027284402",
        keywords: "Foto escursioni Sharm, Video safari Sharm, Foto transfer Sharm, immagini quad Sharm, ricordi Sharm"
      }
    }
  },
  ru: {
    seo: {
      home: {
        title: "Лучшие сафари и трансферы в Шарм-эль-Шейхе",
        description: "Забронируйте лучшие сафари-туры и трансферы в Шарм-эль-Шейхе и на Южном Синае. Специальные цены на квадроциклы и бедуинский ужин. Звоните: 01027284402",
        keywords: "Трансферы в Шарм-эль-Шейхе, Сафари туры, Экскурсии в Шарме, Туристический офис в Шарме, Поездки на Южный Синай, бронирование квадроциклов, такси в аэропорт Шарм, отдых в Шарм-эль-Шейхе, лучшие туры в Шарм, Экскурсии в Шарм-эль-Шейхе 2026, цены на экскурсии Шарм, дешевые экскурсии Шарм"
      },
      safari: {
        title: "Сафари туры в Шарм-эль-Шейхе | Квадроциклы и Бедуинский ужин",
        description: "Исследуйте пустыню Шарм-эль-Шейха с лучшими сафари-поездками, квадроциклами, бедуинским ужином, наблюдением за звездами и катанием на верблюдах. 01027284402",
        keywords: "Сафари Шарм-эль-Шейх, Квадроциклы Шарм, Бедуинский ужин Шарм, Сафари Южный Синай, сафари по пустыне Египет, катание на верблюдах Шарм, мотосафари Шарм, бедуинский ужин и звезды Шарм, сафари на квадроциклах Шарм-эль-Шейх"
      },
      transfer: {
        title: "Трансфер и такси в Шарм-эль-Шейхе",
        description: "Лимузины и туристический транспорт в аэропорт Шарм-эль-Шейха и во все отели по лучшим ценам. Круглосуточно. 01027284402",
        keywords: "Трансфер Шарм-эль-Шейх, Встреча в аэропорту Шарма, Такси Шарм, индивидуальный трансфер Шарм, трансфер в отель Шарм, туристические авто Шарм, трансфер из аэропорта Шарм-эль-Шейх, трансфер в Дахаб, аренда авто с водителем Шарм"
      },
      gallery: {
        title: "Медиа Галерея | Ayoub Safari",
        description: "Смотрите фотографии и видео наших удивительных сафари-туров и трансферов в Шарм-эль-Шейхе с Ayoub Safari. 01027284402",
        keywords: "Фото экскурсий Шарм, Видео сафари Шарм, Фото трансфера Шарм, галерея квадроциклов, воспоминания Шарм"
      }
    }
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(localesDir, file);
  
  if (fs.existsSync(filePath)) {
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add SEO obj
    fileContent.seo = seoData[lang].seo;
    
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
    console.log(`Updated ${file}`);
  }
});

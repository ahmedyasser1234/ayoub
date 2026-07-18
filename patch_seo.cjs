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
        keywords: "ترانسفير شرم الشيخ, رحلات سفاري, رحلات شرم الشيخ, مكتب رحلات في شرم, رحلات جنوب سيناء, حجز بيتش باجي, سفاري شرم"
      },
      safari: {
        title: "رحلات سفاري شرم الشيخ",
        description: "استكشف صحراء شرم الشيخ مع أفضل رحلات السفاري، بيتش باجي، عشاء بدوي، وركوب جمال. تواصل معنا: 01027284402",
        keywords: "رحلات سفاري شرم الشيخ, بيتش باجي شرم, عشاء بدوي شرم الشيخ, سفاري جنوب سيناء"
      },
      transfer: {
        title: "خدمات نقل وترانسفير شرم الشيخ",
        description: "سيارات ليموزين ونقل سياحي من وإلى مطار شرم الشيخ وجميع الفنادق بأفضل الأسعار. 01027284402",
        keywords: "ترانسفير شرم الشيخ, توصيل مطار شرم الشيخ, تاكسي شرم الشيخ, سيارات سياحية شرم الشيخ"
      },
      gallery: {
        title: "معرض الصور والفيديوهات",
        description: "شاهد أمتع اللحظات لرحلات السفاري وخدمات الترانسفير في شرم الشيخ مع أيوب سفاري. 01027284402",
        keywords: "صور رحلات شرم الشيخ, فيديوهات سفاري شرم الشيخ, صور ترانسفير شرم"
      }
    }
  },
  en: {
    seo: {
      home: {
        title: "Best Safari & Transfer Excursions in Sharm El Sheikh",
        description: "Book the best safari tours and transfers in Sharm El Sheikh and South Sinai. Special prices for ATV buggies and Bedouin dinner. Call/WhatsApp: 01027284402",
        keywords: "Sharm El Sheikh transfers, Safari tours, Sharm excursions, Tour office in Sharm, South Sinai trips, ATV booking, Sharm safari"
      },
      safari: {
        title: "Sharm El Sheikh Safari Tours",
        description: "Explore the Sharm El Sheikh desert with the best safari trips, ATV buggies, Bedouin dinner, and camel riding. Contact us: 01027284402",
        keywords: "Sharm El Sheikh safari, ATV buggy Sharm, Bedouin dinner Sharm, South Sinai safari"
      },
      transfer: {
        title: "Sharm El Sheikh Transfer & Taxi Services",
        description: "Limousine and tourist transport to and from Sharm El Sheikh airport and all hotels at the best prices. 01027284402",
        keywords: "Sharm El Sheikh transfer, Sharm airport pickup, Sharm taxi, Tourist cars Sharm"
      },
      gallery: {
        title: "Media Gallery",
        description: "Watch photos and videos of our amazing safari tours and transfer services in Sharm El Sheikh with Ayoub Safari. 01027284402",
        keywords: "Sharm excursions photos, Sharm safari videos, Transfer photos Sharm"
      }
    }
  },
  it: {
    seo: {
      home: {
        title: "Le Migliori Escursioni Safari e Transfer a Sharm El Sheikh",
        description: "Prenota i migliori tour safari e transfer a Sharm El Sheikh e nel Sud Sinai. Prezzi speciali per quad ATV e cene beduine. Contattaci: 01027284402",
        keywords: "Transfer Sharm El Sheikh, Tour Safari, Escursioni Sharm, Agenzia viaggi Sharm, Escursioni Sud Sinai, Prenotazione ATV"
      },
      safari: {
        title: "Tour Safari a Sharm El Sheikh",
        description: "Esplora il deserto di Sharm El Sheikh con le migliori escursioni safari, quad ATV, cene beduine e passeggiate in cammello. 01027284402",
        keywords: "Safari Sharm El Sheikh, ATV quad Sharm, Cena beduina Sharm, Safari Sud Sinai"
      },
      transfer: {
        title: "Servizi di Trasferimento e Taxi a Sharm El Sheikh",
        description: "Trasporto turistico e limousine da e per l'aeroporto di Sharm El Sheikh e tutti gli hotel ai migliori prezzi. 01027284402",
        keywords: "Transfer Sharm El Sheikh, Navetta aeroporto Sharm, Taxi Sharm, Auto turistiche Sharm"
      },
      gallery: {
        title: "Galleria Multimediale",
        description: "Guarda foto e video dei nostri fantastici tour safari e servizi di trasferimento a Sharm El Sheikh con Ayoub Safari. 01027284402",
        keywords: "Foto escursioni Sharm, Video safari Sharm, Foto transfer Sharm"
      }
    }
  },
  ru: {
    seo: {
      home: {
        title: "Лучшие сафари и трансферы в Шарм-эль-Шейхе",
        description: "Забронируйте лучшие сафари-туры и трансферы в Шарм-эль-Шейхе и на Южном Синае. Специальные цены на квадроциклы и бедуинский ужин. Звоните: 01027284402",
        keywords: "Трансферы в Шарм-эль-Шейхе, Сафари туры, Экскурсии в Шарме, Туристический офис в Шарме, Поездки на Южный Синай"
      },
      safari: {
        title: "Сафари туры в Шарм-эль-Шейхе",
        description: "Исследуйте пустыню Шарм-эль-Шейха с лучшими сафари-поездками, квадроциклами, бедуинским ужином и катанием на верблюдах. 01027284402",
        keywords: "Сафари Шарм-эль-Шейх, Квадроциклы Шарм, Бедуинский ужин Шарм, Сафари Южный Синай"
      },
      transfer: {
        title: "Трансфер и такси в Шарм-эль-Шейхе",
        description: "Лимузины и туристический транспорт в аэропорт Шарм-эль-Шейха и во все отели по лучшим ценам. 01027284402",
        keywords: "Трансфер Шарм-эль-Шейх, Встреча в аэропорту Шарма, Такси Шарм"
      },
      gallery: {
        title: "Медиа Галерея",
        description: "Смотрите фотографии и видео наших удивительных сафари-туров и трансферов в Шарм-эль-Шейхе с Ayoub Safari. 01027284402",
        keywords: "Фото экскурсий Шарм, Видео сафари Шарм, Фото трансфера Шарм"
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

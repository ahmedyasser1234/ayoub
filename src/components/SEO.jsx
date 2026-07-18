import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://ayoubsafari.vercel.app';

const SEO = ({ title, description, keywords, image }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;
  
  // Default image
  const defaultImage = `${SITE_URL}/images/safari_hero_new.webp`;
  const seoImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : defaultImage;

  // Extremely broad multi-lingual keywords fallback focusing on Arabic, English, Russian, Italian
  const fallbackKeywords = "Sharm El Sheikh safari, ATV buggy Sharm, Bedouin dinner Sharm, Sharm El Sheikh transfer, airport transfer Sharm, رحلات شرم الشيخ, سفاري شرم الشيخ, بيتش باجي, عشاء بدوي, ترانسفير شرم الشيخ, رحلات جنوب سيناء, Сафари Шарм-эль-Шейх, Квадроциклы Шарм, Бедуинский ужин Шарм, Трансфер Шарм-эль-Шейх, Экскурсии в Шарме, Safari Sharm El Sheikh, ATV quad Sharm, Cena beduina Sharm, Transfer Sharm El Sheikh, Escursioni Sharm, رحلات شرم الشيخ 2026, اسعار رحلات شرم الشيخ, مكاتب سياحة فى شرم الشيخ, حجز رحلات سفارى شرم, بيتش باجى شرم الشيخ, رحلة العشاء البدوي في شرم الشيخ, ركوب جمال شرم الشيخ, تاكسي شرم الشيخ المطار, حجز سيارة مطار شرم الشيخ, ترانسفير دهب, رحلات سفاري للمصريين, افضل اسعار السفاري في شرم, رحلة النجوم شرم الشيخ, سفاري العائلة شرم الشيخ, ارخص تاكسي في شرم الشيخ, Sharm El Sheikh excursions 2026, best safari in Sharm El Sheikh, cheap excursions Sharm El Sheikh, Sharm El Sheikh airport transfer price, Sharm El Sheikh taxi to hotel, Sharm El Sheikh private transfer, ATV quad biking Sharm, stargazing Sharm, camel riding Sharm, desert safari Sharm, Dahab transfer, Экскурсии в Шарм-эль-Шейхе 2026, цены на экскурсии Шарм, сафари на квадроциклах Шарм, бедуинский ужин и звезды Шарм, такси Шарм-эль-Шейх, трансфер в Дахаб, лучшие туры Шарм, Escursioni Sharm El Sheikh 2026, prezzi escursioni Sharm, safari nel deserto Sharm, motorata nel deserto Sharm, cammellata Sharm, trasferimento aeroporto Sharm, taxi economico Sharm, transfer privato Sharm, vacanze a Sharm";

  const fullTitle = title ? `${title} | Ayoub Safari` : 'Ayoub Safari';

  return (
    <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${fallbackKeywords}` : fallbackKeywords} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_AR' : i18n.language === 'ru' ? 'ru_RU' : i18n.language === 'it' ? 'it_IT' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;

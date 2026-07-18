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
  const fallbackKeywords = "Sharm El Sheikh safari, ATV buggy Sharm, Bedouin dinner Sharm, Sharm El Sheikh transfer, airport transfer Sharm, رحلات شرم الشيخ, سفاري شرم الشيخ, بيتش باجي, عشاء بدوي, ترانسفير شرم الشيخ, رحلات جنوب سيناء, Сафари Шарм-эль-Шейх, Квадроциклы Шарм, Бедуинский ужин Шарм, Трансфер Шарм-эль-Шейх, Экскурсии в Шарме, Safari Sharm El Sheikh, ATV quad Sharm, Cena beduina Sharm, Transfer Sharm El Sheikh, Escursioni Sharm";

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

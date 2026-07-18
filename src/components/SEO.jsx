import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://ayoubsafari.netlify.app';

const SEO = ({ title, description, keywords, image }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = `${title} | Ayoub Safari`;
    }

    // 2. Update Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = description;

      let twDesc = document.querySelector('meta[name="twitter:description"]');
      if (!twDesc) {
        twDesc = document.createElement('meta');
        twDesc.name = 'twitter:description';
        document.head.appendChild(twDesc);
      }
      twDesc.content = description;
    }

    // 3. Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // 4. Update OG:Title / Twitter:Title
    if (title) {
      const fullTitle = `${title} | Ayoub Safari`;
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = fullTitle;

      let twTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twTitle) {
        twTitle = document.createElement('meta');
        twTitle.name = 'twitter:title';
        document.head.appendChild(twTitle);
      }
      twTitle.content = fullTitle;
    }

    // 5. Update OG:Image / Twitter:Image (always absolute URL)
    if (image) {
      const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.content = absoluteImage;

      let twImage = document.querySelector('meta[name="twitter:image"]');
      if (!twImage) {
        twImage = document.createElement('meta');
        twImage.name = 'twitter:image';
        document.head.appendChild(twImage);
      }
      twImage.content = absoluteImage;
    }

    // 6. Canonical + og:url (per route, no query/hash)
    const canonicalUrl = `${SITE_URL}${location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalUrl;

  }, [title, description, keywords, image, location.pathname]);

  return null;
};

export default SEO;

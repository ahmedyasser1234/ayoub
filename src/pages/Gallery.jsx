import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, X } from 'lucide-react';
import SEO from '../components/SEO';
import './Gallery.css';

const mediaList = [
  { id: 'c1', type: 'image', category: 'safari', src: '/images/image copy.png' },
  { id: 'c2', type: 'image', category: 'safari', src: '/images/image copy 2.png' },
  { id: 'c3', type: 'image', category: 'safari', src: '/images/image copy 3.png' },
  { id: 'c4', type: 'image', category: 'safari', src: '/images/image copy 4.png' },
  { id: 'c5', type: 'image', category: 'safari', src: '/images/image copy 5.png' },
  { id: 'c6', type: 'image', category: 'safari', src: '/images/image copy 6.png' },
  { id: 'c7', type: 'image', category: 'safari', src: '/images/image copy 7.png' },
  { id: 'c8', type: 'image', category: 'safari', src: '/images/image copy 8.png' },
  { id: 'c9', type: 'image', category: 'safari', src: '/images/image copy 9.png' },
  { id: 'c10', type: 'image', category: 'safari', src: '/images/image copy 10.png' },
  { id: 'c11', type: 'image', category: 'safari', src: '/images/image copy 11.png' },
  { id: 'c12', type: 'image', category: 'safari', src: '/images/image copy 12.png' },
  { id: 'c13', type: 'image', category: 'safari', src: '/images/image copy 13.png' },
  { id: 'c14', type: 'image', category: 'safari', src: '/images/image copy 14.png' },
  { id: 'c15', type: 'image', category: 'safari', src: '/images/image copy 15.png' },
  { id: 'c16', type: 'image', category: 'safari', src: '/images/image copy 16.png' },
  { id: 'c17', type: 'image', category: 'safari', src: '/images/image copy 17.png' },
  { id: 'c18', type: 'image', category: 'safari', src: '/images/image copy 18.png' },
  { id: 'c19', type: 'image', category: 'safari', src: '/images/image copy 19.png' },
  { id: 1, type: 'image', category: 'safari', src: '/images/safari_single.png' },
  { id: 2, type: 'image', category: 'safari', src: '/images/safari_double.png' },
  { id: 3, type: 'image', category: 'transfer', src: '/images/luxury_transfer.png' },
  { id: 4, type: 'image', category: 'safari', src: '/images/safari_buggy2.png' },
  { id: 5, type: 'video', category: 'safari', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: '/images/safari_dinner.png' },
  { id: 6, type: 'image', category: 'safari', src: '/images/atv_desert_mountains.png' },
  { id: 7, type: 'video', category: 'transfer', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: '/images/luxury_transfer.png' },
  { id: 8, type: 'image', category: 'safari', src: '/images/safari_hero_new.png' }
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxData, setLightboxData] = useState(null);

  const filteredMedia = activeFilter === 'all' 
    ? mediaList 
    : mediaList.filter(item => item.category === activeFilter);

  const openLightbox = (item) => {
    setLightboxData(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxData(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <SEO 
        title={t('seo.gallery.title')} 
        description={t('seo.gallery.description')} 
        keywords={t('seo.gallery.keywords')} 
        image="/images/image.png" 
      />
      <div className="container">
        <div className="gallery-header reveal">
          <h1>{t('nav.gallery')}</h1>
          <p>{t('gallery.subtitle') || 'Explore our unforgettable desert adventures and premium transfers'}</p>
        </div>

        <div className="gallery-filters reveal" style={{ transitionDelay: '0.1s' }}>
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('gallery.all') || 'All'}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'safari' ? 'active' : ''}`}
            onClick={() => setActiveFilter('safari')}
          >
            {t('nav.safari') || 'Safari Tours'}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'transfer' ? 'active' : ''}`}
            onClick={() => setActiveFilter('transfer')}
          >
            {t('nav.transfers') || 'Transfers'}
          </button>
        </div>

        <div className="gallery-grid">
          {filteredMedia.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item" 
              style={{ animation: `fadeIn 0.5s ease forwards ${0.1 * (index % 5)}s`, opacity: 1 }}
              onClick={() => openLightbox(item)}
            >
              {item.type === 'video' ? (
                <>
                  <img src={item.poster} alt={`Gallery video ${item.id}`} />
                  <div className="item-overlay">
                    <div className="play-icon">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img src={item.src} alt={`Gallery image ${item.id}`} />
                  <div className="item-overlay"></div>
                </>
              )}
              <div className="item-tag">
                {item.category === 'safari' ? 'Safari' : 'Transfer'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxData && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>
            {lightboxData.type === 'video' ? (
              <video src={lightboxData.src} controls autoPlay style={{ width: '100%', maxHeight: '90vh' }} />
            ) : (
              <img src={lightboxData.src} alt="Enlarged gallery view" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

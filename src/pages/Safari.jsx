import { MapPin, Clock, Heart, Star, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Safari.css';

const Safari = () => {
  const { t } = useTranslation();

  const tours = [
    {
      id: 'single',
      image: '/images/safari_single.webp',
      badge: 'Popular',
      duration: '3 hours',
      price: 'From $15'
    },
    {
      id: 'double',
      image: '/images/safari_double.webp',
      badge: 'Best Value',
      duration: '3 hours',
      price: 'From $20'
    },
    {
      id: 'buggy2',
      image: '/images/safari_buggy2.webp',
      badge: 'Couples',
      duration: '4 hours',
      price: 'From $35'
    },
    {
      id: 'buggy4',
      image: '/images/safari_buggy4.webp',
      badge: 'Family',
      duration: '4 hours',
      price: 'From $50'
    },
    {
      id: 'dinner',
      image: '/images/safari_dinner.webp',
      badge: 'Ultimate',
      duration: '6 hours',
      price: 'From $40'
    }
  ];

  return (
    <div className="safari-page">
      <SEO
        title={t('seo.safari.title')}
        description={t('seo.safari.description')}
        keywords={t('seo.safari.keywords')}
        image="/images/image.webp"
      />
      <div className="page-header safari-header">
        <div className="container">
          <h1>{t('safari.title1')} <span>{t('safari.title2')}</span></h1>
          <p>{t('safari.subtitle')}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="safari-intro text-center mb-5 reveal">
            <h2>{t('safari.introTitle')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>{t('safari.introDesc')}</p>
          </div>

          <div className="grid grid-2 tours-grid">
            {tours.map((tour, index) => (
              <Link to={`/tour/${tour.id}`} key={index} className="tour-card reveal">
                <div className="tour-image" style={{ backgroundImage: `url('${tour.image}')` }}>
                  <div className="tour-overlay"></div>
                  <div className="tour-badges">
                    <div className="badge-featured"><Star size={14} /> {tour.badge}</div>
                    <button className="btn-heart" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}><Heart size={20} /></button>
                  </div>
                  <div className="tour-info">
                    <div className="tour-meta">
                      <span><MapPin size={14} /> Sharm El Sheikh</span>
                      <span><Clock size={14} /> {tour.duration}</span>
                    </div>
                    <h3 className="tour-title">{t(`safari.tours.${tour.id}.title`)}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '15px', fontSize: '0.95rem' }}>
                      {t(`safari.tours.${tour.id}.desc`)}
                    </p>
                    <div className="tour-price">
                      {t('readMore')} <ArrowRight size={18} className="read-more-arrow ltr-only" /> <ArrowLeft size={18} className="read-more-arrow rtl-only" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="safari-includes section reveal">
            <h2 className="text-center mb-4">{t('safari.includesTitle')}</h2>
            <div className="includes-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px', margin: '0 auto', background: 'var(--bg-card)', padding: '30px', borderRadius: '15px' }}>
              <div className="include-item" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 className="text-primary" /> {t('safari.inc1')}</div>
              <div className="include-item" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 className="text-primary" /> {t('safari.inc2')}</div>
              <div className="include-item" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 className="text-primary" /> {t('safari.inc3')}</div>
              <div className="include-item" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 className="text-primary" /> {t('safari.inc4')}</div>
            </div>

            <div className="text-center mt-5">
              <a href="tel:+201027284402" className="btn btn-primary">{t('safari.bookBtn')}</a>
            </div>
          </div>

          <div className="safari-gallery-preview section" style={{ marginTop: '50px' }}>
            <h2 className="text-center mb-4">{t('nav.gallery')}</h2>
            <div className="grid grid-3" style={{ gap: '15px' }}>
              <img src="/images/image copy 14.webp" alt="Gallery 1" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
              <img src="/images/image copy 15.webp" alt="Gallery 2" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
              <img src="/images/image copy 16.webp" alt="Gallery 3" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
              <img src="/images/image copy 2.webp" alt="Gallery 4" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
              <img src="/images/image copy 10.webp" alt="Gallery 5" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
              <img src="/images/image copy 11.webp" alt="Gallery 6" style={{ width: '100%', borderRadius: '15px', aspectRatio: '3/4', objectFit: 'cover' }}  loading="lazy" decoding="async" />
            </div>
            <div className="text-center mt-4">
              <Link to="/gallery" className="btn btn-outline">{t('nav.gallery')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safari;

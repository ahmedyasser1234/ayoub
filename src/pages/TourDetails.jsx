import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, CheckCircle2, XCircle, Phone, CalendarCheck, Check, Info, Backpack, Star, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Safari tours mock database (to map images and base info, texts are from i18n)
  const safariToursData = {
    single: {
      image: '/images/safari_single.webp',
      duration: '3 hours',
      price: '600'
    },
    double: {
      image: '/images/safari_double.webp',
      duration: '3 hours',
      price: '700'
    },
    buggy2: {
      image: '/images/safari_buggy2.webp',
      duration: '4 hours',
      price: '1200'
    },
    buggy4: {
      image: '/images/safari_buggy4.webp',
      duration: '4 hours',
      price: '1600'
    },
    dinner: {
      image: '/images/safari_dinner.webp',
      duration: '6 hours',
      price: '900'
    }
  };

  const tourData = safariToursData[id];

  if (!tourData) {
    return <div className="container section text-center"><h2>Tour Not Found</h2><Link to="/safari" className="btn btn-primary mt-4">Back to Tours</Link></div>;
  }

  const includedItems = t(`safari.tours.${id}.included`, { returnObjects: true }) || [];
  const excludedItems = t(`safari.tours.${id}.excluded`, { returnObjects: true }) || [];
  const highlightItems = t(`safari.tours.${id}.highlights`, { returnObjects: true }) || [];
  const bringItems = t(`safari.tours.${id}.bring`, { returnObjects: true }) || [];

  const currency = t('locale') === 'ar' ? 'ج.م' : 'EGP';
  
  const relatedTours = Object.keys(safariToursData).filter(key => key !== id).slice(0, 3);

  return (
    <div className="tour-details-page">
      <SEO 
        title={`${t(`safari.tours.${id}.title`)} - Safari Tours`} 
        description={t(`safari.tours.${id}.longDesc`).substring(0, 160)} 
        keywords={t('seo.safari.keywords')} 
        image={tourData.image} 
      />
      <div className="tour-page-bg" style={{ backgroundImage: `url('/images/safari_hero_background.webp')` }}></div>
      {/* Hero Section */}
      <div className="tour-hero" style={{ backgroundImage: `url('${tourData.image}')` }}>
        <div className="tour-hero-content container">
          <h1 className="reveal">{t(`safari.tours.${id}.title`)}</h1>
          <div className="tour-quick-info reveal" style={{ transitionDelay: '0.1s' }}>
            <span><MapPin size={18} /> Sharm El Sheikh</span>
            <span><Clock size={18} /> {tourData.duration}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tour-grid">
          
          {/* Main Content */}
          <div className="tour-content">
            
            {/* Overview */}
            <div className="detail-section reveal">
              <h2>{t('overview')}</h2>
              <p className="detail-text">{t(`safari.tours.${id}.longDesc`)}</p>
            </div>

            {/* Highlights */}
            {highlightItems.length > 0 && (
              <div className="detail-section reveal">
                <h2>{t('whatYouWillSee')}</h2>
                <div className="highlights-grid">
                  {highlightItems.map((item, index) => (
                    <div key={index} className="highlight-item">
                      <div className="highlight-number">{(index + 1).toString().padStart(2, '0')}</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Includes & Excludes Combined Grid */}
            <div className="detail-section reveal">
              <h2>{t('includesAndExcludes')}</h2>
              <div className="inc-exc-grid">
                {/* Includes */}
                <div className="inc-exc-box box-included">
                  <h3><CheckCircle2 size={24}/> {t('includes')}</h3>
                  <div className="includes-list">
                    {Array.isArray(includedItems) && includedItems.map((item, index) => (
                      <div key={index} className="include-item included">
                        <Check className="icon" size={20} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Excludes */}
                <div className="inc-exc-box box-excluded">
                  <h3><XCircle size={24}/> {t('excludes')}</h3>
                  <div className="includes-list">
                    {Array.isArray(excludedItems) && excludedItems.map((item, index) => (
                      <div key={index} className="include-item excluded">
                        <XCircle className="icon" size={20} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What to bring */}
            {bringItems.length > 0 && (
              <div className="detail-section reveal">
                <h2>{t('whatToBring')}</h2>
                <div className="bring-list">
                  {bringItems.map((item, index) => (
                    <div key={index} className="bring-badge">
                      <Backpack className="icon" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Tours */}
            <div className="related-tours reveal">
              <h2>{t('exploreOtherTours')}</h2>
              <div className="related-tours-grid tours-grid">
                {relatedTours.map((tourId) => {
                  const rTour = safariToursData[tourId];
                  return (
                    <Link to={`/tour/${tourId}`} key={tourId} className="tour-card reveal">
                      <div className="tour-image" style={{backgroundImage: `url('${rTour.image}')`}}>
                        <div className="tour-overlay"></div>
                        <div className="tour-badges">
                          <div className="badge-featured"><Star size={14}/> {t('safari.title1')}</div>
                        </div>
                        <div className="tour-info">
                          <div className="tour-meta">
                            <span><Clock size={14}/> {rTour.duration}</span>
                          </div>
                          <h3 className="tour-title" style={{fontSize: '1.4rem'}}>{t(`safari.tours.${tourId}.title`)}</h3>
                          <div className="tour-price" style={{fontSize: '1rem'}}>
                            {t('readMore')} <ArrowRight size={16} className="read-more-arrow ltr-only" /> <ArrowLeft size={16} className="read-more-arrow rtl-only" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sticky Booking Widget */}
          <div className="tour-sidebar">
            <div className="booking-widget reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="widget-header" style={{ paddingBottom: '10px', marginBottom: '20px', borderBottom: 'none' }}>
                <div className="widget-price-label" style={{ fontSize: '1.2rem', color: 'white', justifyContent: 'center' }}>
                  <CalendarCheck size={20} className="text-primary" /> {t('secureBooking')}
                </div>
              </div>

              <div className="widget-actions">
                <button onClick={() => setIsModalOpen(true)} className="btn-book">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  {t('bookNowCard')}
                </button>
                
                <a href="tel:+201027284402" className="btn-contact">
                  <Phone size={20} />
                  {t('contactUs')}
                </a>
              </div>

              <div className="widget-footer">
                <span><CheckCircle2 size={14} className="text-primary"/> Instant confirmation</span>
                <span><CheckCircle2 size={14} className="text-primary"/> Free cancellation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tourName={t(`safari.tours.${id}.title`)} 
      />
    </div>
  );
};

export default TourDetails;

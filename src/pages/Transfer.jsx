import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Transfer.css';

const Transfer = () => {
  const { t } = useTranslation();

  const destinations = [
    { name: t('transfer.d1Name'), desc: t('transfer.d1Desc') },
    { name: t('transfer.d2Name'), desc: t('transfer.d2Desc') },
    { name: t('transfer.d3Name'), desc: t('transfer.d3Desc') },
    { name: t('transfer.d4Name'), desc: t('transfer.d4Desc') },
    { name: t('transfer.d5Name'), desc: t('transfer.d5Desc') }
  ];

  return (
    <div className="transfer-page">
      <SEO 
        title={t('seo.transfer.title')} 
        description={t('seo.transfer.description')} 
        keywords={t('seo.transfer.keywords')} 
        image="/images/image.png" 
      />
      <div className="page-header transfer-header">
        <div className="container">
          <h1>{t('transfer.title1')} <span>{t('transfer.title2')}</span></h1>
          <p>{t('transfer.subtitle')}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="transfer-intro text-center">
            <h2>{t('transfer.introTitle')}</h2>
            <p className="section-desc">{t('transfer.introDesc')}</p>
          </div>

          <div className="grid grid-3 features-grid mb-5">
            <div className="feature-card">
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>{t('transfer.f1Title')}</h3>
              <p>{t('transfer.f1Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={40} /></div>
              <h3>{t('transfer.f2Title')}</h3>
              <p>{t('transfer.f2Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Navigation size={40} /></div>
              <h3>{t('transfer.f3Title')}</h3>
              <p>{t('transfer.f3Desc')}</p>
            </div>
          </div>

          <div className="destinations-section section">
            <h2 className="section-title">{t('transfer.destTitle1')} <span>{t('transfer.destTitle2')}</span></h2>
            <div className="destinations-grid">
              {destinations.map((dest, idx) => (
                <div key={idx} className="destination-card">
                  <MapPin className="dest-icon text-primary" size={28} />
                  <div>
                    <h3>{dest.name}</h3>
                    <p>{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-cta text-center mt-5">
            <h3>{t('transfer.ctaTitle')}</h3>
            <p>{t('transfer.ctaDesc')}</p>
            <a href="tel:+201027284402" className="btn btn-primary mt-3">{t('transfer.ctaBtn')}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfer;

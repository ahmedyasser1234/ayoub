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
        image={`${import.meta.env.BASE_URL}images/image.webp`} 
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

          <div className="fleet-pricing-section section">
            <h2 className="section-title text-center">{t('transfer.fleetTitle')}</h2>
            <p className="text-center mb-5">{t('transfer.fleetDesc')}</p>

            <div className="fleet-grid">
              {/* Hyundai */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/sedan_private_car.png`} alt={t('transfer.cars.hyundai.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.hyundai.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.hyundai.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$25</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$80</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$120</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$130</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chery */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/chery_sedan.png`} alt={t('transfer.cars.chery.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.chery.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.chery.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$24</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$79</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$119</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$129</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lancer */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/lancer_sedan.png`} alt={t('transfer.cars.lancer.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.lancer.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.lancer.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$26</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$81</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$121</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$131</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Corolla */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/corolla_sedan.png`} alt={t('transfer.cars.corolla.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.corolla.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.corolla.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$27</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$82</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$122</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$132</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Nissan */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/nissan_sedan.png`} alt={t('transfer.cars.nissan.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.nissan.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.nissan.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$28</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$83</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$123</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$133</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Minibus */}
              <div className="fleet-card">
                <div className="fleet-img-container">
                  <img src={`${import.meta.env.BASE_URL}images/toyota_hiace_minibus.png`} alt={t('transfer.cars.minibus.name')} className="fleet-img" />
                </div>
                <div className="fleet-info">
                  <h3>{t('transfer.cars.minibus.name')}</h3>
                  <p className="fleet-desc">{t('transfer.cars.minibus.desc')}</p>
                  <table className="pricing-table">
                    <thead><tr><th>{t('transfer.dest')}</th><th>{t('transfer.priceHead')}</th></tr></thead>
                    <tbody>
                      <tr><td>{t('transfer.destSharm')}</td><td className="price-val">$30</td></tr>
                      <tr><td>{t('transfer.destDahab')}</td><td className="price-val">$90</td></tr>
                      <tr><td>{t('transfer.destTaba')}</td><td className="price-val">$140</td></tr>
                      <tr><td>{t('transfer.destNuweiba')}</td><td className="price-val">$150</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Heart, Star, Facebook, ArrowRight, ArrowLeft, Award, ShieldCheck, CheckCircle, Users, Settings, Coffee, Languages, Percent, Search, Calendar, CreditCard, Smile } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="home">
      <SEO 
        title={t('seo.home.title')} 
        description={t('seo.home.description')} 
        keywords={t('seo.home.keywords')} 
        image="/images/image.webp" 
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge-container">
             <span className="hero-badge"><Star size={16}/> {t('home.badge')}</span>
          </div>
          <h1 className="hero-title">{t('hero.title1')} <span>{t('hero.title2')}</span></h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <Link to="/safari" className="btn btn-primary">{t('hero.discoverSafari')} <Arrow size={18}/></Link>
            <Link to="/transfer" className="btn btn-outline">{t('hero.bookTransfer')}</Link>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="tours section reveal">
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2rem', textTransform: 'none', marginBottom: '40px' }}>{t('home.toursTitle')}</h2>
          
          <div className="grid grid-2 tours-grid">
            {/* Safari Card */}
            <Link to="/safari" className="tour-card">
              <div className="tour-image" style={{backgroundImage: "url('/images/atv_desert_mountains.webp')"}}>
                <div className="tour-overlay"></div>
                <div className="tour-badges">
                  <div className="badge-featured"><Star size={14}/> {t('home.tours.safari.badge')}</div>
                  <button className="btn-heart" onClick={(e) => e.preventDefault()}><Heart size={20}/></button>
                </div>
                <div className="tour-info">
                  <div className="tour-meta">
                    <span><MapPin size={14}/> {t('home.tours.safari.location')}</span>
                    <span><Clock size={14}/> {t('home.tours.safari.duration')}</span>
                  </div>
                  <h3 className="tour-title">{t('home.tours.safari.title')}</h3>
                  <div className="tour-price">
                    {t('readMore')} <ArrowRight size={18} className="read-more-arrow ltr-only" /> <ArrowLeft size={18} className="read-more-arrow rtl-only" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Transfer Card */}
            <Link to="/transfer" className="tour-card">
              <div className="tour-image" style={{backgroundImage: "url('/images/luxury_transfer.webp')"}}>
                <div className="tour-overlay"></div>
                <div className="tour-badges">
                  <div className="badge-featured"><Star size={14}/> {t('home.tours.transfer.badge')}</div>
                  <button className="btn-heart" onClick={(e) => e.preventDefault()}><Heart size={20}/></button>
                </div>
                <div className="tour-info">
                  <div className="tour-meta">
                    <span><MapPin size={14}/> {t('home.tours.transfer.location')}</span>
                    <span><Clock size={14}/> {t('home.tours.transfer.duration')}</span>
                  </div>
                  <h3 className="tour-title">{t('home.tours.transfer.title')}</h3>
                  <div className="tour-price">
                    {t('readMore')} <ArrowRight size={18} className="read-more-arrow ltr-only" /> <ArrowLeft size={18} className="read-more-arrow rtl-only" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews CTA Section */}
      <section className="reviews-cta section reveal">
        <div className="container">
          <div className="reviews-banner">
            <h2>{t('home.reviews.title')}</h2>
            <p>{t('home.reviews.subtitle')}</p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-white">
               {t('home.reviews.btn')} <Facebook size={18}/>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us section reveal">
        <div className="container">
          <h2 className="section-title text-center" style={{ textTransform: 'none' }}>{t('home.whyUs.title')}</h2>
          <div className="grid grid-4 why-grid">
            <div className="why-card">
              <span className="why-bg-num">01</span>
              <div className="why-icon"><Award size={28}/></div>
              <h3>{t('home.whyUs.c1Title')}</h3>
              <p>{t('home.whyUs.c1Desc')}</p>
            </div>
            <div className="why-card">
              <span className="why-bg-num">02</span>
              <div className="why-icon"><ShieldCheck size={28}/></div>
              <h3>{t('home.whyUs.c2Title')}</h3>
              <p>{t('home.whyUs.c2Desc')}</p>
            </div>
            <div className="why-card">
              <span className="why-bg-num">03</span>
              <div className="why-icon"><CheckCircle size={28}/></div>
              <h3>{t('home.whyUs.c3Title')}</h3>
              <p>{t('home.whyUs.c3Desc')}</p>
            </div>
            <div className="why-card">
              <span className="why-bg-num">04</span>
              <div className="why-icon"><Clock size={28}/></div>
              <h3>{t('home.whyUs.c4Title')}</h3>
              <p>{t('home.whyUs.c4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight 1 */}
      <section className="highlight-block section reveal">
        <div className="container highlight-container">
          <div className="highlight-content">
            <div className="highlight-header">
              <span className="hl-badge">{t('home.highlights.h1Badge')}</span>
              <span className="hl-num">01</span>
            </div>
            <h2 className="hl-title">{t('home.highlights.h1Title')}</h2>
            <p className="hl-desc">{t('home.highlights.h1Desc')}</p>
            
            <ul className="hl-bullets">
              <li><div className="hl-icon"><Users size={20}/></div> <span>{t('home.highlights.h1b1')}</span></li>
              <li><div className="hl-icon"><Settings size={20}/></div> <span>{t('home.highlights.h1b2')}</span></li>
              <li><div className="hl-icon"><Coffee size={20}/></div> <span>{t('home.highlights.h1b3')}</span></li>
            </ul>
            
            <Link to="/safari" className="btn btn-primary mt-4">{t('home.highlights.h1Btn')} <Arrow size={18}/></Link>
          </div>
          <div className="highlight-image">
            <img src="/images/atv_desert_mountains.webp" alt="Safari Adventure"  loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Highlight 2 */}
      <section className="highlight-block section reveal">
        <div className="container highlight-container reverse">
          <div className="highlight-content">
            <div className="highlight-header">
              <span className="hl-badge">{t('home.highlights.h2Badge')}</span>
              <span className="hl-num">02</span>
            </div>
            <h2 className="hl-title">{t('home.highlights.h2Title')}</h2>
            <p className="hl-desc">{t('home.highlights.h2Desc')}</p>
            
            <ul className="hl-bullets">
              <li><div className="hl-icon"><Users size={20}/></div> <span>{t('home.highlights.h2b1')}</span></li>
              <li><div className="hl-icon"><Percent size={20}/></div> <span>{t('home.highlights.h2b2')}</span></li>
              <li><div className="hl-icon"><Languages size={20}/></div> <span>{t('home.highlights.h2b3')}</span></li>
            </ul>
            
            <Link to="/transfer" className="btn btn-primary mt-4">{t('home.highlights.h2Btn')} <Arrow size={18}/></Link>
          </div>
          <div className="highlight-image">
            <img src="/images/luxury_transfer.webp" alt="Custom Transfer"  loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="steps-section section reveal">
        <div className="container text-center">
          <h2 className="section-title" style={{textTransform: 'none'}}>{t('home.steps.title')}</h2>
          <p className="section-subtitle" style={{color: 'var(--text-muted)', marginBottom: '50px'}}>{t('home.steps.subtitle')}</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-bg-num">01</span>
              <div className="step-icon"><Search size={28}/></div>
              <h3>{t('home.steps.c1Title')}</h3>
              <p>{t('home.steps.c1Desc')}</p>
              <div className="step-arrow"><Arrow size={20}/></div>
            </div>
            <div className="step-card">
              <span className="step-bg-num">02</span>
              <div className="step-icon"><Calendar size={28}/></div>
              <h3>{t('home.steps.c2Title')}</h3>
              <p>{t('home.steps.c2Desc')}</p>
              <div className="step-arrow"><Arrow size={20}/></div>
            </div>
            <div className="step-card">
              <span className="step-bg-num">03</span>
              <div className="step-icon"><CreditCard size={28}/></div>
              <h3>{t('home.steps.c3Title')}</h3>
              <p>{t('home.steps.c3Desc')}</p>
              <div className="step-arrow"><Arrow size={20}/></div>
            </div>
            <div className="step-card">
              <span className="step-bg-num">04</span>
              <div className="step-icon"><Smile size={28}/></div>
              <h3>{t('home.steps.c4Title')}</h3>
              <p>{t('home.steps.c4Desc')}</p>
            </div>
          </div>
          
          <div className="trust-badges mt-4">
            <span><CheckCircle size={18}/> {t('home.steps.badge1')}</span>
            <span><Award size={18}/> {t('home.steps.badge2')}</span>
            <span><ShieldCheck size={18}/> {t('home.steps.badge3')}</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta section reveal">
        <div className="container">
          <div className="final-cta-content text-center">
            <div className="cta-star"><Star size={32}/></div>
            <h2>{t('home.finalCta.title')}</h2>
            <p>{t('home.finalCta.subtitle')}</p>
            <Link to="/safari" className="btn btn-outline btn-lg mt-4" style={{borderColor: 'var(--secondary)', color: 'var(--secondary)'}}>
              {t('home.finalCta.btn')} <Arrow size={18}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

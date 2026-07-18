import { Phone, MapPin, Mail, Instagram, Facebook, Youtube, Music2, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Slogan */}
          <div className="footer-brand">
            <img src="/images/image.webp" alt="Ayoub Safari Logo" className="logo-img" style={{ marginBottom: '20px' }} />
            <p className="slogan">{t('footer.slogan')}</p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/safari">{t('nav.safari')}</Link></li>
              <li><Link to="/transfer">{t('nav.transfers')}</Link></li>
              <li><Link to="/gallery">{t('nav.gallery') || 'Gallery'}</Link></li>
              <li><Link to="/">{t('footer.partners')}</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-contact">
            <h3>{t('footer.contactInfo')}</h3>
            <ul>
              <li>
                <Phone className="icon" size={18} />
                <a href="tel:+201027284402" dir="ltr">+20 10 27284402</a>
              </li>
              <li>
                <Mail className="icon" size={18} />
                <a href="mailto:booking@ayoubsafari.com">booking@ayoubsafari.com</a>
              </li>
              <li>
                <MapPin className="icon" size={18} />
                <span>Sharm El Sheikh, Egypt</span>
              </li>
            </ul>
            <div className="social-links mt-4">
              <a href="#" aria-label="TikTok"><Music2 size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="https://www.instagram.com/ayoup_safari_trips?igsh=YXR5MGcwYzlnaG10" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61590759295828" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
          
          {/* Newsletter & Review */}
          <div className="footer-newsletter">
            <h3>{t('footer.newsletterTitle')}</h3>
            <p>{t('footer.newsletterDesc')}</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <button type="submit" className="btn btn-primary">{t('footer.subscribeBtn')}</button>
              <input type="email" placeholder={t('footer.emailPlaceholder')} />
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.rights')} | Developed by <a href="https://wa.me/201091678935" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>elkoko</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

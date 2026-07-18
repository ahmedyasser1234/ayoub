import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langRef]);

  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    closeMenu();
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'it', label: 'Italiano' },
    { code: 'ru', label: 'Русский' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/image.png" alt="Ayoub Safari Logo" className="logo-img" />
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link to="/safari" className={location.pathname === '/safari' ? 'active-link' : ''} onClick={closeMenu}>
              {t('nav.safari')}
            </Link>
          </li>
          <li>
            <Link to="/transfer" className={location.pathname === '/transfer' ? 'active-link' : ''} onClick={closeMenu}>
              {t('nav.transfers')}
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active-link' : ''} onClick={closeMenu}>
              {t('nav.gallery') || 'Gallery'}
            </Link>
          </li>
          
          {/* Language Switcher */}
          <li className="lang-switcher" ref={langRef}>
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <Globe size={18} /> {i18n.language.toUpperCase()}
            </button>
            {langOpen && (
              <ul className="lang-dropdown">
                {languages.map((lng) => (
                  <li key={lng.code}>
                    <button onClick={() => changeLanguage(lng.code)}>
                      {lng.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-contact">
            <a href="tel:+201027284402" className="btn btn-primary" onClick={closeMenu}>
              {t('nav.bookNow')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

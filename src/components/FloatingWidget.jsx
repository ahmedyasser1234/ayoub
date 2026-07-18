import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './FloatingWidget.css';

const contactMethods = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/201027284402',
    color: '#25D366',
    // WhatsApp SVG
    svg: <svg width="55" height="55" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  },
  {
    id: 'messenger',
    href: 'https://m.me/100000000000000',
    color: '#00B2FF',
    // Messenger SVG
    svg: <svg width="55" height="55" viewBox="0 0 24 24" fill="#00B2FF" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.91 1.513 5.494 3.868 7.151v3.916l3.528-1.944c.828.23 1.704.354 2.604.354 5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2zm1.036 12.438-2.658-2.846-5.185 2.846 5.674-6.046 2.695 2.847 5.148-2.847-5.674 6.046z"/></svg>
  },
  {
    id: 'telegram',
    href: 'https://t.me/AyoubSafari',
    color: '#0088cc',
    // Telegram SVG
    svg: <svg width="55" height="55" viewBox="0 0 24 24" fill="#0088cc" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.666 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.114.094.142.222.151.334.009.112.019.262.008.416z"/></svg>
  }
];

const FloatingWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Cycle contact methods
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contactMethods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll visibility
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentMethod = contactMethods[currentIndex];

  return (
    <div className="floating-widget-container">
      {/* Scroll to Top */}
      <button 
        className={`floating-btn scroll-top-btn ${showScroll ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Dynamic Support Link */}
      <div className="support-widget">
        <a 
          href={currentMethod.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn dynamic-support-btn" 
          title="Contact Us"
          key={currentMethod.id} // Forces re-animation on change if desired
        >
          {currentMethod.svg}
        </a>
      </div>
    </div>
  );
};

export default FloatingWidget;

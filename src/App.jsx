import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Safari from './pages/Safari';
import Transfer from './pages/Transfer';
import TourDetails from './pages/TourDetails';
import Gallery from './pages/Gallery';
import FloatingWidget from './components/FloatingWidget';

function AppContent() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update direction based on language (Arabic is RTL)
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Scroll to top on route change & refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Slight delay to override browser's default scroll restoration behavior
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [location.pathname]);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Cleanup and re-observe on route change
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname, i18n.language]);

  return (
    <div className={`app-container ${i18n.language === 'ar' ? 'rtl-mode' : ''}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

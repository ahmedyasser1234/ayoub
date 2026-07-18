import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MessageCircle, Send, Mail } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, tourName }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    adults: '1',
    children: '0',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMessage = () => {
    return `*New Booking Request*%0A` +
           `-------------------------%0A` +
           `*Tour:* ${tourName}%0A` +
           `*Name:* ${formData.name}%0A` +
           `*Phone:* ${formData.phone}%0A` +
           `*Date:* ${formData.date}%0A` +
           `*Pax:* ${formData.adults} Adults, ${formData.children} Children%0A` +
           `*Notes:* ${formData.notes || 'None'}`;
  };

  const handleBook = (e, method) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert(t('booking.fillRequired') || 'Please fill in your Name, Phone, and Date.');
      return;
    }

    const message = generateMessage();
    
    if (method === 'whatsapp') {
      window.open(`https://wa.me/201027284402?text=${message}`, '_blank');
    } else if (method === 'telegram') {
      window.open(`https://t.me/AyoubSafari?text=${message}`, '_blank');
    } else if (method === 'email') {
      // For email, we use standard URL encoding without %0A for newlines sometimes requires %0D%0A, 
      // but standard encodeURIComponent handles it better if we build it clean.
      const emailBody = `New Booking Request\n\nTour: ${tourName}\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nPax: ${formData.adults} Adults, ${formData.children} Children\nNotes: ${formData.notes}\n`;
      window.open(`mailto:booking@ayoubsafari.com?subject=Booking Request - ${tourName}&body=${encodeURIComponent(emailBody)}`);
    }

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2>{t('booking.title') || 'Book Your Tour'}</h2>
            <p>{tourName}</p>
          </div>
          <button className="btn-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>{t('booking.name') || 'Full Name'} *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('booking.phone') || 'Phone / WhatsApp'} *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+1234567890" />
              </div>
              <div className="form-group">
                <label>{t('booking.date') || 'Tour Date'} *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('booking.adults') || 'Adults'} *</label>
                <input type="number" min="1" name="adults" value={formData.adults} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>{t('booking.children') || 'Children'}</label>
                <input type="number" min="0" name="children" value={formData.children} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>{t('booking.notes') || 'Special Requests'}</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any specific requirements?"></textarea>
            </div>

            <div className="booking-actions">
              <button className="btn-book btn-whatsapp" onClick={(e) => handleBook(e, 'whatsapp')}>
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </button>
              <button className="btn-book btn-telegram" onClick={(e) => handleBook(e, 'telegram')}>
                <Send size={24} />
                <span>Telegram</span>
              </button>
              <button className="btn-book btn-email" onClick={(e) => handleBook(e, 'email')}>
                <Mail size={24} />
                <span>Email</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

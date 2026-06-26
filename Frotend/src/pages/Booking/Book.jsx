import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  User,
  Calendar,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Stethoscope
} from 'lucide-react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    reason: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
  ];


 

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.patientName.trim()) newErrors.patientName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.reason.trim()) newErrors.reason = 'Please describe your reason for visit';
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Please select a date';
    if (!formData.appointmentTime) newErrors.appointmentTime = 'Please select a time';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Prepare data matching the schema
   const appointmentData = {
  patientName: formData.patientName,
  email: formData.email,
  phone: formData.phone,
  reason: formData.reason,
  appointmentDate: new Date(formData.appointmentDate),
  appointmentTime: formData.appointmentTime
};

    console.log('📋 Appointment Data:', appointmentData);

    // Simulate API call - Replace with actual API call
    try {
      // In production: await axios.post('/api/appointments', appointmentData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form
     setFormData({
  patientName: '',
  email: '',
  phone: '',
  reason: '',
  appointmentDate: '',
  appointmentTime: ''
});
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Booking error:', error);
      setIsLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <section className="book-section">
      <div className="book-container">
        
        {/* Header */}
        <div className="about-hero-bg1">
          <div className="about-hero-bg-content1">
            <span className="about-hero-tag1"># BOOK APPOINTMENT </span>
            <h1 className="about-hero-title1">
              Get in touch with our <br />
              <span>friendly team today</span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="book-content">
          
          {/* Left - Contact Info */}
          <div className="book-info-side">
            <div className="book-info-card">
              <h3 className="book-info-title">Do you have some questions?</h3>
              <p className="book-info-desc">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="book-info-features">
                <div className="book-feature">
                  <div className="book-feature-icon">
                    <CheckCircle size={18} />
                  </div>
                  <span>Expert Dental Care</span>
                </div>
                <div className="book-feature">
                  <div className="book-feature-icon">
                    <CheckCircle size={18} />
                  </div>
                  <span>Modern Technology</span>
                </div>
                <div className="book-feature">
                  <div className="book-feature-icon">
                    <CheckCircle size={18} />
                  </div>
                  <span>Painless Treatment</span>
                </div>
                <div className="book-feature">
                  <div className="book-feature-icon">
                    <CheckCircle size={18} />
                  </div>
                  <span>Flexible Scheduling</span>
                </div>
              </div>

              <div className="book-info-divider"></div>

              <div className="book-info-location">
                <MapPin size={18} className="book-location-icon" />
                <div>
                  <span className="book-location-label">Visit Our Clinic</span>
                  <span className="book-location-value">123 Dental Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="book-form-side">
            <div className="book-form-card">
              <h2 className="book-form-title"># GET IN TOUCH</h2>
              <p className="book-form-subtitle">Do you have some questions?</p>

              <form onSubmit={handleSubmit} className="book-form">
                <div className="book-form-group">
                  <label className="book-label">
                    Full name <span className="book-required">*</span>
                  </label>
                  <div className="book-input-wrapper">
                    <User size={18} className="book-input-icon" />
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`book-input ${errors.patientName ? 'book-input-error' : ''}`}
                    />
                  </div>
                  {errors.patientName && (
                    <span className="book-error">
                      <AlertCircle size={14} />
                      {errors.patientName}
                    </span>
                  )}
                </div>

                <div className="book-form-group">
                  <label className="book-label">
                    Email <span className="book-required">*</span>
                  </label>
                  <div className="book-input-wrapper">
                    <Mail size={18} className="book-input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`book-input ${errors.email ? 'book-input-error' : ''}`}
                    />
                  </div>
                  {errors.email && (
                    <span className="book-error">
                      <AlertCircle size={14} />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="book-form-group">
                  <label className="book-label">
                    Phone number <span className="book-required">*</span>
                  </label>
                  <div className="book-input-wrapper">
                    <Phone size={18} className="book-input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`book-input ${errors.phone ? 'book-input-error' : ''}`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="book-error">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="book-form-row">
                  <div className="book-form-group">
                    <label className="book-label">
                      Appointment Date <span className="book-required">*</span>
                    </label>
                    <div className="book-input-wrapper">
                      <Calendar size={18} className="book-input-icon" />
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        min={today}
                        max={maxDateStr}
                        className={`book-input ${errors.appointmentDate ? 'book-input-error' : ''}`}
                      />
                    </div>
                    {errors.appointmentDate && (
                      <span className="book-error">
                        <AlertCircle size={14} />
                        {errors.appointmentDate}
                      </span>
                    )}
                  </div>

                  <div className="book-form-group">
                    <label className="book-label">
                      Appointment Time <span className="book-required">*</span>
                    </label>
                    <div className="book-input-wrapper">
                      <Clock size={18} className="book-input-icon" />
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        className={`book-select ${errors.appointmentTime ? 'book-input-error' : ''}`}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    {errors.appointmentTime && (
                      <span className="book-error">
                        <AlertCircle size={14} />
                        {errors.appointmentTime}
                      </span>
                    )}
                  </div>
                </div>

                <div className="book-form-group">
                  {/* <label className="book-label">
                    Select Doctor <span className="book-required">*</span>
                  </label> */}
                  <div className="book-input-wrapper">
                    {/* <Stethoscope size={18} className="book-input-icon" /> */}
                    {/* <select
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleChange}
                      className="book-select"
                    >
                      {doctors.map(doctor => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                    </select> */}

                  </div>
                  {/* <small className="book-hint">
                    Dr. Anupam is our senior specialist
                  </small> */}
                </div>

                <div className="book-form-group">
                  <label className="book-label">
                    Reason for Visit <span className="book-required">*</span>
                  </label>
                  <div className="book-input-wrapper">
                    <MessageCircle size={18} className="book-input-icon" />
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Describe your dental concern or reason for visit..."
                      className={`book-textarea ${errors.reason ? 'book-input-error' : ''}`}
                      rows="4"
                    />
                  </div>
                  {errors.reason && (
                    <span className="book-error">
                      <AlertCircle size={14} />
                      {errors.reason}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="book-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="book-spinner"></span>
                      Booking...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Appointment Booked!
                    </>
                  ) : (
                    <>
                      Book Appointment
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Book;
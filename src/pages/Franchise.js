import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// TODO: Replace with your EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_1bilevj";
const EMAILJS_TEMPLATE_ID = "template_3ok4d4o";
const EMAILJS_PUBLIC_KEY = "-uUlvbGAEiDSgGd8p";

export default function Franchise() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    city: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ from_name: "", from_email: "", phone: "", city: "", budget: "", message: "" });
      })
      .catch(() => {
        setStatus({ loading: false, success: false, error: true });
      });
  };

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const slideFromLeftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const slideFromRightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const benefits = [
    { icon: "📽️", title: "Curved Screen Technology", desc: "Offer your customers the unique curved screen experience - a proven crowd puller" },
    { icon: "🎬", title: "Latest Technology", desc: "Access to cutting-edge cinema technology including 4K projection and Dolby Atmos" },
    { icon: "📈", title: "Strong Support", desc: "Comprehensive training and ongoing operational support from our experienced team" },
    { icon: "🌟", title: "Brand Recognition", desc: "Partner with Grande Cines - known for Guwahati's only curved screen cinema" },
    { icon: "💰", title: "High ROI", desc: "Attractive profit margins with the unique selling point of curved screen technology" },
    { icon: "🤝", title: "Complete Assistance", desc: "From setup to management, we're with you at every step of the journey" },
  ];

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 style={{textAlign:'center'}}>PARTNER WITH US</h1>
      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>FRANCHISE OPPORTUNITY</h3>
        {/* <p>Our flagship <strong>Curved Screen Technology</strong> has made Grande Cines a household name in Guwahati. As a franchise partner, you'll have exclusive rights to bring this unique cinema experience to your region - setting your theater apart from all competition.</p> */}
      </motion.div>
      <h1 style={{textAlign:'center'}}>WHY US?</h1>
      {/* <p>Bring Guwahati's Famous Curved Screen Cinema Experience to Your City</p> */}

      {/* <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&h=500&fit=crop" alt="Cinema Franchise" />
      </motion.div> */}

      

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRightVariants}
        viewport={{ once: true }}
      >
        <h3>Why Franchise with Grande Cines?</h3>
        <p>Grande Cines has revolutionized cinema experience in Northeast India with our signature curved screen. Our franchise partners enjoy a unique market advantage, sustainable growth, comprehensive support, and access to the same technology that made us Guwahati's most talked-about cinema.</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Key Benefits
      </motion.h2>
      <motion.div
        className="grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="card"
            variants={bounceVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-content" style={{ textAlign: 'center', paddingTop: '30px' }}>
              <div style={{ fontSize: '3em', marginBottom: '15px' }}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0,
            },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">#1</p>
          <p>Curved Screen in NE India</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">100%</p>
          <p>Customer Satisfaction</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">High</p>
          <p>ROI Potential</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>Investment & Returns</h3>
        <p><strong>Estimated Investment:</strong> Contact us for detailed investment requirements</p>
        <p><strong>Unique Selling Point:</strong> Curved Screen Technology - First in your region!</p>
        <p style={{ marginTop: '20px' }}><strong>What's Included:</strong></p>
        <p>✓ Curved screen installation and setup<br/>✓ 4K Projection and Dolby Atmos sound systems<br/>✓ Complete theater design and construction guidance<br/>✓ Staff training and recruitment support<br/>✓ Marketing and launch campaign support<br/>✓ Ongoing operational and technical assistance</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
        style={{ marginTop: '40px' }}
      >
        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Franchise Enquiry Form</h3>
        {status.success ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#4CAF50' }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>✓</div>
            <h3>Thank you for your enquiry!</h3>
            <p>We will contact you soon.</p>
          </div>
        ) : (
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '600px',
              margin: '0 auto',
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <input
                type="text"
                name="from_name"
                placeholder="Full Name *"
                required
                value={formData.from_name}
                onChange={handleChange}
                style={{
                  flex: '1 1 250px',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address *"
                required
                value={formData.from_email}
                onChange={handleChange}
                style={{
                  flex: '1 1 250px',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={handleChange}
                style={{
                  flex: '1 1 250px',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="City / Location *"
                required
                value={formData.city}
                onChange={handleChange}
                style={{
                  flex: '1 1 250px',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
            </div>
            <input
              type="text"
              name="budget"
              placeholder="Investment Budget (Optional)"
              value={formData.budget}
              onChange={handleChange}
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '16px',
                outline: 'none',
              }}
            />
            <textarea
              name="message"
              placeholder="Tell us about yourself and why you're interested in the Grande Cines franchise..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
              }}
            />
            {status.error && (
              <p style={{ color: '#f44336', textAlign: 'center' }}>
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status.loading}
              style={{
                padding: '15px 30px',
                backgroundColor: status.loading ? '#ccc' : '#f5c518',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: status.loading ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                if (!status.loading) {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 4px 15px rgba(245, 197, 24, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {status.loading ? 'Sending...' : 'Submit Franchise Enquiry'}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

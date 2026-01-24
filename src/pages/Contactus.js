import { motion } from "framer-motion";

export default function Contactus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
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

  const jobOpenings = [
    { title: 'Cinema Manager', type: 'Full-time', location: 'Guwahati' },
    { title: 'Ticketing Executive', type: 'Full-time', location: 'Guwahati' },
    { title: 'Food & Beverage Staff', type: 'Part-time', location: 'Guwahati' },
    { title: 'Projection Technician', type: 'Full-time', location: 'Guwahati' },
  ];

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Contact Us</h1>
      <p>Get in touch with Grande Cines - We'd love to hear from you!</p>

      {/* Contact Info Grid */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginTop: '30px',
        }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Address Card */}
        <motion.div
          className="card"
          variants={bounceVariants}
          whileHover={{ scale: 1.03 }}
          style={{ background: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="card-content" style={{ padding: '25px', textAlign: 'center' }}>
            <span style={{ fontSize: '3em' }}>📍</span>
            <h3 style={{ marginTop: '15px', color: '#1a1a2e' }}>Our Address</h3>
            <p style={{ color: '#555', lineHeight: '1.6', marginTop: '10px' }}>
              Grande Cines<br />
              Paltan Bazar, GS Road<br />
              Guwahati, Assam 781008<br />
              India
            </p>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="card"
          variants={bounceVariants}
          whileHover={{ scale: 1.03 }}
          style={{ background: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="card-content" style={{ padding: '25px', textAlign: 'center' }}>
            <span style={{ fontSize: '3em' }}>📞</span>
            <h3 style={{ marginTop: '15px', color: '#1a1a2e' }}>Phone</h3>
            <p style={{ color: '#555', marginTop: '10px' }}>
              <a href="tel:+919678867222" style={{ color: '#1a1a2e', textDecoration: 'none', fontWeight: 'bold' }}>
                +91 967888 67222
              </a>
            </p>
            <p style={{ color: '#555', marginTop: '5px' }}>
              <a href="tel:+917099991770" style={{ color: '#1a1a2e', textDecoration: 'none', fontWeight: 'bold' }}>
                +91 70999 91770
              </a>
            </p>
            <p style={{ color: '#888', fontSize: '0.9em', marginTop: '10px' }}>Mon-Sun: 9:00 AM - 11:00 PM</p>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="card"
          variants={bounceVariants}
          whileHover={{ scale: 1.03 }}
          style={{ background: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="card-content" style={{ padding: '25px', textAlign: 'center' }}>
            <span style={{ fontSize: '3em' }}>✉️</span>
            <h3 style={{ marginTop: '15px', color: '#1a1a2e' }}>Email</h3>
            <p style={{ color: '#555', marginTop: '10px' }}>
              <a href="mailto:jalanrishabh1@gmail.com" style={{ color: '#f5c518', textDecoration: 'none', fontWeight: 'bold' }}>
                jalanrishabh1@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        style={{ marginTop: '40px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Find Us Here</h2>
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <iframe
            title="Grande Cines Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5153797970825!2d91.74882277556998!3d26.179907977091528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a297531bd2b%3A0x85a93a4fdc6c8156!2sGrande%20Cines!5e0!3m2!1sen!2sin!4v1769247345440!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
          <a
            href="https://www.google.com/maps/search/Grande+Cines+Paltan+Bazar+Guwahati"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f5c518', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Open in Google Maps →
          </a>
        </p>
      </motion.div>

      {/* Download App Section */}
      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518', marginTop: '40px' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>Download Our App</h3>
        <p>Get the Grande Cines app for easy booking, exclusive offers, and more!</p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.grandecines"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: '#1a1a2e',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            <span style={{ fontSize: '1.5em' }}>▶️</span>
            <div>
              <div style={{ fontSize: '0.7em', opacity: 0.8 }}>GET IT ON</div>
              <div>Google Play</div>
            </div>
          </motion.a>
          <motion.a
            href="https://apps.apple.com/in/app/grandecines/id6752354256"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: '#1a1a2e',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            <span style={{ fontSize: '1.5em' }}>🍎</span>
            <div>
              <div style={{ fontSize: '0.7em', opacity: 0.8 }}>Download on the</div>
              <div>App Store</div>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        style={{ marginTop: '40px', textAlign: 'center' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: '20px' }}>Follow Us</h2>
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.instagram.com/grandecines"
            target="_blank"
            rel="noopener noreferrer"
            variants={bounceVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 30px',
              background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              minWidth: '120px',
            }}
          >
            <span style={{ fontSize: '2.5em' }}>📸</span>
            <span style={{ fontWeight: 'bold', marginTop: '10px' }}>Instagram</span>
            <span style={{ fontSize: '0.8em', opacity: 0.9 }}>@grandecines</span>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/grandecines"
            target="_blank"
            rel="noopener noreferrer"
            variants={bounceVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 30px',
              background: '#1877f2',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              minWidth: '120px',
            }}
          >
            <span style={{ fontSize: '2.5em' }}>👍</span>
            <span style={{ fontWeight: 'bold', marginTop: '10px' }}>Facebook</span>
            <span style={{ fontSize: '0.8em', opacity: 0.9 }}>Grande Cines</span>
          </motion.a>
          <motion.a
            href="https://twitter.com/grandecines"
            target="_blank"
            rel="noopener noreferrer"
            variants={bounceVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 30px',
              background: '#1da1f2',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              minWidth: '120px',
            }}
          >
            <span style={{ fontSize: '2.5em' }}>🐦</span>
            <span style={{ fontWeight: 'bold', marginTop: '10px' }}>Twitter</span>
            <span style={{ fontSize: '0.8em', opacity: 0.9 }}>@grandecines</span>
          </motion.a>
          <motion.a
            href="https://www.youtube.com/grandecines"
            target="_blank"
            rel="noopener noreferrer"
            variants={bounceVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 30px',
              background: '#ff0000',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              minWidth: '120px',
            }}
          >
            <span style={{ fontSize: '2.5em' }}>▶️</span>
            <span style={{ fontWeight: 'bold', marginTop: '10px' }}>YouTube</span>
            <span style={{ fontSize: '0.8em', opacity: 0.9 }}>Grande Cines</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Job Opportunities Section */}
      <motion.div
        style={{ marginTop: '50px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Job Opportunities</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          Join our team and be part of the cinematic experience!
        </p>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              variants={bounceVariants}
              whileHover={{ scale: 1.03 }}
              style={{
                padding: '25px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #f5c518',
              }}
            >
              <h3 style={{ color: '#1a1a2e', marginBottom: '10px' }}>{job.title}</h3>
              <p style={{ color: '#666', marginBottom: '5px' }}>
                <span style={{ fontWeight: 'bold' }}>Type:</span> {job.type}
              </p>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold' }}>Location:</span> {job.location}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:jalanrishabh1@gmail.com?subject=Application for ' + job.title}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  color: '#f5c518',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="feature-section"
          style={{ marginTop: '30px' }}
          initial="hidden"
          whileInView="visible"
          variants={slideFromRightVariants}
          viewport={{ once: true }}
        >
          <h3>Why Work With Us?</h3>
          <p>✓ Competitive salary packages</p>
          <p>✓ Free movie tickets for employees</p>
          <p>✓ Health insurance benefits</p>
          <p>✓ Career growth opportunities</p>
          <p>✓ Fun and dynamic work environment</p>
          <p style={{ marginTop: '15px', color: '#f5c518', fontWeight: 'bold' }}>
            Send your resume to: jalanrishabh1@gmail.com
          </p>
        </motion.div>
      </motion.div>

      {/* Quick Contact CTA */}
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '12px',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 style={{ color: 'white' }}>Have Questions?</h3>
        <p style={{ color: '#ccc', marginBottom: '20px' }}>We're here to help! Reach out to us anytime.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <motion.a
            href="tel:+919678867222"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 30px',
              background: '#f5c518',
              color: '#1a1a2e',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            📞 Call Now
          </motion.a>
          <motion.a
            href="mailto:jalanrishabh1@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 30px',
              background: 'transparent',
              color: '#f5c518',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              border: '2px solid #f5c518',
            }}
          >
            ✉️ Email Us
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

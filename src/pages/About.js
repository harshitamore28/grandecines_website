
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>About Grande Cines</h1>
      <p>Guwahati's First & Only Curved Screen Cinema Experience</p>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&h=500&fit=crop" alt="Cinema Hall" />
      </motion.div>

      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Guwahati's Only Curved Screen</h3>
        <p>Experience movies like never before on our revolutionary <strong>Curved Screen</strong> - the first and only one in Guwahati! Our curved screen technology provides an immersive viewing experience with enhanced depth perception and uniform picture quality from every seat in the house.</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Our Story</h3>
        <p>Grande Cines was founded with a vision to bring world-class cinema experience to Guwahati. Located in the heart of Paltan Bazar, we pride ourselves on offering the most advanced projection technology, premium sound systems, and luxurious seating - all centered around our signature curved screen that sets us apart from any other cinema in the region.</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Why Choose Grande Cines?
      </motion.h2>
      <motion.div
        className="grid"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=300&fit=crop" alt="Curved Screen" />
          <div className="card-content">
            <h3>Curved Screen Technology</h3>
            <p>The only curved screen in Guwahati for an unmatched immersive cinematic experience.</p>
          </div>
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=300&fit=crop" alt="Dolby Sound" />
          <div className="card-content">
            <h3>Dolby Atmos Sound</h3>
            <p>World-class Dolby Atmos surround sound for crystal clear audio from every angle.</p>
          </div>
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop" alt="Premium Seats" />
          <div className="card-content">
            <h3>Luxury Recliner Seats</h3>
            <p>Premium reclining seats with ample legroom for ultimate comfort during long movies.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">2</p>
          <p>Premium Audis</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">200+</p>
          <p>Luxury Seats</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">#1</p>
          <p>Curved Screen in Guwahati</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Find Us
      </motion.h2>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Our Location</h3>
        <p><strong>Grande Cines</strong></p>
        <p>Paltan Bazar, Guwahati, Assam 781008</p>
        <p>Near Guwahati Railway Station</p>
        <p style={{ marginTop: '15px' }}><strong>Contact:</strong> +91-XXXXXXXXXX</p>
        <p><strong>Email:</strong> info@grandecines.com</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden' }}
      >
        <iframe
          title="Grande Cines Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.674!2d91.7468!3d26.1844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5913b4b9a2b1%3A0x4b6c8c3b8c8c8c8c!2sPaltan%20Bazar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

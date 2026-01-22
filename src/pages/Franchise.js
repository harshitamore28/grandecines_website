
import React from "react";
import { motion } from "framer-motion";

export default function Franchise() {
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
    >
      <h1>Franchise Opportunities</h1>
      <p>Bring Guwahati's Famous Curved Screen Cinema Experience to Your City</p>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&h=500&fit=crop" alt="Cinema Franchise" />
      </motion.div>

      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>The Curved Screen Advantage</h3>
        <p>Our flagship <strong>Curved Screen Technology</strong> has made Grande Cines a household name in Guwahati. As a franchise partner, you'll have exclusive rights to bring this unique cinema experience to your region - setting your theater apart from all competition.</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
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
        <motion.div
          className="stat-card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <p className="number">#1</p>
          <p>Curved Screen in NE India</p>
        </motion.div>
        <motion.div
          className="stat-card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <p className="number">100%</p>
          <p>Customer Satisfaction</p>
        </motion.div>
        <motion.div
          className="stat-card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <p className="number">High</p>
          <p>ROI Potential</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Visit Our Flagship Location</h3>
        <p><strong>Grande Cines</strong></p>
        <p>Paltan Bazar, Guwahati, Assam 781008</p>
        <p>Near Guwahati Railway Station</p>
        <p style={{ marginTop: '10px' }}>Experience our curved screen cinema firsthand before joining our franchise network!</p>
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
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '12px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Ready to Bring Curved Screen Cinema to Your City?</h3>
        <p>Contact our franchise team to learn more about this exciting opportunity</p>
        <button style={{ marginTop: '20px' }}>Send Franchise Enquiry</button>
      </motion.div>
    </motion.div>
  );
}

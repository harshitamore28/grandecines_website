
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
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

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 style={{textAlign:'center'}}>ABOUT GRANDE CINES</h1>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&h=500&fit=crop" alt="Cinema Hall" />
      </motion.div>

      {/* About Grande Cines Section */}
      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        {/* <h3>About Grande Cines</h3> */}
        <p>Grande Cines is a contemporary cinema exhibition brand focused on delivering a refined and comfortable movie watching experience. Emphasising on superior presentation, thoughtfully designed spaces, and a high-quality F&B offerings, Grande Cines is built around attention to detail and consistency.</p>
        <p style={{ marginTop: '15px' }}>Our brand blends modern cinema technology with a strong understanding of audience expectations, creating an environment where storytelling, comfort, and service come together seamlessly to enhance the customer’s experience.</p>
      </motion.div>

      {/* Vision & Mission Section */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
          marginTop: '30px',
        }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Vision Card */}
        <motion.div
          variants={bounceVariants}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: '30px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ fontSize: '3em', marginBottom: '15px' }}>🎯</div>
          <h3 style={{ color: '#f5c518', marginBottom: '15px', fontSize: '1.5em' }}>Vision</h3>
          <p style={{ color: '#ccc', lineHeight: '1.8' }}>
           We started Grande Cines with the goal to redefine the movie experience of the movie lovers by making premium facilities accessible and sustainable at scale. We believe that world class experiences should not be limited to luxury price points, and that affordability and excellence, both can coexist when driven by the right processes, partnerships, and discipline.<br/><br/>We are committed in delivering uncompromised standards across every touchpoint with cutting-edge audio and visual technology, thoughtfully designed spaces, and F&B offerings that is aligned with international benchmarks. Our culinary philosophy is rooted in quality without any shortcuts and cost cutting, using the best raw materials and imported seasonings to ensure consistency, taste, and brand trust among our patrons.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={bounceVariants}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: '30px',
            background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ fontSize: '3em', marginBottom: '15px' }}>🚀</div>
          <h3 style={{ color: '#f5c518', marginBottom: '15px', fontSize: '1.5em' }}>Mission</h3>
          <p style={{ color: '#ccc', lineHeight: '1.8' }}>
           Our mission is to build and expand Grande Cines as a cinema exhibition brand that consistently delivers premium yet affordable experience across India. We aim to achieve this through a disciplined expansion strategy focused on operational excellence, standardisation, and strong unit-level profitability for the investors.<br/><br/>We are committed to replicating our core strengths superior movie experience, high quality F&B offerings made with uncompromised ingredients, and customer-centric service, across every location. By establishing robust systems, reliable supply chains, and strong local execution teams, we ensure uniform quality while scaling efficiently.<br/><br/>As we grow, our mission is to create a future-ready cinema platform that adapts to evolving audience preferences, leverages technology to improve efficiency, and builds long-term value for the stakeholders. Through responsible growth and strategic partnerships, we seek to position ourselves as a trusted national cinema brand with sustainable returns.
          </p>
        </motion.div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        style={{ marginTop: '40px', textAlign: 'center' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: '30px' }}>OUR CORE VALUES</h2>
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { icon: '💯', value: 'Excellence' },
            { icon: '🤝', value: 'Customer First' },
            { icon: '🍿', value: 'Quality F&B' },
            { icon: '✌', value: 'Comfort' },
            { icon: '🥇', value: 'Trust' },
            { icon: '💡', value: 'Consistency' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={bounceVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{
                padding: '20px 25px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                minWidth: '130px',
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: '10px' }}>{item.icon}</div>
              <p style={{ color: '#1a1a2e', fontWeight: 'bold' }}>{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518', marginTop: '40px' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>Guwahati's Only Curved Screen</h3>
        <p>Experience movies like never before on our revolutionary <strong>Curved Screen</strong> - the first and only one in Guwahati! Our curved screen technology provides an immersive viewing experience with enhanced depth perception and uniform picture quality from every seat in the house.</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRightVariants}
        viewport={{ once: true }}
      >
        <h3>Our Story</h3>
        <p>Grande Cines was founded with a vision to bring world-class cinema experience to Guwahati. Located in the heart of Paltan Bazar, we pride ourselves on offering the most advanced projection technology, premium sound systems, and luxurious seating - all centered around our signature curved screen that sets us apart from any other cinema in the region.</p>
      </motion.div> */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{textAlign:'center'}}
      >
        GALLERY
      </motion.h2>
      <motion.div
        className="grid"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_1.jpg" alt="Curved Screen" loading="lazy" />
          {/* <div className="card-content">
            <h3>Curved Screen Technology</h3>
            <p>The only curved screen in Guwahati for an unmatched immersive cinematic experience.</p>
          </div> */}
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_2.jpg" alt="Dolby Sound" loading="lazy" />
          {/* <div className="card-content">
            <h3>Dolby Atmos Sound</h3>
            <p>World-class Dolby Atmos surround sound for crystal clear audio from every angle.</p>
          </div> */}
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_3.jpg" alt="Premium Seats" loading="lazy" />
          {/* <div className="card-content">
            <h3>Luxury Recliner Seats</h3>
            <p>Premium reclining seats with ample legroom for ultimate comfort during long movies.</p>
          </div> */}
        </motion.div>
      </motion.div>
 <motion.div
        className="grid"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_4.jpeg" alt="Curved Screen" />
          {/* <div className="card-content">
            <h3>Curved Screen Technology</h3>
            <p>The only curved screen in Guwahati for an unmatched immersive cinematic experience.</p>
          </div> */}
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_5.jpeg" alt="Dolby Sound" />
          {/* <div className="card-content">
            <h3>Dolby Atmos Sound</h3>
            <p>World-class Dolby Atmos surround sound for crystal clear audio from every angle.</p>
          </div> */}
        </motion.div>
        <motion.div className="card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <img src="gallery_6.jpeg" alt="Premium Seats" />
          {/* <div className="card-content">
            <h3>Luxury Recliner Seats</h3>
            <p>Premium reclining seats with ample legroom for ultimate comfort during long movies.</p>
          </div> */}
        </motion.div>
      </motion.div>
      {/* <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">2</p>
          <p>Premium Audis</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">400+</p>
          <p>Luxury Seats</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">#1</p>
          <p>Curved Screen in Guwahati</p>
        </motion.div>
      </motion.div> */}

      {/* <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Find Us
      </motion.h2>

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
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
          src="https://www.google.com/maps?q=Grande+Cines+Paltan+Bazar+Guwahati&output=embed"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div> */}
    </motion.div>
  );
}

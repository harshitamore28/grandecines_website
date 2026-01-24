
import { motion } from "framer-motion";

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Jerico",
      type: "Corporate Event",
      quote: "We booked Grande Cines for our annual company gathering and it was an unforgettable experience! The curved screen made our presentation look spectacular, and the team was incredibly professional. Highly recommend for corporate events!",
      rating: 5,
    },
    {
      name: "JCI Guwahati",
      type: "Leadership Summit",
      quote: "JCI Guwahati organized our Leadership Summit at Grande Cines. The premium facilities, Dolby Atmos sound, and comfortable seating made it perfect for our 150+ members. The staff went above and beyond to accommodate our needs.",
      rating: 5,
    },
    {
      name: "Lions Club",
      type: "Charity Screening",
      quote: "We hosted a charity movie screening for underprivileged children at Grande Cines. The management was extremely supportive and provided excellent service. The kids were amazed by the curved screen experience!",
      rating: 5,
    },
    {
      name: "Marwari Yuva Manch",
      type: "Community Celebration",
      quote: "Marwari Yuva Manch booked the entire hall for a special community movie night. From booking to execution, everything was seamless. The curved screen technology and luxury seating made it a memorable event for all our members.",
      rating: 5,
    },
  ];

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Testimonials</h1>
      <p>Hear from organizations who trusted Grande Cines for their special events</p>

      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>Trusted by Leading Organizations</h3>
        <p>Grande Cines has been the preferred venue for corporate events, community gatherings, and private screenings. Our curved screen technology and premium amenities make every event special.</p>
      </motion.div>

      <motion.div
        className="grid"
        style={{ marginTop: '30px' }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="card"
            variants={bounceVariants}
            whileHover={{ scale: 1.03 }}
            style={{ background: 'rgba(255, 255, 255, 0.9)' }}
          >
            <div className="card-content" style={{ padding: '25px' }}>
              <div style={{ fontSize: '2em', marginBottom: '10px', color: '#f5c518' }}>❝</div>
              <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
                {testimonial.quote}
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', marginTop: '15px' }}>
                <h3 style={{ color: '#1a1a2e', marginBottom: '5px' }}>{testimonial.name}</h3>
                <p style={{ color: '#f5c518', fontWeight: 'bold', fontSize: '0.9em' }}>{testimonial.type}</p>
                <div style={{ marginTop: '10px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#f5c518', fontSize: '1.2em' }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">50+</p>
          <p>Corporate Events</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">100%</p>
          <p>Satisfaction Rate</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">5000+</p>
          <p>Happy Guests</p>
        </motion.div>
      </motion.div>

      {/* Brands Which Love Us Section */}
      <motion.div
        style={{ marginTop: '50px', textAlign: 'center' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: '10px' }}>Brands Which Love Us</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Trusted partners who make your cinema experience even better</p>

        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            alignItems: 'center',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
          }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { name: 'Dolby', icon: '🔊' },
            { name: 'Sony Pictures', icon: '🎬' },
            { name: 'Warner Bros', icon: '🎥' },
            { name: 'Universal', icon: '🌍' },
            { name: 'Pepsi', icon: '🥤' },
            { name: 'Dominos', icon: '🍕' },
            { name: 'Samsung', icon: '📺' },
            { name: 'BookMyShow', icon: '🎟️' },
          ].map((brand, index) => (
            <motion.div
              key={index}
              variants={bounceVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 30px',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                borderRadius: '10px',
                minWidth: '120px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}
            >
              <span style={{ fontSize: '2.5em', marginBottom: '10px' }}>{brand.icon}</span>
              <span style={{ color: '#f5c518', fontWeight: 'bold', fontSize: '0.9em' }}>{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRightVariants}
        viewport={{ once: true }}
      >
        <h3>Book for Your Organization</h3>
        <p>Planning a corporate event, community gathering, or private screening? Grande Cines offers:</p>
        <p style={{ marginTop: '15px' }}>✓ Full hall booking for private events</p>
        <p>✓ Customized packages for corporate needs</p>
        <p>✓ Premium catering options available</p>
        <p>✓ State-of-the-art AV setup for presentations</p>
        <p>✓ Dedicated event coordinator</p>
      </motion.div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '12px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Want to Host Your Event at Grande Cines?</h3>
        <p>Contact us for bulk booking and corporate event inquiries</p>
        <button style={{ marginTop: '20px' }}>Enquire for Bulk Booking</button>
      </motion.div>
    </motion.div>
  );
}

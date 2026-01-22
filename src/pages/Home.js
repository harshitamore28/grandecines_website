
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://grandecines-backend.onrender.com/api/movies?releaseType=now")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

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
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Welcome to Grande Cines</h1>
        <p style={{ fontSize: '1.3em', marginBottom: '10px' }}>Guwahati's First & Only Curved Screen Cinema</p>
        <p style={{ fontSize: '1.1em', marginBottom: '30px', color: '#666' }}>Experience cinema like never before with cutting-edge technology and ultimate comfort</p>
        <img src="/hall.avif" alt="Movie Theater" />
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
          <p>Audi</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">200+</p>
          <p>Seats Across Halls</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">100%</p>
          <p>Customer Satisfaction</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Now Showing
      </motion.h2>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading movies...</p>
      ) : (
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {movies.map((movie) => (
            <motion.div
              key={movie._id}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={movie.poster} alt={movie.name} />
              <div className="card-content">
                <h3>{movie.name}</h3>
                <p style={{ color: "#f5c518", fontWeight: "bold" }}>Rating: {movie.rating}</p>
                <div className="timings">
                  {movie.timings && movie.timings.map((time, index) => (
                    <span key={index} className="timing-badge">{time}</span>
                  ))}
                </div>
                <button onClick={() => window.open("https://in.bookmyshow.com/cinemas/GUW/grande-cines-paltan-bazar-guwahati/GRCG/", "_blank")}>Book Tickets</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="feature-section"
        style={{ borderLeft: '4px solid #f5c518' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>📽️ Guwahati's Only Curved Screen</h3>
        <p>Experience the magic of movies on our revolutionary curved screen - the first and only one in Guwahati! Our curved screen provides an immersive viewing experience with enhanced depth and uniform picture quality from every seat.</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>🎬 Why Choose Grande Cines?</h3>
        <p>✓ Guwahati's Only Curved Screen Cinema</p>
        <p>✓ World-class Dolby Atmos Sound System</p>
        <p>✓ 4K Projection Technology</p>
        <p>✓ Luxury Reclining Seats with Maximum Comfort</p>
        <p>✓ Premium Food & Beverage Options</p>
        <p>✓ Easy Online Booking & Reserved Seating</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>📍 Find Us</h3>
        <p><strong>Grande Cines</strong></p>
        <p>Paltan Bazar, Guwahati, Assam 781008</p>
        <p>Near Guwahati Railway Station</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <iframe
          title="Grande Cines Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.674!2d91.7468!3d26.1844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5913b4b9a2b1%3A0x4b6c8c3b8c8c8c8c!2sPaltan%20Bazar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}


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
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>WELCOME TO GRANDE CINES</h1>
        <p style={{ fontSize: '1.3em', marginBottom: '10px' }}>Guwahati's First & Only Curved Screen Multiplex</p>
        <p style={{ fontSize: '1.1em', marginBottom: '30px', color: '#666' }}>Experience cinema like never before. <br/> Cutting-edge technology, plush comfortable seating, great food and affordable prices located at the heart of Guwahati city.</p>
        <img src="/hall.avif" alt="Movie Theater" />
      </motion.div>

      {/* Top 3 Rated Badge Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        viewport={{ once: true }}
        style={{
          margin: '40px auto',
          padding: '30px 40px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
          borderRadius: '16px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(245, 197, 24, 0.3)',
          border: '2px solid #f5c518',
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(245,197,24,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(245,197,24,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        <motion.div
          initial={{ rotate: -10, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #f5c518 0%, #ffd700 50%, #f5c518 100%)',
            padding: '15px 30px',
            borderRadius: '50px',
            marginBottom: '20px',
            boxShadow: '0 4px 20px rgba(245, 197, 24, 0.5)',
          }}
        >
          <span style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#1a1a2e' }}>
            🏆 TOP 3 RATED
          </span>
        </motion.div>

        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{ color: 'white', marginBottom: '10px', fontSize: '1.8em' }}
        >
          Comes under 3 Best Movie Theatres in Guwahati, Assam
          <br/>
          <br/>
          <a target="_blank" href="https://threebestrated.in/movie-theatres-in-guwahati-assam" style={{ color: '#f5c518', textDecoration: 'none', marginLeft: '10px' }}>
            View on ThreeBestRated
          </a>
        </motion.h2> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ color: '#ccc', fontSize: '1.1em', marginBottom: '20px' }}
        >
          Proudly ranked among the <a style={{ color: '#f5c518', fontWeight: 'bold' }}target="_blank" href="https://threebestrated.in/movie-theatres-in-guwahati-as">Top 3 Best Rated Movie Theatres</a> in Guwahati
        </motion.p>
      </motion.div>

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">2</p>
          <p>Curved Screens</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">400+</p>
          <p>Seats</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">95%</p>
          <p>Customer Satisfaction</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">20,00,000+</p>
          <p>Smiles and counting</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">Recliner</p>
          <p>Neck pillow</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">Restaurant</p>
          <p>In-house</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">Online</p>
          <p>Ticket Booking</p>
        </motion.div>
        <motion.div className="stat-card" variants={bounceVariants}>
          <p className="number">Food</p>
          <p>Order from Seat</p>
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
          variants={bounceVariants}
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
        // className="feature-section"
        // style={{ borderLeft: '4px solid #f5c518' }}
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeftVariants}
        viewport={{ once: true }}
      >
        <h3>📽️ Guwahati's Only Curved Screen</h3>
        <p>Experience the magic of movies on our revolutionary curved screen - the first and only one in Guwahati! Our curved screen provides an immersive viewing experience with enhanced depth and uniform picture quality from every seat.</p>
         <h3>🎬 Why Choose Grande Cines?</h3>
        <p>✓ Guwahati's Only Curved Screen Cinema</p>
        <p>✓ World-class Dolby Atmos Sound System</p>
        <p>✓ 4K Projection Technology</p>
        <p>✓ Luxury Reclining Seats with Maximum Comfort</p>
        <p>✓ Recliner Neck Pillows for Extra Comfort</p>
        <p>✓ In-house Restaurant & Premium Food Options</p>
        <p>✓ Easy Online Booking & Reserved Seating</p>
      </motion.div>
    </motion.div>
  );
}


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { formatReleaseDate } from "../utils/formatDate";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://grandecines-backend.onrender.com/api/movies?releaseType=upcoming")
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
      <h1>Upcoming Movies</h1>
      <p>Get ready for an exciting lineup of blockbuster releases. Reserve your tickets early for guaranteed seating!</p>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>🎬 Coming Soon to Grande Cines</h3>
        <p>Be the first to experience the most anticipated movies of 2026. Early booking discounts available now!</p>
      </motion.div>

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
                <p style={{ color: '#f5c518', fontWeight: 'bold', marginTop: '10px' }}>Release Date: {formatReleaseDate(movie.release)}</p>
                <button>Notify Me</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">12</p>
          <p>Movies This Month</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">6</p>
          <p>Blockbusters</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <p className="number">Early</p>
          <p>Bird Discount</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

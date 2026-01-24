
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { formatReleaseDate } from "../utils/formatDate";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
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
      fetch("https://grandecines-backend.onrender.com/api/movies?releaseType=upcoming")
      .then((res) => res.json())
      .then((data) => {
        setMoviesUpcoming(data);
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
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
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Now Showing</h1>
      <p>Latest blockbuster movies currently running in our theatres. Enjoy exclusive screenings with premium comfort.</p>

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "2em", marginBottom: "10px" }}>🎬</div>
          <p>Loading movies...</p>
          <p style={{ fontSize: "0.9em", color: "#888", marginTop: "10px" }}>This may take a moment on first load</p>
        </div>
      ) : movies.length === 0 ? (
        <p style={{ textAlign: "center", padding: "40px", color: "#888" }}>No movies currently showing. Check back soon!</p>
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
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={movie.poster} alt={movie.name} />
              <div className="card-content">
                <h3>{movie.name}</h3>
                <p style={{ color: "#f5c518", fontWeight: "bold" }}>{movie.upcomingRelease}</p>
                <button onClick={() => window.open("https://in.bookmyshow.com/cinemas/GUW/grande-cines-paltan-bazar-guwahati/GRCG/", "_blank")}>Book Now</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRightVariants}
        viewport={{ once: true }}
      >
        <h3>🎭 Special Offers</h3>
        <p>✓ Group bookings available for corporate events</p>
      </motion.div>
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
              initial="hidden"
              whileInView="visible"
              variants={slideFromLeftVariants}
              viewport={{ once: true }}
            >
              <h3>🎬 Coming Soon to Grande Cines</h3>
              <p>Be the first to experience the most anticipated movies of 2026!</p>
            </motion.div>
      
            {loading ? (
              <div style={{ textAlign: "center", padding: "40px" }}>
                <div style={{ fontSize: "2em", marginBottom: "10px" }}>🎬</div>
                <p>Loading upcoming movies...</p>
              </div>
            ) : moviesUpcoming.length === 0 ? (
              <p style={{ textAlign: "center", padding: "40px", color: "#888" }}>No upcoming movies at the moment. Stay tuned!</p>
            ) : (
              <motion.div
                className="grid"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                {moviesUpcoming.map((movie) => (
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
              <motion.div className="stat-card" variants={bounceVariants}>
                <p className="number">12</p>
                <p>Movies This Month</p>
              </motion.div>
              <motion.div className="stat-card" variants={bounceVariants}>
                <p className="number">6</p>
                <p>Blockbusters</p>
              </motion.div>
            </motion.div>
          </motion.div>
    </motion.div>
  );
}

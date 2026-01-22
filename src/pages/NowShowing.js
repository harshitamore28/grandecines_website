
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NowShowing() {
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
      <h1>Now Showing</h1>
      <p>Latest blockbuster movies currently running in our theatres. Enjoy exclusive screenings with premium comfort.</p>

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>🎭 Special Offers</h3>
        <p>✓ Book 2 tickets, get 1 snack combo free</p>
        <p>✓ Couple packages with special pricing</p>
        <p>✓ Group bookings available for corporate events</p>
        <p>✓ VIP lounge access for premium seats</p>
      </motion.div>
    </motion.div>
  );
}

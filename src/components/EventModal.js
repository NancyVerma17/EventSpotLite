import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => (
  <motion.div
    className="modal-backdrop"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
    >
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <img src={event.image} alt={event.name} />
      <button onClick={onClose}>Close</button>
    </motion.div>
  </motion.div>
);

export default EventModal;

import { motion } from 'framer-motion';


const LandingContainer = () => {
  return (
    <motion.div className="landing-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <header className="header">
      <motion.code className="welcome-message" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ textTransform: 'uppercase' }}>
          SOFTWARE ENGINEER & UX/UI DESIGNER.
          <hr />
        </motion.code>
        <motion.code initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
          For social accounts & resume, please visit footer.
        </motion.code>
      </header>
    </motion.div>
  );
};

export default LandingContainer;
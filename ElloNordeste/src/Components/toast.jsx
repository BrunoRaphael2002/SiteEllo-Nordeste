import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 z-[9999]"
        >
          <CheckCircle size={22} />
          <p className="font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

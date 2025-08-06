import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
            {/* Looping bounce effect on 404 */}
            <motion.h1
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="text-6xl sm:text-8xl font-extrabold tracking-tight text-gray-200 mb-4"
            >
                404
            </motion.h1>

            {/* Subtext animation */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl sm:text-2xl text-gray-400 mb-6 text-center"
            >
                Oops! The page you're looking for doesn't exist.
            </motion.p>

            {/* Button animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
                >
                    Go to Homepage
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;

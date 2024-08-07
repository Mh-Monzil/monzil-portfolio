import React from 'react';
import {motion} from 'framer-motion';

const PageTransition = () => {
    return (
        <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-dark'
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        exit={{x: ["0%", "100%"], width: ["0%", "100%"]}}
        transition={{duration: 0.6, ease: "easeIn"}}
        ></motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-white'
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay:0.2, duration: 0.6, ease: "easeIn"}}
        ></motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary'
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay:0.4, duration: 0.6, ease: "easeIn"}}
        ></motion.div>
        </>
    );
};

export default PageTransition;


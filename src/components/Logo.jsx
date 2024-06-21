'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center  '>
            <MotionLink href={'/'} 
            className='w-14 h-14 p-2 text-light ring-2 ring-primary flex items-center justify-center rounded-full text-2xl font-bold ' 
            whileHover={{scale:1.1}}
            >Mh.</MotionLink>
        </div>
    );
};

export default Logo;
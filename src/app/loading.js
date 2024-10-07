'use client'

import Banner from '@/components/Banner';
import BannerSkeleton from '@/components/BannerSkeleton';
import React, { useState, useEffect } from 'react';
 // Import the skeleton loader
 // Import the actual component

const BannerWithLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request or a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds delay for demonstration

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? <BannerSkeleton /> : <Banner />;
};

export default BannerWithLoader;

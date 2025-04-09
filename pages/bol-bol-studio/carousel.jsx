'use client'
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
// import App from "next/app";

// App.displayName = 'bol-bol-studio';

// eslint-disable-next-line react/display-name
const Carousel = forwardRef(({ children }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFirst = () => {
        setCurrentIndex(0);
        updateHistory(0);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % children.length;
        setCurrentIndex(newIndex);
        updateHistory(newIndex);
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        updateHistory(newIndex);
    };

    // Update browser history with the current slide index
    const updateHistory = (index) => {
        window.history.pushState({ index }, '', `?slide=${index}`);
    };

    // Listen for popstate events to handle back/forward navigation
    useEffect(() => {
        const handlePopState = (event) => {
            const index = event.state?.index ?? 0;
            setCurrentIndex(index);
        };

        window.addEventListener('popstate', handlePopState);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    // Initialize current index from URL on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const slideIndex = parseInt(params.get('slide'), 10);
        if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < children.length) {
            setCurrentIndex(slideIndex);
        }
    }, [children]);

    // Expose the next and previous functions to the parent component
    useImperativeHandle(ref, () => ({
        next: handleNext,
        prev: handlePrev,
        first: handleFirst,
    }));

    return (
        <div className="relative w-full overflow-hidden border border-gray-700 bg-gray-800">

            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {children.map((child, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        {child}
                    </div>
                ))}
            </div>

        </div>
    );
});

export default Carousel;

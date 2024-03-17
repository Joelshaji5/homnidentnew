"use client"
import React, { useRef, useEffect } from 'react';
import "../../Style/vedioPage.css";

function VedioBg() {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0 // Trigger when any part of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the video section is in view, play the video
          videoRef.current.play();
        } else {
          // If the video section is not in view, pause the video
          videoRef.current.pause();
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vedioContainer">
      <div className="vedioDiv">
        <video ref={videoRef} className="videoElement" autoPlay muted loop>
          <source src="/homnident YT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VedioBg;

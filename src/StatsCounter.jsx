import React, { useEffect, useRef, useState } from 'react';
import './StatsCounter.css';

const StatsCounter = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState({ students: 0, speakers: 0, activities: 0 });
  const statsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateStats = () => {
    const targetStats = { students: 1000, speakers: 12, activities: 30 };
    const duration = 2000;
    const frameRate = 20;
    const steps = duration / frameRate;

    let stepCount = 0;

    const counter = setInterval(() => {
      stepCount++;
      setStats({
        students: Math.floor((targetStats.students / steps) * stepCount),
        speakers: Math.floor((targetStats.speakers / steps) * stepCount),
        activities: Math.floor((targetStats.activities / steps) * stepCount),
      });

      if (stepCount >= steps) {
        clearInterval(counter);
        setStats(targetStats);
      }
    }, frameRate);
  };

  return (
    <div className="stats-section" ref={statsRef}>
      <div className="stat-item">
        <div className="stat-value">{stats.students}+</div>
        <div className="stat-label">Students</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{stats.speakers}+</div>
        <div className="stat-label">Speakers</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{stats.activities}+</div>
        <div className="stat-label">Activities</div>
      </div>
    </div>
  );
};

export default StatsCounter;

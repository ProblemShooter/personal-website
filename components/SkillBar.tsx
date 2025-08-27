import React, { useState, useRef, useEffect } from 'react';
import type { Skill } from '../types';

interface SkillBarProps {
    skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
    const { name, level } = skill;
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="w-full">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-300">{name}</span>
                <span className="text-sm font-medium text-blue-400">{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                    style={{
                        width: inView ? `${level}%` : '0%',
                        transition: 'width 1.5s ease-in-out',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
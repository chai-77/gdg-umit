import React, { useEffect, useRef, useState } from 'react'
import MonthCard from './MonthCard'

const Upcoming = () => {
    const months = [
        { month: "FEB", count: "0", color: "text-gdg-blue" },
        { month: "MAR", count: "0", color: "text-gdg-red" },
        { month: "APR", count: "0", color: "text-gdg-yellow" },
    ]

    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect() // animate only once
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className='bg-gdg-black-extra-dark py-32 relative overflow-hidden'>
            <style>{`
                    @keyframes slideIn {
                        0% {
                            opacity: 0;
                            transform: translate3d(0, 24px, 0);
                        }
                        100% {
                            opacity: 1;
                            transform: translate3d(0, 0, 0);
                        }
                    }
                `}</style>

            <div
                ref={sectionRef}
                className='max-w-7xl mt-30 mx-auto px-6 font-mono text-white'
            >
                <div className="px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg border-y border-r border-white/10">
                    <div className="upcoming-top mb-8">
                        <h2 className='text-3xl md:text-5xl font-black tracking-tighter mb-2 uppercase italic'>
                            What's Coming
                        </h2>
                        <p className="text-sm md:text-lg text-white/50 font-light">
                            Mark your calendars!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {months.map((item, idx) => (
                            <MonthCard
                                key={idx}
                                {...item}
                                index={idx}
                                animate={visible}
                            />
                        ))}
                    </div>

                    <div className="mt-12 sm:mt-16 text-center">
                        <p className="text-white/70 text-base sm:text-lg md:text-xl mb-6 font-light">
                            No events scheduled yet. But we're planning something amazing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming

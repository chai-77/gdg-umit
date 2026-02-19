import React from 'react'

const MonthCard = ({ month, count, color, index, animate }) => {
    return (
        <div
            className={`
                group relative h-full
                will-change-transform will-change-opacity
                ${animate ? 'animate-slide-in' : 'opacity-0'}
            `}
            style={{
                animationDelay: `${index * 180}ms`,
            }}
        >
            <div
                className={`
                    flex flex-col justify-between
                    h-full
                    border-t-4 ${color}
                    bg-gdg-black-dark
                    px-6 py-8 md:px-8 md:py-10
                    transition-all duration-300
                    hover:bg-gdg-black hover:shadow-2xl
                `}
            >
                <div className="flex flex-col gap-3">
                    <div className={`text-4xl md:text-5xl font-black ${color}`}>
                        {month}
                    </div>
                    <div className="text-white/60 text-base md:text-lg font-light">
                        {count} upcoming events
                    </div>
                </div>

                {/* <div className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-current to-transparent" /> */}
                <div className={`
                                mt-6 h-1 w-0 
                                /* Use the text color of the parent (the blue/red/yellow) */
                                bg-current 
                                transition-[width] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]
                                group-hover:w-full 
                            `} />
            </div>
        </div>
    )
}

export default MonthCard

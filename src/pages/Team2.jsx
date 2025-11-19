import React, { use, useRef } from 'react'
import MemberCard from '../components/team/MemberCard.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Team = () => {
    const FronTextRef = useRef(null);
    const BehindDivRef = useRef(null);
    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        FronTextRef.current.style.height = '0%'
    };


    const handleMouseLeave = () => {
       FronTextRef.current.style.height = '100%'
    };


    return (
        <div id='team-container' className='team-container  pt-90  bg-black/95 '>

            <div id='all-rows' className='all-rows'>


                <div className='all-rows-row flex justify-center bg-amber-300 py-4'>
                    <div className='row-front flex flex-row gap-20 items-center '>

                        <div className=' flex flex-col gap-10 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div ref={FronTextRef} className='bg-pink-300'>
                                <h1 className='font2 text-center font-medium text-[#ffffff] text-[8vw]'>Technical Team</h1>
                            </div>


                            <div
                                ref={BehindDivRef}
                                className="row-behind hidden overflow-hidden h-full"
                            >
                                <div
                                    ref={marqueeRef}
                                    className="flex flex-row gap-4 whitespace-nowrap"
                                >
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                </div>
                            </div>
                        </div>



                        <div className=' flex flex-row gap-4'>
                            <MemberCard />
                            <MemberCard />
                        </div>

                    </div>


                </div>


            </div>

<div className='w-screen h-screen bg-red-500'>

</div>
        </div>
    )
}

export default Team

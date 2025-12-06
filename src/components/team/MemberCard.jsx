import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MemberCard = () => {
  return (
    <div className='w-1/3 h-full border-2 cursor-pointer border-white rounded-[5px] mx-2 text-center flex flex-col justify-center items-center'>
        <div className="circle w-[10em] h-[10em] rounded-full bg-white mt-1">
            <div className="img-div">
                <img src="" alt="" className="w-full h-full object-cover"  />
            </div>
        </div>
    
    <div className="info">
        <div className="name-div font-bold text-xl mt-1">
            <h1>Sugunaveni suryavanshi</h1>
        </div>
        <div className="position-div font-semibold">
            <h2>co lead</h2>
        </div>
    </div>

      
    </div>
  )
}

export default MemberCard;
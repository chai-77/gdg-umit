import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/home/Hero'
import Upcoming from "../components/home/Upcoming";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import MediumPreview from "../components/home/MediumPreview";

const Home = () => {
  return (
    <div >
<Hero/>

<Upcoming/>
<About/>
<FAQ/>
<MediumPreview/>
     

    </div>
  );
};


export default Home;

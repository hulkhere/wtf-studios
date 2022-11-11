import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import OurWork from "../components/our-work";
import Works from "../components/works";
import Quote from "../components/quote";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import MarqueeOne from "../components/marquee-one";
import WtfRuchitRed from "../components/svgs/wtf-ruchit-red";
import Glimpse from "../components/glimpse";

export default function Home(){
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div>
      <Head>
      </Head>
      <Glimpse />
      {/* <MarqueeOne /> */}
      {/* <Header/>
      <Hero textEnter={textEnter} textLeave={textLeave} />
      <OurWork textEnter={textEnter} textLeave={textLeave} />
       <div className="p-12">
        <Works  textEnter={textEnter} textLeave={textLeave}/>
      </div>
      <Quote />
      <Footer />
      <Cursor backgroundColor="#B7D500" cursorVariant={cursorVariant} /> */}
    </div>
  );
}

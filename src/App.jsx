import React, { useEffect, useRef } from "react";
import InvitationSectionOne from "./components/InvitationSectionOne";
import InvitationSectionTwo from "./components/InvitationSectionTwo";
import InvitationSectionThree from "./components/InvitationSectionThree";
import audio from "./bg-music.mp3";

export default function App(){

    const audioRef = useRef(null);

    useEffect(() =>{
        audioRef.current.play().catch(
            (error) => {console.error("Error playing audio", error);}
        );
    },[]);

    return(
        <div className="invitation-container">
            <InvitationSectionOne />
            <InvitationSectionTwo />
            <InvitationSectionThree />
            <audio ref={audioRef} src={audio} autoPlay />
        </div>
    );
}
import React from "react";
import InvitationSectionOne from "./components/invitationSectionOne";
import InvitationSectionTwo from "./components/InvitationSectionTwo";
import InvitationSectionThree from "./components/InvitationSectionThree";

export default function App(){

    return(
        <div className="invitation-container">
            <InvitationSectionOne />
            <InvitationSectionTwo />
            <InvitationSectionThree />
        </div>
    );
}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainBTN from "../files/Images/mainBTN.png";
import MainBTN2 from "../files/Images/mainBTN2.png";
import deltaruneBTN from "../files/Images/deltaruneBTN.png"
import deltaruneBTN2 from "../files/Images/deltaruneBTN2.png"
import undertaleBTN from "../files/Images/undertaleBTN.png"
import undertaleBTN2 from "../files/Images/undertaleBTN2.png"

function DRButtons() {

    const buttons = [
        { link: "http://localhost:3000", img1: MainBTN, img2: MainBTN2 },
        { link: "http://localhost:3000/Undertale", img1: undertaleBTN, img2: undertaleBTN2 },
        { link: "http://localhost:3000/Deltarune", img1: deltaruneBTN, img2: deltaruneBTN2 }]

    return (
        <div id="buttons" style={{ position: "fixed", zIndex: "10000", margin: "-10px" }}>
            <center>
                <ul style={{ listStyleType: "none" }}>
                    {buttons.map((elem) =>
                    (<li>
                        <Link to={elem.link}>
                            <img
                                src={elem.img1}
                                style={{ width: "60px" }}
                                onMouseEnter={(e) => { e.currentTarget.src = elem.img2 }}
                                onMouseLeave={(e) => { e.currentTarget.src = elem.img1 }}
                            />
                        </Link>
                    </li>))}
                </ul>
            </center>
        </div>
    );
}

export default DRButtons;


//
// banner.tsx
//

import "./banner.css";
import Logo from "./assets/logo.svg";

//
//

export default () => {
    return (
        <>
            <div id="banner">
                <div id="left"></div>
                <div id="content">
                    <div id="logo">
                        <img src={Logo} />
                    </div>
                    <div id="name">
                        GONZO
                        <br />
                        SOLUTIONS
                    </div>
                    <div id="slogan">
                        WE PUT THE HUMAN BACK IN THE LOOP
                    </div>
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
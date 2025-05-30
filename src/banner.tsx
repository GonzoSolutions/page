//
// banner.tsx
//

import "./banner.css";
import Logo from "./assets/logo.svg";

//
//

export default () => {
    const slogan = "WE PUT HUMANS BACK IN THE LOOP";
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
                        {slogan}
                    </div>
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
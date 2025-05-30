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
                    <img src={Logo} />
                    <div>
                        Gonzo
                        Solutions
                    </div>
                    <div>
                        We put the human back in the loop
                    </div>
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
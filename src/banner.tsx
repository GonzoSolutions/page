//
// banner.tsx
//

import * as React from 'react';

//
//

import "./banner.css";
import Logo from "./assets/logo.svg";

//
//

export default () => {
    return (
        <>
            <banner>
                <left></left>
                <content>
                    <img src={Logo} />
                    <div>
                        Gonzo
                        Solutions
                    </div>
                    <div>
                        We put the human back in the loop
                    </div>
                </content>
                <right></right>
            </banner>
        </>
    )
};
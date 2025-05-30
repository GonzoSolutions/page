//
// team.tsx
//

import "./team.css";

//
//

export default () => {
    return (
        <>
            <div id="team">
                <div id="left"></div>
                <div id="content">
                    <div className="member">
                        <div id="picture">
                            <img src="/pictures/employees/001.png" />
                        </div>
                        <div id="name">
                            TORVALD ASK
                        </div>
                        <div id="title">
                            DIRECTOR
                        </div>
                    </div>
                    <div className="member">
                        <div id="picture">
                            <img src="/pictures/employees/002.png" />
                        </div>
                        <div id="name">
                            ERIK BJØRNØY
                        </div>
                        <div id="title">
                            DIRECTOR
                        </div>
                    </div>
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
//
// team.tsx
//

import "./team.css";

//
//

export default () => {
    const members = [
        { id: 0, name: { first: "torvald", last: "ask" }, title: "director" },
        { id: 1, name: { first: "erik", last: "bjørnøy" }, title: "director" }
    ]
    return (
        <>
            <div id="team">
                <div id="left"></div>
                <div id="content">
                    {
                        members.map(
                            (member) =>
                                <div className="member">
                                    <div id="picture">
                                        <img src={`/pictures/employees/${member.id}.png`} />
                                    </div>
                                    <div id="name">
                                        {member.name.first} {member.name.last}
                                    </div>
                                    <div id="title">
                                        {member.title}
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
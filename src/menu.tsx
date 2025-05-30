//
// menu.tsx
//

import "./menu.css";

//
//

export default () => {
    const sections = [
        { id: 0, name: "goals" }, 
        { id: 1, name: "services" }, 
        { id: 2, name: "projects" }, 
        { id: 3, name: "articles" }, 
        { id: 5, name: "tools" }, 
        { id: 6, name: "products" }, 
    ]
    return (
        <div id="menu">
            <div id="left"></div>
            <div id="content">
                <ul>
                    {sections.map(
                        (section) => <li> <a href="#"> {section.name} </a> </li>
                    )}
                </ul>
            </div>
            <div id="right"></div>
        </div>
    )
};
//
// desc.tsx
//

import "./desc.css";

//
//

export default () => {
    const text = "Systems fail because they forget people. At Gonzo Solutions, we understand that there is no one-size-fits-all when it comes to addressing the human factor in an organization. Every organization is unique. Our secret sauce is the lessons learned from many years of solving technical and human problems in both industry and academia. We understand technology. We understand system integration. We understand security. We understand humans. The Gonzo approach is polished when it counts and unapologetic when it matters. No more patch jobs on soul-level issues; we put humans back in the loop.";
    return (
        <>
            <div id="desc">
                <div id="left"></div>
                <div id="content">
                    {text}
                </div>
                <div id="right"></div>
            </div>
        </>
    )
};
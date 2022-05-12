import React from "react";

const html = "<p>가나다라</p>";

const Main = () => {
    return (
        <div dangerouslySetInnerHTML={{__html:html}}></div>
    );
}

export default Main;
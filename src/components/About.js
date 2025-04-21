import React from "react";

function About({image, about = "https://via.placeholder.com/215"}) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;
import React from "react";

const getReadEmojis = (minutes) => {
    return minutes < 30
    ? '☕️'.repeat(Math.ceil(minutes /5))+ ` ${minutes} min read.`
    : '🍱'.repeat(Math.ceil(minutes /10))+ ` ${minutes} min read.`;
};

function Article({title, date = "January 1, 1970", preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}  • {getReadEmojis(minutes)}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
import React from "react";
import Title from "../components/blocks/Title";
import Body from "../components/blocks/Body";

function buildBlock(item) {
    switch (item.component) {
        case "Title":
            return (
                <Title content={item.content} />
            )
        case "Body":
            return (
                <Body content={item.content} />
            )
        default:
            return (
                <Body content={item.content} />
            )
    }
}

export default buildBlock;
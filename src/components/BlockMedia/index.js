import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container } from '../ui';

export default function BlockMedia ({ data }){
    const isVideo = data.file?.mime.startsWith("video")
    return (
        <Container>
            {isVideo ? (
            <p>TODO video</p>
        ) : (
            <GatsbyImage
                image={getImage(data.file?.localFile)}
                alt={data.file?.alternativeText}
            />
        )}
        </Container>
    );
};
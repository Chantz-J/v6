import * as React from "react";
import { Section, Container, Flex, Subhead, Link } from "../ui"
import { synopsisStyle } from "./index.css";

export default function Synopsis () {
    return (
        <Section>
            <Container>
                <Flex variant="responsive">
                    <Subhead>
                        So you want to know <Link to={'/'} className={synopsisStyle}>about</Link> me?
                        I am a web engineer based in Central Florida.
                        A brief stunt in IT administration brought me to web development. I'm passionate about front end API design,
                        and neat UI aiming for clean user experience.
                    </Subhead>
                </Flex>
            </Container>
        </Section>
    )
}
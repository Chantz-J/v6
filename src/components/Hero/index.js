import * as React from "react";
import { Section, Container, Flex, Subhead, Heading, Nudge, } from "../ui";
import { gradientCircle } from "./index.css";

export default function Hero () {
    return (
        <Section>
            <Container>
                <Flex variant={"responsive"}>
                    <Container className={gradientCircle} />
                    <Nudge />
                    <Container>
                        <Heading>
                             Hello, I am Chantz and I enjoy building things that live on the internet.
                        </Heading>
                        <Subhead>
                            Chantz is a front-end developer & project manager based in Florida.
                        </Subhead>
                    </Container>
                </Flex>
            </Container>
        </Section>
    );
}; 
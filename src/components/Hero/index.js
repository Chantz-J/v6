import * as React from "react";
import { Section, Container, Flex, Subhead, Heading } from "../ui";
import { consumeViewportHeight, gradientCircle } from "./index.css";

export default function Hero () {
    return (
        <Section >
            <Container /*className={consumeViewportHeight}*/>
                <Flex gap={4} variant="columnStart">
                    {/* <Heading>
                        Hello, I am Chantz and I enjoy building things that <br /> live on the internet.
                    </Heading> */}
                    <Heading>
                    Chantz enjoys building web experiences where creativity meets technology.
                    </Heading>
                </Flex>
            </Container>
        </Section>
    );
}; 
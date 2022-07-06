import * as React from "react";
import { Section, Container, Flex, Subhead, Link, Button } from "../ui"
import { synopsisStyle } from "./index.css";

export default function Synopsis () {
    return (
        <Section>
            <Container>
                <Flex variant="column">
                    <Subhead>
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </Subhead>
                    <Button variant="primary" to={'/contact'}>Say Hello</Button>
                </Flex>
            </Container>
        </Section>
    )
}
import * as React from "react";
import { Section, Container, Flex, Heading, Space, Kicker, Subhead } from "../ui";

export default function ContactHero () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="columnStart">
                    <Kicker>Contact</Kicker>
                    <Subhead as="h1">
                        Feel free to get in touch! <br />
                        I happily answers all types of inquiries.
                    </Subhead>
                </Flex>
            </Container>
        </Section>
    );
};
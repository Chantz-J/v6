import * as React from "react";
import { Section, Container, Flex, Heading } from "../ui";

export default function ContactHero () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Heading as="h1">
                        Feel free to get in touch! <br />
                        I happily answers all types of inquiries.
                    </Heading>
                </Flex>
            </Container>
        </Section>
    );
};
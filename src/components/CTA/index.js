import * as React from "react";
import { Section, Container, Flex, Subhead, Kicker, Heading, Button } from "../ui";

export default function CTA () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="columnCenter">
                    <Kicker>
                        Drop a Line
                    </Kicker>
                    <Heading as="h2">
                        Chantz is always looking for new opportunities and happily answers all types of inquiries.
                    </Heading>
                    <Button variant="secondary">Get in touch</Button>
                </Flex>
            </Container>
        </Section>
    );
};
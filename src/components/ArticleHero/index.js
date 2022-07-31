import * as React from "react";
import { Section, Container, Flex, Subhead, Kicker } from "../ui";

export default function ArticleHero () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="columnStart">
                    <Kicker>Article & Blog</Kicker>
                    <Subhead as="h2">
                        Opinion pieces and writings on personal endeavors.
                    </Subhead>
                </Flex>
            </Container>
        </Section>
    );
};
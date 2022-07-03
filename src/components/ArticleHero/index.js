import * as React from "react"
import { Section, Container, Flex, Space, Heading, Subhead } from "../ui"

export default function ArticleHero () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Heading as="h1">
                        Articles
                    </Heading>
                    <Space />
                    <Subhead as="h2">
                        Opinion pieces and writings on personal endeavors.
                    </Subhead>
                </Flex>
            </Container>
        </Section>
    )
}
import * as React from "react"
import { Section, Container, Flex, Space, Heading, Subhead, Button } from "../ui"

export default function Hero () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Heading as="h1">
                        I think web experiences should be simple to interact with, and the code should be easy to approach.
                    </Heading>
                    <Space />
                    <Subhead as="h2">
                       If coding is a form of lanaguage, then it needs to be capable of being understood.
                    </Subhead>
                </Flex>
            </Container>
        </Section>
    )
}
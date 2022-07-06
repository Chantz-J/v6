import * as React from "react"
import { Section, Container, Flex, Space, Heading, Subhead, Button } from "../ui"
import { Linkedin, GitHub, Codepen, } from 'react-feather'

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
                <Flex gap={4} variant="responsive">
                    <Button variant="link" to={'https://www.linkedin.com/in/chantzjohnson/'}>
                        <Linkedin />
                    </Button>
                    <Button variant="link" to={'https://github.com/Chantz-J'} >
                        <GitHub />
                    </Button>
                    <Button variant="link" to={'https://codepen.io/Moon_River'}>
                        <Codepen />
                    </Button>
                </Flex>
            </Container>
        </Section>
    )
}
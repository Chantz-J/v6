import * as React from "react";
import { Section, Container, Flex, Button, Text } from "../ui";

export default function CTA () {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="columnStart">
                    <Text variant="lead">
                        Drop a Line
                    </Text>
                    <Text variant="body">
                        Henrik is a front-end developer and
                        multi-disciplinary designer.<br /> Web and graphic design led him to front-end development where he has specialised. <br /> 
                        He's passionate about architecture, structure and accessibility and neat looking websites.
                    </Text>
                    <Button variant="secondary">Get in touch</Button>
                </Flex>
            </Container>
        </Section>
    );
};
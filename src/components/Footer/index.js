import * as React from "react";
import { Container, Flex, Box, Text, Subhead, Button } from "../ui";
import { Linkedin, GitHub, Codepen, } from "react-feather";
import { footerLinkSpacing, footerOutro } from "./index.css";
import { footerBorder } from "./index.css";

export default function Footer () {
    return (
        <Box as="footer" className={footerBorder}>
            <Container>
                <Flex variant="responsive" className={footerLinkSpacing}>
                    <Flex className={footerOutro} variant="columnStart">
                        <Subhead as="h2">
                            Simple digital experiences <br></br> with a human-centered approach.
                        </Subhead>
                        <Text>
                            © 2022 Chantz Johnson. All rights reserved
                        </Text>
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
                </Flex>
            </Container>
        </Box>
    );
  };
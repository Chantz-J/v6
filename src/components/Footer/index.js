import * as React from "react";
import { Container, Flex, Box, Text, Subhead } from "../ui"

  import { copyRightSpacing, footerLinkSpacing, footerOutro } from "./index.css";

  import { footerBorder } from "./index.css";

  export default function Footer () {
    return (
        <Box as="footer" className={footerBorder}>
            <Container>
                
                <Flex variant="responsive" className={footerLinkSpacing}>

                <Flex variant="spaceEvenly">
                    <Flex gap={4} variant="column">
                        <Text>
                        Home
                        </Text>
                        <Text>
                        About
                        </Text>
                        <Text>
                        Blog
                        </Text>
                        <Text>
                        Contact
                        </Text>
                    </Flex>
                </Flex>

                <Flex variant="spaceEvenly">
                    <Flex gap={4} variant="column">
                        <Text>
                        LinkedIn
                        </Text>
                        <Text>
                        Codepen
                        </Text>
                        <Text>
                        Github
                        </Text>
                        <Text>
                        Buy Me a Coffee
                        </Text>
                    </Flex>
                </Flex>
                <Flex variant="spaceEvenly">
                    <Flex gap={4} variant="column">
                        <Text>
                        Privacy Policy
                        </Text>
                        <Text>
                        Sitemap
                        </Text>
                    </Flex>
                </Flex>

                </Flex>

                <Flex className={footerOutro}>
                    <Subhead as="h2">
                        Simple digital experiences <br></br> with a human-centered approach.
                    </Subhead>
                </Flex>

                <Flex className={copyRightSpacing}>
                    <Text>
                        © 2022 Chantz Johnson. All rights reserved
                    </Text>
                </Flex>

            </Container>
        </Box>
    )
  }
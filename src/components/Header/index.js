import * as React from "react";
import { maxWidthForContaniner } from "../BlockQuote/index.css";
import { Section, Container, Flex, Heading, Kicker } from "../ui";

export default function Header ({ article }){
    return (
        <Section>
            <Container>
                <Flex>
                    <Kicker>
                        Published {article.publishedAt && (`${article.publishedAt}`)}
                    </Kicker>
                </Flex>
                <Flex gap={4} variant="columnStart">
                    <Heading as="h1">
                        {article.title}
                    </Heading>
                </Flex>
                {article.description && (
                    <Flex>
                        <Kicker>
                            {article.description}
                        </Kicker>
                    </Flex>
                )}
            </Container>
        </Section>
    );
};
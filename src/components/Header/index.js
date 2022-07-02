import * as React from "react";
import { maxWidthForContaniner } from "../BlockQuote/index.css";
import { Section, Container, Flex, Heading, Subhead, Space } from "../ui";

export default function Header ({ article }){
    return (
        <Section>
            <Container className={maxWidthForContaniner}>
                <Flex gap={4} variant="responsive">
                    <Heading as="h1">
                        {article.title}
                    </Heading>
                    {article.description && (
                        <Subhead as="h2">
                            {article.description}
                        </Subhead>
                    )}
                </Flex>
                <Flex>
                    Published {article.publishedAt && (`${article.publishedAt}`)}
                </Flex>
            </Container>
        </Section>
    );
};
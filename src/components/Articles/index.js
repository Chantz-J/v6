import * as React from "react";
import { Section, Container, Flex } from "../ui"
import Cards from "./cards";
import { makeContainerGrid } from "./index.css";

export default function Articles ({ articles }) {
    return (
        <Section>
            <Container>
                <Flex 
                    gap={4} 
                    variant="responsive" 
                    className={makeContainerGrid}
                >
                    {articles.map((article) => (
                        <Cards 
                            article={article} 
                            key={article.id}
                        />
                    ))}
                </Flex>
            </Container>
        </Section>
    )
}
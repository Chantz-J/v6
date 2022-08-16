import * as React from "react";
import { Section, Container, Flex } from "../ui"
import { cardBox, makeContainerGrid,makeContainerBigGrid, bigCardBox } from "./index.css";
import Cards from "./cards";

export default function Articles ({ articles }) {
    const leftArticlesCount = Math.ceil(articles.length / 5)
    const leftArticles = articles.slice(0, leftArticlesCount)
    const rightArticles = articles.slice(leftArticlesCount, articles.length)
    return (
        <Section>
            <Container>
                <Flex variant="responsiveStart">
                    <Flex 
                        className={makeContainerBigGrid}
                    >
                        {leftArticles.map((article) => (
                            <Cards 
                                article={article} 
                                key={article.id}
                                vanillaClass={bigCardBox}
                            />
                        ))}
                    </Flex>
                    <Flex 
                        className={makeContainerGrid}
                    >
                        {rightArticles.map((article) => (
                            <Cards 
                                article={article} 
                                key={article.id}
                                vanillaClass={cardBox}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
};


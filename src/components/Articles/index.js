import * as React from "react";
import { Section, Container, Flex, Text, Link } from "../ui"
import { cardBox, circleButton, forceNoTextDecoration } from "./index.css";

export default function Articles ({ articles }) {
    const [ card, setCard ] = React.useState(0) // start on the first article
    const { slug, publishedAt, title, description } = articles[card] 
    return (
        <Section>
            <Container>
                <Flex 
                    gap={4} 
                    variant="responsive" 
                    className={cardBox}
                >
                    <Link to={`/article/${slug}`} className={forceNoTextDecoration}>
                        <Container>
                            <Flex variant="columnStart">
                                <Text variant="subheading">{publishedAt}</Text>
                                <Text variant="lead">{title}</Text>
                                <Text variant="body">{description}</Text>
                            </Flex>
                        </Container>
                    </Link>
                    <Flex variant="column">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCard(index)}
                                className={circleButton}
                            ></button>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
};


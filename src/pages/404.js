import * as React from "react";
import Layout from "../layouts/Layout";
import { Section, Container, Flex, Space, Heading, Subhead } from "../components/ui";

const NotFoundPage = () => { 
  return (
    <Layout>
      <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Heading as="h1">
                        404
                    </Heading>
                    <Space />
                    <Subhead as="h2">
                      Sorry 😔 we couldn’t find what you were looking for.
                    </Subhead>
                </Flex>
            </Container>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;

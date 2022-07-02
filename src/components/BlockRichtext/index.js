import React from "react";
import { Container } from '../ui';

export default function BlockRichText ({ data }){
  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </Container>
  );
};


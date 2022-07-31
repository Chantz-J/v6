import React from "react";
import { Container } from '../ui';

export default function BlockRichText ({ data }){
  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
        style={{ lineHeight: '1.5'}}
      />
    </Container>
  );
};


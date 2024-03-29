import * as React from 'react';
import { Container } from '../ui'
import { blockQuoteStyles } from './index.css';

export default function BlockQuote ({ data }){
    return (
        <Container className={blockQuoteStyles}>
             {data.quoteBody}
        </Container>
    );
};
import React from 'react'
import CssInline from './CssInline'
import InternalCss from './InternalCss'
import ExternalCSS from './ExternalCSS'
import { Container } from 'react-bootstrap'


const CSSALL = () => {
    return (
        <Container>
            <CssInline />
            <InternalCss />
            <ExternalCSS />
        </Container>
    )
}

export default CSSALL

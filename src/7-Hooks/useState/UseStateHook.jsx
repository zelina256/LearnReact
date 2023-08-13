import React from 'react'
import FirstHook from './FirstHook'
import Counter from './Counter'
import HideShow from './HideShow'
import Loading from './Loading'
import ArrayHook from './ArrayHook'
import ObjectHook from './ObjectHook'
import { Container } from 'react-bootstrap'

const UseStateHook = () => {
    return (
        <Container>
            <FirstHook />
            <Counter />
            <HideShow />
            <Loading />
            <ArrayHook />
            <ObjectHook />
        </Container>
    )
}

export default UseStateHook

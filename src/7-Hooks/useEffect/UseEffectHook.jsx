import React from 'react'
import Loading from "../useState/Loading";
import CleanFun from "./CleanFun";
import EffectBasic from "./EffectBasic";
import { Container } from "react-bootstrap";
const UseEffectHook = () => {
    return (
        <Container>
            <h1 className="mt-5">useEffect basic</h1>
            <EffectBasic />
            <hr />
            <h1 className="mt-5">useEffect CleanFun</h1>
            <CleanFun />
            <hr />
            <h1 className="mt-5">useEffect FechtDate</h1>
            {/* <FechtDate /> */}
            <hr />
            <h1>Try</h1>
            <Loading />
        </Container>
    )
}

export default UseEffectHook

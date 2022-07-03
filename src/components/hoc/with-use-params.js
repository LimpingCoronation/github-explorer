import React from "react";
import { useParams } from "react-router-dom";

const withUseParams = (Comp) => {
    return (props) => {
        const params = useParams();
        return <Comp { ...props } params={ params } />
    }
}

export default withUseParams;

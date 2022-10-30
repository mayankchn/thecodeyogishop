import React from "react";
import { useContext } from "react";

function withProvider(provider) {
    function combHOC(IncomingComponent) {
        function OutgoingComponent(props) {
            const contextData = useContext(provider)
            return <IncomingComponent {...props} {...contextData} />
        }
        return OutgoingComponent
    }
    return combHOC;
}

export default withProvider

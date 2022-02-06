import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState} = createGlobalState({
    selectedProduct: 0,
    jwt:''
});

export {useGlobalState, setGlobalState};
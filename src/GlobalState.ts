import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    selectedProduct: 0,
    jwt: '',
    isLogedIn: false,
    selectedOutlet: ''
});

export { useGlobalState, setGlobalState };

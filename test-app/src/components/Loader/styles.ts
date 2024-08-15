import styled from 'styled-components';

export const LoaderStyled = styled('div')`
    width: 100%;
    height: 100vh;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 100px;
        height: 100px;
    }
}
`;
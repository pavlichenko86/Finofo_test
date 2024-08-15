import styled from 'styled-components';

export const ErrorStyled = styled('div')`
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

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        border-radius: 8px;
        border: 2px solid red;
        background: #ffffff;
        width: 200px;
        text-align: center;
        
        button {
            padding: 16px;
            border-radius: 4px;
            background: #669ae0;
            color: #ffffff;
            transition: all 0.3s;
            outline: none;
            cursor: pointer;
            min-width: 100px;
            font-size: 16px;
            border: none;
            font-weight: bold;

            &:hover {
                transition: all 0.3s;
                background: #4a89da;
                box-shadow: 0 10px 45px 0 rgba(14, 40, 83, 0.07);
            }
        }
    }
`;
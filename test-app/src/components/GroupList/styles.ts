import styled from 'styled-components';

export const Group = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

export const Wrapper = styled('div')`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 20px;
`;

export const AddButton = styled('button')`
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
`;
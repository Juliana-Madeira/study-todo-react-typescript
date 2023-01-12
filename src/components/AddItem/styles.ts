import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    border: 1px solid #555;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0px;
        border-radius: 5px;
        outline: 0;
        background: transparent;
        color: #CCC;
        font-size: 1em;
        flex: 1;
    }
`;
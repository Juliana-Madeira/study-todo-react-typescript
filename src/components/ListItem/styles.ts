import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done } : ContainerProps)=>(
    `
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #20212C;
        border-radius: 10px;
        margin-bottom: 10px;
        gap: 5px;

        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }

        input {
            width: 18px;
            height: 18px;
        }
    `
));

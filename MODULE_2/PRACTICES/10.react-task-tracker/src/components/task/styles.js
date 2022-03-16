import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const StyledTask = styled.div`
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    border-left: ${({ reminder }) => reminder && "5px solid green"};
`;

export const TaskText = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const XIcon = styled(FaTimes)`
    color: red;
    cursor: pointer;
`;
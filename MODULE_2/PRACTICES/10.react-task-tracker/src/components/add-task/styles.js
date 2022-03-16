import styled from "styled-components";

export const AddForm = styled.form`
    margin-bottom: 40px;
`;

export const FormControl = styled.div`
    margin: 20px 0;
`;

export const FormControlCheck = styled(FormControl)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LabelText = styled.label`
    display: block;
`;

export const LabelCheck = styled(LabelText)`
    flex: 1;
`;

export const InputText = styled.input`
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
`;

export const InputCheck = styled(InputText)`
    flex: 2;
    height: 20px;
`;

export const SubmitButton = styled.input`
    display: block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    width: 100%;
`;
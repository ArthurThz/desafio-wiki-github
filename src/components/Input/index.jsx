import { InputContainer } from "./styles";

const Input = ({ onChange, placeholder }) => {
  return (
    <InputContainer>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;

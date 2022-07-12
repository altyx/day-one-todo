import styled from '@emotion/styled';
import { memo, SyntheticEvent } from 'react';

const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  height: 36px;
  background: #027ad6;
  color: #fff;
  font-weight: 700;
`;

interface Props {
  children: string;
  onClick: (event?: SyntheticEvent) => void;
  type: 'button' | 'submit' | 'reset';
}

const Button = memo(({ children, onClick, type }: Props) => (
  <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
));

export default Button;

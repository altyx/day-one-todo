import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';

const Links = styled(Link)`
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:active, &:visited {
    color: #000;
  }
`;

interface Props {
  children: string | ReactNode,
  path: string;
}

const LinkPath = memo(({ children, path }: Props) => <Links to={path}>{children}</Links>);

export default LinkPath;

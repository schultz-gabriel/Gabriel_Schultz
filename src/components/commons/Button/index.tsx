import React from 'react';
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';
import Link from '../Link';

import { ButtonTypes } from './types';

const ButtonGhost = css`
  color: ${({ theme }) => theme.color};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.primary};
`;

const ButtonWrapper = styled.button<ButtonTypes>`
  border-radius: ${({ theme }) => theme.borderRadius};
  display:flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 5px 5px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  
  ${breakpointMedia({
    xs: css`
    `,
    md: css`
      padding: 3px 10px;
    `,
  })}
  
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

function Button({
  href, children, onClick, ...props
}:ButtonTypes) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper type="button" as={tag} href={href} {...props} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;

import styled from '@emotion/styled';

export const StyledSubCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 16px 16px;
  padding: 1rem;
`;

export const StyledAside = styled.aside`
  background-color: white;
  flex-shrink: 0;
  width: 18.125rem;
`;

export const StyledRightSubCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.functionYellow2};
  flex-grow: 1;
`;

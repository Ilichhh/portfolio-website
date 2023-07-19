import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)<{ color?: string }>`
  display: flex;
  gap: 15px;
  color: ${({ color }) => color};
`;

interface SocialListItemProps {
  icon: React.ElementType;
  link: string;
  description?: string;
  color?: string;
}

export const SocialListItem = ({ icon: Icon, link, description, color }: SocialListItemProps) => {
  return (
    <ListItem>
      <StyledLink to={link} target="_blank" color={color}>
        <Icon fontSize="large" />
        {description}
      </StyledLink>
    </ListItem>
  );
};

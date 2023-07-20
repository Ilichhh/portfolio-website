import React from 'react';

import styled from 'styled-components';
import { StyledLink, LinkIcon } from './common';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
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
      <LinkIcon to={link} target="_blank" color={color}>
        <Icon fontSize="large" />
      </LinkIcon>
      <StyledLink to={link} target="_blank" color={color}>
        {description}
      </StyledLink>
    </ListItem>
  );
};

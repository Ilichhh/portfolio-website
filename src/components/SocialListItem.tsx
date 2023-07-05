import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 15px;
`;

interface SocialListItemProps {
  icon: React.ElementType;
  link: string;
  description: string;
}

export const SocialListItem = ({ icon: Icon, link, description }: SocialListItemProps) => {
  return (
    <ListItem>
      <StyledLink to={link} target="_blank">
        <Icon />
        {description}
      </StyledLink>
    </ListItem>
  );
};

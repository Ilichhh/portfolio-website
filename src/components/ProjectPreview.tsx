import { Link } from 'react-router-dom';
import GithubIcon from '../../public/github.svg';
import LinkIcon from '../../public/link.svg';

import styled from 'styled-components';
import theme from '../theme';

const Screenshot = styled.img`
  width: 600px;
  height: 382px;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 8px 8px ${theme.colors.textDark};
`;

interface ProjectPreviewProps {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  deployUrl: string;
  caseStudyUrl: string;
}

export const ProjectPreview = ({
  name,
  description,
  imageUrl,
  githubUrl,
  deployUrl,
  caseStudyUrl,
}: ProjectPreviewProps) => {
  return (
    <div>
      <Screenshot src={imageUrl} alt="Project preview"></Screenshot>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={githubUrl} target="_blank">
        <img src={GithubIcon}></img>
      </Link>
      <Link to={deployUrl} target="_blank">
        <img src={LinkIcon}></img>
      </Link>
      <Link to={caseStudyUrl}>CASE STUDY</Link>
    </div>
  );
};

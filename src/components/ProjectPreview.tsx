import { Link } from 'react-router-dom';
import GithubIcon from '../../public/github.svg';
import LinkIcon from '../../public/link.svg';

import styled from 'styled-components';

const Screenshot = styled.img`
  width: 100%;
`;

interface ProjectPreviewProps {
  name: string;
  subheader: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  deployUrl: string;
}

export const ProjectPreview = ({
  name,
  subheader,
  description,
  imageUrl,
  githubUrl,
  deployUrl,
}: ProjectPreviewProps) => {
  return (
    <div>
      <Screenshot src={imageUrl} alt="Project preview"></Screenshot>
      <h3>{name}</h3>
      <h4>{subheader}</h4>
      <p>{description}</p>
      <Link to={githubUrl} target="_blank">
        <img src={GithubIcon}></img>
      </Link>
      <Link to={deployUrl} target="_blank">
        <img src={LinkIcon}></img>
      </Link>
    </div>
  );
};

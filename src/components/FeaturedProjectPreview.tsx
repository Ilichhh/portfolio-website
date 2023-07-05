import { Link } from 'react-router-dom';
import GithubIcon from '../../public/github.svg';
import LinkIcon from '../../public/link.svg';

import { ProjectPreviewData } from '../types';

import styled from 'styled-components';
import theme from '../theme';
import { LinkButton } from './common';

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  flex: 1 1 0;
  width: 50%;
`;

const Info = styled.div`
  flex: 1 1 0;
  padding: 50px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

interface ProjectPreviewProps {
  data: ProjectPreviewData;
  imagePositioning: 'left' | 'right';
}

export const FeaturedProjectPreview = ({ data, imagePositioning }: ProjectPreviewProps) => {
  const { name, description, imageUrl, githubUrl, deployUrl, caseStudyUrl } = data;
  return (
    <Wrapper>
      {imagePositioning === 'left' && <Image src={imageUrl} alt="Project preview"></Image>}
      <Info>
        <h3>{name}</h3>
        <p>{description}</p>
        <LinksWrapper>
          <LinkButton color={theme.colors.purple} width={230} to={caseStudyUrl}>
            full case study
          </LinkButton>
          <LinksWrapper>
            <Link to={githubUrl} target="_blank">
              <img src={GithubIcon}></img>
            </Link>
            <Link to={deployUrl} target="_blank">
              <img src={LinkIcon}></img>
            </Link>
          </LinksWrapper>
        </LinksWrapper>
      </Info>
      {imagePositioning === 'right' && <Image src={imageUrl} alt="Project preview"></Image>}
    </Wrapper>
  );
};

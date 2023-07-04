import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';

import styled from 'styled-components';
import theme from '../../theme';

import { skillsListData } from '../../data/skillsList';

const About = styled.div`
  flex: 1 1 0;
`;

const SkillsList = styled.pre`
  margin: 0;
  flex: 1 1 0;
`;

export const AboutSection = () => {
  return (
    <SectionWrapper bgColor={theme.colors.bgLight}>
      <Container>
        <SectionHeader>{`About me`}</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <About>
              <p>
                When I was a kid, I liked most of all to assemble constructors, draw and solve
                logical problems. In the first grade on September 1, I drew our summer house
                according to all the laws of perspective. And being the best in the class in
                mathematics, I went to the Olympiads.
              </p>
              <p>
                My engineer parents advised me to choose the profession of architect as the best
                combination of my strengths. That was how I got my first secondary, then higher
                education. Then I worked as an architect restorer for some time. This experience
                strengthened my understanding of design and helped me develop my spatial thinking.
              </p>
              <p>
                After a while I became interested in online poker. Behind the simple rules of this
                game there is incredible depth. And the one who is most inclined to critical
                thinking wins. Years of playing professionally have helped me develop
                self-discipline and mental toughness. Spending an entire day in front of the
                computer looking for answers to logical problems has become the norm. And the
                opportunity to travel and see 30 countries around the world has broadened my
                horizons.
              </p>
              <p>
                At some point, after trying to write code and learning more about the modern
                development industry, I suddenly realized that programming is even more like
                assembling a construction set, which I loved so much in my childhood, than
                architecture. And the ever-changing rules of the game and the incredible potential
                for growth in breadth is something I, as a scanner personality type, sorely lacked
                in poker.
              </p>
              <p>
                I spent the last year learning the basic technologies of frontend development at RS
                School. I have done several team projects, in one of them I was a team leader and in
                addition to development I was responsible for team coordination.
              </p>
              <p>
                Maybe in 10 years I will come to my senses and will give up the development, open my
                own bar on some Philippine island and will talk to the natives about life. But this
                will definitely not happen in the near future, I will be in IT for a long time.
              </p>
            </About>
            <SkillsList>{skillsListData}</SkillsList>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};

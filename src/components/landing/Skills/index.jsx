import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper >
      <SkillsWrapper as={Container}>
        {/* <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail> */}
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Aspring software engineer ;)
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

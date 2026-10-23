import { Link } from 'components/Link';
import NextLink from 'next/link';
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';
import * as S from './styles';

export function About() {
  return (
    <S.Container>
      <p>Hello there ! I&apos;m João a software developer on Brazil !</p>
      <p>I currently open to work ! .</p>
      <p>
        Most of my experience revolves around ASP.Net Core, React, Next.js, and
        modern frontend architecture, with a strong focus on building
        maintainable and high-performing applications.
      </p>

      <S.Footer>
        <Link href="/about">More about me</Link>

        <S.SocialMedia>
          <NextLink
            href="https://github.com/JoaoVitorResende"
            target="_blank"
            aria-label="Joao' GitHub"
          >
            <S.SocialMediaIcon as={RiGithubFill} size={24} />
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/joaovitor98/"
            target="_blank"
            aria-label="Joao' Linkedin"
          >
            <S.SocialMediaIcon as={RiLinkedinBoxFill} size={24} />
          </NextLink>

          <NextLink
            href="mailto:joaovitorresende.jr@gmail.com"
            target="_blank"
            aria-label="Joao' E-mail"
          >
            <S.SocialMediaIcon as={RiMailFill} size={24} />
          </NextLink>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}

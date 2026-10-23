import meImg from 'assets/me.png';
import * as S from './styles';

export function AboutMe() {
  return (
    <S.Container>
      <S.Image src={meImg} alt="João Vitor" placeholder="blur" />

      <S.AboutText>
        <S.Paragraph>
          Hi. My name is João, and I&apos;m a software engineer. Nice to meet
          you 👋. Aside from software development, I also like to play some
          games and read a lot.
        </S.Paragraph>
        <S.Paragraph>
          When i was just a little boy i saw a few people programming a game and
          I decided I can do it as well, and got interested on software
          development.
        </S.Paragraph>
        <S.Paragraph>
          While working professionally, I managed to ship products which
          generated value and eased the life of thousands of users whilst
          improving the quality of existing software and creating new, valuable
          software from the beginning.
        </S.Paragraph>
      </S.AboutText>
    </S.Container>
  );
}

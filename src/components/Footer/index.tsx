import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <S.Links>
        <section>
          <S.Title>Navigation</S.Title>

          <S.Nav>
            <S.Link href="/">Home</S.Link>
            <S.Link href="/about">About</S.Link>
            <S.Link href="/writings">Writings</S.Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Social</S.Title>

          <S.Nav>
            <S.Link href="https://github.com/JoaoVitorResende" target="_blank">
              GitHub
            </S.Link>

            <S.Link
              href="https://www.linkedin.com/in/joaovitor98/"
              target="_blank"
            >
              Linkedin
            </S.Link>

            <S.Link href="mailto:joaovitorresende.jr@gmail.com" target="_blank">
              E-mail
            </S.Link>
          </S.Nav>
        </section>
      </S.Links>

      <S.Copyright>© {new Date().getFullYear()} João Vitor</S.Copyright>
    </S.Container>
  );
}

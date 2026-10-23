import * as S from './styles';

export function Header() {
  return (
    <header>
      <S.Introduction>Hi there, I&apos;m a...</S.Introduction>
      <S.Role>
        <strong>Full-stack software engineer</strong>{' '}
        <S.RoleAdditional>
          with an eye for software architecture.
        </S.RoleAdditional>
      </S.Role>
      <S.Description>
        I&apos;m a Full-stack software engineer based in Brazil and moved by
        curiosity. I am currently focused on backend solutions
      </S.Description>
    </header>
  );
}

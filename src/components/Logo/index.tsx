import { useColorTheme } from 'contexts/ColorThemeContext';
import { COLORS } from 'components/ColorTheme/colors';
import * as S from './styles';

export function Logo() {
  const { colorMode } = useColorTheme();

  return (
    <S.Link href="/">
      <svg
        width="100"
        height="36"
        viewBox="0 0 100 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="2"
          y="27"
          fontFamily="Poppins, Montserrat, Arial, sans-serif"
          fontWeight="700"
          fontSize="32"
          letterSpacing="-1"
        >
          <tspan
            id="name"
            data-testid="name"
            fill={COLORS.text[colorMode || 'dark']}
          >
            João
          </tspan>
          <tspan
            id="dot"
            data-testid="dot"
            fill={COLORS.primary[colorMode || 'dark']}
          >
            .
          </tspan>
        </text>
      </svg>
    </S.Link>
  );
}

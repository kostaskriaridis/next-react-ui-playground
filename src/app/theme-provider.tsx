'use client';

import { THEME_2022, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';

// const theme = ThemeFactory.create({ mobileMediaQuery: 'not all' }, THEME_2022);

export default function ThemeProvider({ children }: { children: JSX.Element }) {
  return <ThemeContext.Provider value={THEME_2022}>{children}</ThemeContext.Provider>;
}

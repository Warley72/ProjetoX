"use client"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

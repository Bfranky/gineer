// Dark mode removed — light theme only
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useTheme() {
  return { dark: false, toggle: () => {} };
}

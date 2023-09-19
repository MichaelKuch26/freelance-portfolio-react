const detectDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia(`(prefers-color-scheme: sark)`).matches
  ) {
    return 'dark'
  }
  return 'light'
};

export default detectDarkMode;
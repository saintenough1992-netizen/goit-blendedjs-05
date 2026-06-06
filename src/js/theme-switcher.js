import { saveData, THEME_LS_KEY } from './local-storage-api';

const body = document.body;

export function changeTheme() {
  const isLight = body.classList.contains('theme-light');
  const newTheme = isLight ? 'theme-dark' : 'theme-light';

  body.classList.remove('theme-light', 'theme-dark');
  body.classList.add(newTheme);

  saveData(THEME_LS_KEY, newTheme);
}

export function initTheme() {
  const theme = JSON.parse(localStorage.getItem(THEME_LS_KEY)) || 'light';

  body.classList.remove('theme-light', 'theme-dark');
  body.classList.add(theme);
}

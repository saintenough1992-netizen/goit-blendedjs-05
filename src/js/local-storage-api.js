export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const TASKS_LS_KEY = 'tasks';

export function SaveDataFromLS(key) {
  const saveD = localStorage.getItem(key);
  if (!saveD) {
    return null;
  }
  return JSON.parse(saveD);
}

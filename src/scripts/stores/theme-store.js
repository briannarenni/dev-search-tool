import { writable } from "svelte/store";

const bodyEl = document.documentElement;

export let currentTheme = writable(bodyEl.getAttribute('theme') || 'light');

export const updateUserTheme = (newTheme) => {
  bodyEl.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme.set(newTheme);
}

const getInitTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  bodyEl.setAttribute('data-theme', initTheme);
  return initTheme;
}

currentTheme.set(getInitTheme());


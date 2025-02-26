import { writable, derived } from 'svelte/store';

// Import translations dynamically
import en from '$lib/locale/en.js';
import pt from '$lib/locale/pt.js';
import fr from '$lib/locale/fr.js';

const translations = {
  en,
  pt,
  fr,
};

export const langFlags = {
  en: '🇬🇧',
  pt: '🇵🇹',
  fr: '🇫🇷',
};

export const supportedLanguages = Object.entries(translations).map(
  ([key, lang]) => ({
    key,
    name: lang.name,
  })
);

function getUserLanguage() {
  if (
    typeof localStorage !== 'undefined' &&
    localStorage.getItem('language') in translations
  ) {
    return localStorage.getItem('language');
  } else if (
    typeof navigator !== 'undefined' &&
    typeof navigator.language == 'string'
  ) {
    console.log(navigator.language);
    const navigatorLanguage = navigator.language.split('-')[0];
    return navigatorLanguage in translations ? navigatorLanguage : 'en';
  }

  return 'en';
}

// Default language
export const language = writable(getUserLanguage());

// Save language changes to localStorage
language.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language', value);
  }
});

// Derive the current translations based on the selected language
export const t = derived(language, ($language) => {
  // If the selected language is not supported, fallback to the default language
  return translations[$language] || translations['en'];
});

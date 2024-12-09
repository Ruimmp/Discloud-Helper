import { writable, derived } from 'svelte/store';

// Supported languages
export const supportedLanguages = ['English', 'Português', 'Français'];

// Import translations dynamically
import en from '$lib/locale/en.js';
import pt from '$lib/locale/pt.js';
import fr from '$lib/locale/fr.js';

const translations = {
	English: en,
	Português: pt,
	Français: fr
};

// Load user preference from localStorage or fallback to default
const userLanguage =
	typeof localStorage !== 'undefined' ? localStorage.getItem('language') || 'English' : 'English';

// Default language
const defaultLanguage = supportedLanguages.includes(userLanguage) ? userLanguage : 'English'; // Validate the stored language
export const language = writable(defaultLanguage);

// Save language changes to localStorage
language.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('language', value);
	}
});

// Derive the current translations based on the selected language
export const t = derived(language, ($language) => {
	// If the selected language is not supported, fallback to the default language
	return translations[$language] || translations['English'];
});

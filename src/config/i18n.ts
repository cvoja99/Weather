import { createTypedObjectFromEntries } from 'utils';

export const languages = ['en', 'fr'] as const;

export type LanguageKey = (typeof languages)[number];

export const defaultLanguage: LanguageKey = 'en';

export const languagesConfig = createTypedObjectFromEntries(
  languages.map<[LanguageKey, LanguageKey]>((key) => [key, key]),
);

import { en } from './en';
import { id } from './id';

export type Locale = 'id' | 'en';

export const isLocale = (value: string | null): value is Locale => value === 'id' || value === 'en';

export const dictionary = { id, en } as const;

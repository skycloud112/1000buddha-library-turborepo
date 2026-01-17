import { parseISO } from 'date-fns';

export const isoToDate = (isoString: string) => parseISO(isoString);

import {FIELD_MAX_LENGTHS} from '../constants/defaults';

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const isTextArea = (field: string) => ['description', 'info'].includes(field);
export const getMaxLengthMap = () => Object.fromEntries(FIELD_MAX_LENGTHS.map(({field, maxLength}) => [field, maxLength]));

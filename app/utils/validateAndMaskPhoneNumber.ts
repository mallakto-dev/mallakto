import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const validateAndMaskPhoneNumber = (val: string) => {
        const phoneNumber = parsePhoneNumberFromString(val);
        return phoneNumber?.isValid() ? phoneNumber.formatInternational() : false;
}
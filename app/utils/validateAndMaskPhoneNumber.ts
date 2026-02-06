import { parsePhoneNumberFromString,  } from 'libphonenumber-js';

export const validateAndMaskPhoneNumber = (val: string) => {
        const phoneNumber = parsePhoneNumberFromString(val, 'RU');
        if (phoneNumber) {
                return phoneNumber?.isValid() || phoneNumber?.isPossible()  ? phoneNumber?.formatNational() : false;
        }
        return false;
}
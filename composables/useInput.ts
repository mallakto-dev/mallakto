import { ref } from "vue";

type ValidationRules = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    test: RegExp;
    message: string;
  };
};

export type InputType<T> = {
  value: T;
  errors: Set<string>;
  inputIsValid: boolean;
  validateInput: () => void;
};

export function useInput<T>(value: T, validationRules: ValidationRules) {

  const input = ref<InputType<T>>({
    value,
    errors: new Set<string>(),
    inputIsValid: false,
    validateInput: () => {},
  });

  const cleanError = (error: string) => {
    input.value.errors.delete(error);
  };

  const validateInput = () => {
    for (const type in validationRules) {
      if (type === "required" && validationRules.required) {
        const reqError = validationRules.required;
        if (!input.value.value) {
            input.value.errors.add(reqError);
        } else {
          cleanError(reqError);
        }
      }

      if (typeof input.value.value === "string") {
        if (type === "minLength" && validationRules.minLength) {
          const { value: minLength, message } = validationRules.minLength;
          if (input.value.value && input.value.value.length < minLength) {
              input.value.errors.add(message);
          } else {
            cleanError(message);
          }
        }

        if (type === "maxLength" && validationRules.maxLength) {
          const { value: maxLength, message } = validationRules.maxLength;
          if (input.value.value && input.value.value.length > maxLength) {
                input.value.errors.add(message);
          } else {
            cleanError(message);
          }
        }

        if (type === "pattern" && validationRules.pattern) {
          const { test: exp, message } = validationRules.pattern;
          if (input.value.value && !exp.test(input.value.value)) {
                input.value.errors.add(message);
          } else {
            cleanError(message);
          }
        }
      }
    }
  };
  
  watch(() => input.value.errors.size === 0 && !!input.value.value, (isValid) => {
    input.value.inputIsValid = isValid;
  })

  if (Object.keys(validationRules).length > 0) {
    input.value.validateInput = () => validateInput();
  }

  return input;
}

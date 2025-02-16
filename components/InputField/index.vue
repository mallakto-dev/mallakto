<script setup lang="ts">
import type { InputType } from '~/composables/useInput';

const input = defineModel<InputType<string>>({ required: true });


const { name, label, id, type, handleBlur, additionalErrorMsg } = defineProps<{
    label: string,
    id: string
    type: "text" | "tel" | "email",
    name: string,
    handleBlur?: (value: string) => string | boolean,
    additionalErrorMsg?: string
}>();

const onInput = () => {
    input.value.validateInput();
}


const onBlur = () => {
    // couldn't come up with anything better than this
    if (type === "tel" && handleBlur && additionalErrorMsg) {
            if(input.value.value) {
            const result = handleBlur(input.value.value);
            if (typeof result === "string") {
                input.value.value = result;
                input.value.errors.delete(additionalErrorMsg);
            } else {
                    input.value.errors.add(additionalErrorMsg);
            }
        } else {
            // cleanup custom error msg
            input.value.errors.delete(additionalErrorMsg);
        }
    };
}

</script>

<template>
    <label :htmlFor="id">{{ label }}</label>
    <input :id="id" v-model="input.value" :type="type" :aria-invalid="!input.inputIsValid" :name="name" @input="onInput" @blur="onBlur">
    <p v-for="(error, index) in input.errors" :key="index">
        {{ error }}
    </p>
</template>


<style scoped>
label {
    font-size: 1.1rem;
    line-height: 2;
}

input {
    margin-right: "none";
}
</style>

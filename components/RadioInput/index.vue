<script setup lang="ts">
import type { InputType } from '~/composables/useInput';

const input = defineModel<InputType<string>>({required: true});


const { name, label, id, radioValue } = defineProps<{
        label:  string,
        id: string,
        name: string,
        radioValue: string,
    }>();


    const handleChange = () => {
        input.value.validateInput();
    }

</script>

<template>
        <label :htmlFor="id">
            <input
            :id="id"
            v-model="input.value"
            type="radio"
            :aria-invalid="!input.inputIsValid" 
            :name="name"
            :value="radioValue"
            @change="handleChange"
            >
            {{label}}
        </label>
</template>


<style scoped>
label {
  font-size: 1.1rem;
  line-height: 2;
};


input[type="radio"] {
  margin-right: 10px;
};

</style>

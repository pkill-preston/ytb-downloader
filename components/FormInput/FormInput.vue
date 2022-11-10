<template>
  <input
      :placeholder="placeholder"
      class="field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.field{
  min-height: 1rem;
  height: 100%;
  max-width: calc(80% - 2rem);
  width: 100%;
  border: 1px solid black;
  border-radius: 25px;
  padding: 1rem;
  font-size: 1.2rem;
}

.field.text{

}

.field::placeholder{
  color: black;
}
</style>

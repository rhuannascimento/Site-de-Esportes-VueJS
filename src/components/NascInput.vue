<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control" placeholder="Digite seu clube">
</template>

<script>
export default {
   props:{
       modelValue: String
   }
}
</script>

<style scoped>

</style>
<template>
    <input type="text" :value="modelValue" @input="this.$store.dispatch('changeClubName', $event.target.value)" class="form-control" placeholder="Digite seu clube">
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
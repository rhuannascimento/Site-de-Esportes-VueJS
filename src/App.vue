<template>
    <NascHeader @select-championship="changeChampionship" @change-component="changeComponent"/>
    <NascSection :championship="championship"/>
    <NascFooter/>
</template>

<script>
import NascHeader from './components/NascHeader.vue'
import NascFooter from './components/NascFooter.vue'
import NascSection from './components/NascSection.vue'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    NascHeader,
    NascFooter,
    NascSection
  },
  computed:{
    ...mapGetters({
      championship: 'getChampionship'
    })
  },
  methods:{
    ...mapActions({
      changeChampionship: 'changeChampionship'
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>

<template>
    <NascHeader @select-championship="changeChampionship" @change-component="changeComponent"/>
    <NascSection :current-component="currentSectionComponent" :championship="championship"/>
    <NascFooter/>
</template>

<script>
import NascHeader from './components/NascHeader.vue'
import NascFooter from './components/NascFooter.vue'
import NascSection from './components/NascSection.vue'

export default {
  name: 'App',
  components: {
    NascHeader,
    NascFooter,
    NascSection
  },
  data(){
    return{
      championship: "Campeonato Brasileiro",
      currentSectionComponent: "NascSectionBanner"
    }
  },
  methods:{
    changeChampionship(value){
      this.championship = value;
    },
    changeComponent(value){
      let component;

      switch(value){
        case 'home':
        default:
          component='NascSectionBanner'
        break;

        case 'news':
          component='NascSectionNews'
        break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>

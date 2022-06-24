<template>
    <section class="section-news">
        <div class="container">
            <NascSectionNewsIndividual v-for="notice in news" :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.imgInfor"
                :news-title="notice.title"
                :news-content="notice.content"
                :news-date="notice.date"
            />
            
        </div>
    </section>
</template>

<script>
import NascSectionNewsIndividual from './NascSectionNewsIndividual.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
        NascSectionNewsIndividual
    },
    computed:{
        ...mapGetters({
            news: 'getNews'
        })
    }
}
</script>

<style> /* scoped -> torna este style exclusivo desse component */ 
    .section-news{
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>
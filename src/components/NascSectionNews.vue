<template>
    <section>
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
export default {
    components:{
        NascSectionNewsIndividual
    },
    data(){
        return{
            news:[]
        }
    },
    created(){
        this.news = [
            {
                id: 1,
                title: 'Começam os treinos para nova temporada',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime veniam at dolore dolorem odio fugit aliquid, sapiente, facilis possimus sit beatae cum iusto animi hic exercitationem assumenda magni fugiat',
                date: '01/06/2022',
                img: 'news1.jpg',
                imgInfor: 'Notícia 1'
            },
            {
                id: 2,
                title: 'Jogo de quarta-feira termina empatado',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime veniam at dolore dolorem odio fugit aliquid, sapiente, facilis possimus sit beatae cum iusto animi hic exercitationem assumenda magni fugiat.',
                date: '01/06/2022',
                img: 'news2.jpg',
                imgInfor: 'Notícia 2'
            },
            {
                id: 3,
                title: 'A inauguração do novo estádio será semana que vem',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime veniam at dolore dolorem odio fugit aliquid, sapiente, facilis possimus sit beatae cum iusto animi hic exercitationem assumenda magni fugiat.',
                date: '01/06/2022',
                img: 'news3.jpg',
                imgInfor: 'Notícia 3'
            }
        ]
    }
}
</script>

<style scoped> /* scoped -> torna este style exclusivo desse component */ 
    section{
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>

import {createStore} from 'vuex';

const store = createStore({
    state:{
        championship: 'Campeonato Brasileiro',
        clubName: 'Nasc Treinamentos',
        news: [
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
    },
    getters:{
        getClub(state){
            return state.clubName;
        },
        getChapionship(state){
            return state.championship;
        },
        getNews(state){
            return state.news;
        }
    },
    mutations:{
        setChampionship(state, newValue){
            state.championship = newValue;
        },
        setClubName(state, newValue){
            state.clubName = newValue;
        }
    },
    actions:{
        changeChampionship(context, value){
            context.commit('setChampionship', value)
        },
        changeClubName(context, value){
            context.commit('setClubName', value)
        }
    }
})

export default store;
 <template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo noticias do: {{championship}}</h3>
            </div>
        </div>
        <component :is="currentComponent"></component>
        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é {{myClub}}</h2>
                </div>
                <div class="col-6">
                    <NascInput v-model="myClub"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NascSectionBanner from './NascSectionBanner.vue'
import NascInput from './NascInput.vue'
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex'

const NascSectionNews = defineAsyncComponent(() =>
            import('./NascSectionNews.vue')
) // fazendo o importe por aqui o componenet só sera carregado quando requesitado pelo usuátio, deixando assim o site mais leve

export default {
    components:{
        NascSectionBanner,
        NascSectionNews,
        NascInput
    },
    props:{
        currentComponent: String
    },
    computed:{
       ...mapGetters({
            championship: 'getChapionship',
            myClub: 'getClub'
        })
    }
}
</script>

<style scoped> /* scoped -> torna este style exclusivo desse component */ 
    
</style>
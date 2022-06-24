 <template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo noticias do: {{championship}}</h3>
            </div>
        </div>
        
        <router-view></router-view>

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
import NascInput from './NascInput.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
        NascInput
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
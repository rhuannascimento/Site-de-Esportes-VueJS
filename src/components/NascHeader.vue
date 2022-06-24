<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand">

                <router-link to="/" class="link navbar-brand mr-auto">
                    <img src="./../assets/Logo.svg" class="img d-inline-block align-top" id="logo" alt="">Futebol Club
                </router-link>

                <div class="links mr-2">

                    <router-link to="/" class="btn mr-5">Início</router-link>
                    <router-link to="/news" class="btn mr-5">Notícias</router-link>

                    <select name="championship" id="select-championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
                        <option value="">Selecione um Campeonato</option>
                        <option value="Campeonato Brasileiro" selected>Campeonato Brasileiro</option>
                        <option value="Campeonato Espanhol">Campeonato Espanhol</option>
                        <option value="Campeonato Ingles">Campeonato Ingles</option>
                        <option value="Campeonato Italiano">Campeonato Italiano</option>
                    </select>

                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped> /* scoped -> torna este style exclusivo desse component */ 
    header{
        background-color: black;
    }
    #logo{
        width: 150px;
        height: 100%;
    }
    .links{
        display: inline-flex;
    }
    .link{
        color: #D48E23;
        font-size: 30px;
        font-family: 'Rajdhani';
    }
    .links a{
        color: white;
    }
    .links a:focus{
        outline: none !important;
        box-shadow: none !important;
    }
</style>
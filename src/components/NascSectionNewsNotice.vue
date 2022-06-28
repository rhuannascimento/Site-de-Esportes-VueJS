<template>
    <section class="section-news">
        <div class="container">
            <div class="row div-news">
                <div class="col-6">
                    <img :src="require(`../assets/${notice.img}`)" :alt="notice.imgInfo">
                </div>
                <div class="col-6">
                    <h2>{{notice.title}}</h2>
                    <p>{{notice.content}}</p>
                    <span>{{notice.date}}</span>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    computed:{
        notice(){
            return this.$store.getters.getNotice(this.$route.params.idnotice)
        }
    },
    beforeRouteEnter:(to, from, next) => {
    
        let params = to.params;

        if(!parseInt(params.idnotice) > 0){
            next('/');
        }

        next();

    }
}
</script>

<style scoped>
    h2{
        cursor: auto;
    }
</style>
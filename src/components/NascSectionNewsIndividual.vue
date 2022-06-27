<template>
    <div class="row div-news">
        <div class="col-3">
            <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
        </div>

        <div class="col-9">
            <!-- <h2 @click="goToPage(`/news/${newsId}`)" >{{newsTitle}}</h2>-->
            <router-link :to="{name: 'notices', params: {idnotice: newsId} }"><h2>{{newsTitle}}</h2></router-link>
            <p>
                {{newsContent}}
            </p>
            <span class="font-italic">{{newsDate}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newsId:{
            type: Number,
            required: true
        },
        imgName:{
            type: String,
            required: true
        },
        imgInfo:{
            type:String,
            required: true
        },
        newsTitle:{
            type:String,
            required: true
        },
        newsContent:{
            type:String,
            required: true
        },
        newsDate:{
            type:String,
            required: true
        }
    }
    /*methods:{
        goToPage(page){
            this.$router.push(page);
        }
    }*/

}
</script>

<style>
    .div-news{
        margin-bottom: 30px;
    }
    .div-news img{
        width: 100%;
    }
    .div-news h2{
        cursor: pointer;
        color: white;
    }
</style>
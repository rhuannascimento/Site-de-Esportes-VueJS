<template>
    <div class="row">
        <div class="col-3">
            <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
        </div>

        <div class="col-9">
            <h2>{{newsTitle}}</h2>
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

}
</script>

<style scoped> /* scoped -> torna este style exclusivo desse component */ 
    .row{
        margin-bottom: 30px;
    }
    img{
        width: 100%;
    }
    h2{
        cursor: pointer;
        color: white;
    }
</style>
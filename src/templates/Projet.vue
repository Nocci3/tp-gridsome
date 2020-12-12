<template>
    <div class="projet">
        <h1>{{$page.projet.title}}</h1>
        <p><img :src="$page.projet.imageURL" width="100" alt=""></p>
        <p><time>Date : {{ this.$page.projet.date }}</time></p>
        <ul>
            <li v-for="tag of $page.projet.tag" :key="tag">{{tag}}</li>
        </ul>
        <div class="content" v-html="$page.projet.content"></div>
    </div>

</template>

<page-query>
    query ($id: ID!) {
        projet(id: $id) {
            title
            imageURL
            date(format: "DD MMMM YYYY", locale: "fr")
            tag
            content
        }
    }
</page-query>

<script>
    export default {
        name: "Projet",
        metaInfo() {
            return {
                title: this.$page.projet.title,
            }
        }
    }
</script>

<style>

    img{
        width: 70%;
        box-shadow: 10px 5px 5px black;
        display: block;
        margin: auto;
    }

    p{
        margin-left: 300px;
        margin-right: 300px;
    }

    h1{
        text-align: center;
        color: darkred;
    }

    li{
        text-align: center;
        list-style-type: none;
    }

    body{
        background-color: aliceblue;
    }



</style>


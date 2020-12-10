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


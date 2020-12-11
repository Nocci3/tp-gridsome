<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/image -->
   <div class="logo">
     <g-image alt="Apex Legend" src="../image/Apex_Legends_Logo.png" width="135"/>
   </div>

    <h1>Actualités apex legend</h1>

    <p>
        Bienvenue sur mon site dédié au jeux vidéo Apex Legend. Ici vous pourrez retrouver deux pages décrivant les mises à jour sur ces dernières semaines.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Actualités Apex legend'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

body{
    background-color: darkgrey;
}

h1{
  position: center;
  color: white;
  font-family: "Amatic SC";
}

.logo{
  position: center;
}


</style>

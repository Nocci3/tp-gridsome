<template class="accueil">
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



h1{
  display: block;
  color: black;
  font-family: "Amatic SC";
}

p{
    color: black;
}

.logo{
  display: block;
}

/* Cool infinite background scrolling animation.
* Twitter: @kootoopas
*/
/* Exo thin font from Google. */
@import url(https://fonts.googleapis.com/css?family=Exo:100);
/* Background data (Original source: https://subtlepatterns.com/grid-me/) */
/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
    100% {
        background-position: 50px 50px;
    }
}
@-moz-keyframes bg-scrolling-reverse {
    100% {
        background-position: 50px 50px;
    }
}
@-o-keyframes bg-scrolling-reverse {
    100% {
        background-position: 50px 50px;
    }
}
@keyframes bg-scrolling-reverse {
    100% {
        background-position: 50px 50px;
    }
}
@-webkit-keyframes bg-scrolling {
    0% {
        background-position: 50px 50px;
    }
}
@-moz-keyframes bg-scrolling {
    0% {
        background-position: 50px 50px;
    }
}
@-o-keyframes bg-scrolling {
    0% {
        background-position: 50px 50px;
    }
}
@keyframes bg-scrolling {
    0% {
        background-position: 50px 50px;
    }
}
/* Main styles */
body {
    margin-top: 13.5rem;
    color: black;
    font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
    text-align: center;
    /* img size is 50x50 */
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
    -webkit-animation: bg-scrolling-reverse .92s infinite;
    /* Safari 4+ */
    -moz-animation: bg-scrolling-reverse .92s infinite;
    /* Fx 5+ */
    -o-animation: bg-scrolling-reverse .92s infinite;
    /* Opera 12+ */
    animation: bg-scrolling-reverse .92s infinite;
    /* IE 10+ */
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
}
body::before {
    content: "APEX LEGEND";
    font-size: 8rem;
    font-weight: 100;
    font-style: normal;
}
p{
    font-weight: bold;
}
    li{
        font-weight: bold;
    }

    a{
        font-weight: bold;
    }




</style>

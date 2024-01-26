<template>
<div class="my-5">

    <login-nav class="loginNav" :textData="bewertung"></login-nav>
   <nav-second class="my-15" style="background-color:white;"></nav-second>

    <h1>Bewertung</h1>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'

import NavSecond from '../nav/NavSecond.vue'
export default {
    components: {
        LoginNav,
        NavSecond
    },

    
    data(){
     return{
        bewertung:'Bewertung'
     }
    }
}
</script>
<style scoped>

.loginNav {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: white;

}
</style>

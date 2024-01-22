<template>
<div>

<login-nav :textData="schaden"></login-nav>
<nav-second></nav-second>
    
<h1>Schadenliste</h1>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'

export default {
  components: { LoginNav,  NavSecond },
    data(){
        return{
            schaden:'Schadenliste',
        }
    }
}
</script>
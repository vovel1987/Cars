<template>
<div>


<login-nav :textData="documents"></login-nav>
<nav-second></nav-second>
    <h1>Dokuments</h1>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'
export default {
  components: { LoginNav, NavSecond },
    data(){
        return{
            documents:'Dokuments'
        }
    }
}
</script>
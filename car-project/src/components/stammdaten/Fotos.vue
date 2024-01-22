<template>
<div>

    <login-nav :textData="fotos"></login-nav>
    <nav-second></nav-second>
    <h1>Fotos</h1>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'

export default {
    components: {
        LoginNav,
        NavSecond,

    },
    data() {
        return {
            fotos: 'Fotos'
        }
    }
}
</script>

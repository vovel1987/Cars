<template>
<div>

    <login-nav :textData="overview"></login-nav>
    <nav-second></nav-second>
    <div>
        {{this.info.title}}
    </div>
    <v-row>
        <v-col cols='4'>
              <div>
            <img src="" alt="">
            <div>
                <p>Hersteller</p>
                <p>Ferrari</p>
               
                <p>Fahrgestellnummer</p>
                <p>Zhhkhk</p>
                <v-divider></v-divider>
                <p>Fahrzeugmodell</p>
                <p>Roma</p>
            </div>

        </div>
        </v-col>
        <v-col cols='4' >
              <div>
            <img src="" alt="">
            <div>
                <p>Hersteller</p>
                <p>Ferrari</p>
               
                <p>Fahrgestellnummer</p>
                <p>Zhhkhk</p>
                <v-divider></v-divider>
                <p>Fahrzeugmodell</p>
                <p>Roma</p>
            </div>

        </div>
        </v-col>
        <v-col cols='4'>
              <div>
            <img src="" alt="">
            <div>
                <p>Hersteller</p>
                <p>Ferrari</p>
               
                <p>Fahrgestellnummer</p>
                <p>Zhhkhk</p>
                <v-divider></v-divider>
                <p>Fahrzeugmodell</p>
                <p>Roma</p>
            </div>

        </div>
        </v-col>
    </v-row>



</div>
</template>

<script>
import axios from 'axios'
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'
export default {
    components: {
        LoginNav,
        NavSecond
    },
    props: ['name'],
    data() {
        return {
            overview: 'Stammdaten',
            info: {},
            error: false,
            loading: true

        }
    },
    mounted() {

        axios.get('https://fakestoreapi.com/products/1')
            .then(response => {

                this.info = response.data
                console.log(this.info.title);
            })
            .catch(error => {
                console.log(error);
                this.error = true
            })

    },

}
</script>

<style scoped>
.cont {
    display: flex;
    justify-content: space-between;
}
</style>

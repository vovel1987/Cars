<template>
<div  class="my-5">

    <login-nav class="loginNav" :textData="car.title"></login-nav>
    <div style="background-color:rgb(243 237 237);">

        <filter-bar></filter-bar>
        <router-link to="/stock/vehicle/:id/overview">

            <v-card class="mx-auto" height='350px' style="border-radius:20px; margin-top:20px; width:400px;" @click="clickMe">

                <v-img :src="car.image" height='180px' cover>

                </v-img>
                <div class="container">
                    <p style="font-weight:bold; font-size:20px"> {{car.title}}</p>
                    <div>
                        <v-icon color='red'>mdi-currency-eur</v-icon>
                        <v-icon color='red'>mdi-tools</v-icon>
                    </div>

                </div>
                <div style="margin:10px">

                    <p style=" font-size:16px; color:grey">
                        Bewertung:{{car.bewerter}}
                    </p>
                    <p>
                        am:{{car.datum}}
                    </p>
                </div>
                <div style="margin:10px">

                    <p>
                        Vin:{{car.vin}}
                    </p>
                    <p>
                        Besitzer:{{car.name}}
                    </p>
                </div>

            </v-card>
        </router-link>
    </div>
</div>
</template>

<script>
import FilterBar from '../filterbar/FilterBar.vue'
import LoginNav from '../nav/LoginNav.vue'
export default {
    components: {
        LoginNav,
        FilterBar
    },
    // props: ['title', 'id', 'bewerter', 'image', 'vin', 'name'],
    data() {
        return {
            car: {
                title: 'Ferrari',
                image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                bewerter: 'Klaus',
                datum: Date.now().toString(),
                vin: '464646klkjljlk',
                name: 'Svem Fischer',

            }
        }
    },
    methods: {
        clickMe() {

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c7c1c1;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

}
.loginNav {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: white;

}
</style>

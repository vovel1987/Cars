<template>
<div class="my-5">
    <login-nav class="loginNav" :textData="car.title"></login-nav>
    <div style="background-color: rgb(243 237 237)">
        <filter-bar></filter-bar>

        <v-card v-for="auto in autos" :key="auto.id">
            <v-img style="width:250px; height:250px;" :src="getImage(auto)"> </v-img>
            <p>{{ auto.model }}</p>
            <p>{{ auto.name }}</p>
        </v-card>

        <router-link to="/stock/vehicle/:id/overview">
            <v-card class="mx-auto" height="350px" style="border-radius: 20px; margin-top: 20px; width: 400px" @click="clickMe">
                <v-img :src="car.image" height="180px" cover> </v-img>
                <div class="container">
                    <p style="font-weight: bold; font-size: 20px">{{ car.title }}</p>
                    <div>
                        <v-icon color="red">mdi-currency-eur</v-icon>
                        <v-icon color="red">mdi-tools</v-icon>
                    </div>
                </div>
                <div style="margin: 10px">
                    <p style="font-size: 16px; color: grey">
                        Bewertung:{{ car.bewerter }}
                    </p>
                    <p>am:{{ car.datum }}</p>
                </div>
                <div style="margin: 10px">
                    <p>Vin:{{ car.vin }}</p>
                    <p>Besitzer:{{ car.name }}</p>
                </div>
            </v-card>
        </router-link>
    </div>
</div>
</template>

<script>
import FilterBar from "../filterbar/FilterBar.vue";
import LoginNav from "../nav/LoginNav.vue";
import axios from "axios";
export default {
    components: {
        LoginNav,
        FilterBar,
    },
    // props: ['title', 'id', 'bewerter', 'image', 'vin', 'name'],
    data() {
        return {
            autos: [],
            car: {
                title: "Ferrari",
                image: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                bewerter: "Klaus",
                datum: Date.now().toString(),
                vin: "464646klkjljlk",
                name: "Svem Fischer",
            },
        };
    },
    mounted() {
        this.getAutos();
    },
    methods: {
        getImage(auto) {
            console.log(auto);
            return axios.defaults.url + auto.get_image;
        },
        clickMe() {},
        getAutos() {
            axios
                .get(axios.defaults.baseURL + "autos/")
                .then((response) => {
                    this.autos = response.data;
                    console.log(this.autos);
                })
                .catch((error) => {
                    console.log(error);
                    this.error = true;
                });
        },
    },
};
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

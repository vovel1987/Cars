<template>
<div style="background-color:rgb(243 237 237);">
    <v-app-bar >

        <login-nav  :title="title" ></login-nav>

        <!-- <v-row align='center' justify='center'>
            <v-col cols="1">
                <img style="width:65px" src="/images/EberleinLogo2.png">
            </v-col>
            <v-col cols="3">
                <text-nav-haupt></text-nav-haupt>
            </v-col>

            <v-spacer />

            <v-col cols="3" style="marginTop:20px">
                <input-nav></input-nav>
            </v-col>

            <v-spacer />

            <v-col col="4">
                <login-nav></login-nav>
            </v-col>

        </v-row> -->
    </v-app-bar>
    <div style="">

        <filter-bar>

        </filter-bar>
    </div>
    <!-- <div>

    <card v-for="car in cars" :key="car.id" :title="car.title" :id="car.id" :vor_number="car.vor_number" :image="car.image"></card>
    </div> -->
    <v-row no-gutters>
        <v-col v-for="car in cars" :key="car.id" cols="12" sm="4" lg='2'>

            <router-link to="/stock/model/:id">
            
            <haupt-card class="mb-4" :title="car.title" :id="car.id" :vor_number="car.vor_number" :image="car.image"></haupt-card>
            </router-link>
        </v-col>
    </v-row>

</div>
</template>

<script>
import FilterBar from './filterbar/FilterBar.vue'
import InputNav from './nav/InputNav.vue'
import LoginNav from './nav/LoginNav.vue'
import TextNavHaupt from './nav/TextNavHaupt.vue'
import HauptCard from './card/HauptCard.vue'
import axios from 'axios'

export default {
    components: {
        TextNavHaupt,
        InputNav,
        LoginNav,
        FilterBar,
        HauptCard,
    },

    data() {
        return {

            models:[],

              
            cars: [{
                    id: 1,
                    title: 'Ferrarri 1',
                    vor_number: 2,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',

                },
                {
                    id: 2,
                    title: 'Ferrarri 2',
                    vor_number: 1,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 3,
                    title: 'Ferrarri 3',
                    vor_number: 9,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 4,
                    title: 'Ferrarri 4',
                    vor_number: 4,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 5,
                    title: 'Ferrarri 5',
                    vor_number: 1,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 6,
                    title: 'Ferrarri 6',
                    vor_number: 3,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 6,
                    title: 'Ferrarri 6',
                    vor_number: 3,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 6,
                    title: 'Ferrarri 6',
                    vor_number: 3,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 6,
                    title: 'Ferrarri 6',
                    vor_number: 3,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                {
                    id: 6,
                    title: 'Ferrarri 6',
                    vor_number: 3,
                    image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },

            ]
        }
    },
    mounted(){
        this.getModels()
    },
    methods:{

        getModels(){
             axios
                .get(axios.defaults.baseURL + "models/")
                .then((response) => {
                    this.models = response.data;
                    console.log(this.models);
                })
                .catch((error) => {
                    console.log(error);
                    this.error = true;
                });
        },

    }

}
</script>

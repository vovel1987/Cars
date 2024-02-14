<template>
<div class="my-5">
    <login-nav class="loginNav" :textData=" autos.length == 0 ? 'Keine Auto'  : `Model:${autos[0].title}` ">
    </login-nav>
    <div style="background-color: rgb(243 237 237)">
        <filter-bar @schadenFilter="filterSchaden" @preisFilter="filterPreis"></filter-bar>

        <!-- <v-card v-for="auto in autos" :key="auto.id">
            <v-img style="width:250px; height:250px;" :src="getImage(auto)"> </v-img>
            <p>{{ auto.model }}</p>
            <p>{{ auto.name }}</p>
            <p>{{auto.model}}</p>
        </v-card> -->
        <!-- <div style="display: flex; flex-wrap: wrap;align-items: center;flex-direction: row;justify-content: space-around;">
            <router-link :to="`/stock/vehicle/${auto.id}/overview`" v-for="auto in autos" :key="auto.id" style="text-decoration:none">
                <v-card class="mx-auto" height="350px" style="border-radius: 20px; margin-top: 20px; width: 250px" @click="clickMe">

                    <div v-if="!auto.get_image">
                        <v-img src='/images/tributo.jpg' height="180px" cover> </v-img>
                    </div>
                    <div v-else>
                        <v-img :src="getImage(auto)" height="180px" cover> </v-img>
                    </div>

                    <div class="container">
                        <p style="font-weight: bold; font-size: 20px">{{ auto.title }}</p>
                        <div>
                            <v-icon color="red">mdi-currency-eur</v-icon>
                            <v-icon color="red">mdi-tools</v-icon>
                        </div>
                    </div>
                    <div style="margin: 10px">
                        <p class="text">
                            Bewertung:{{ `${auto.name} ${auto.vorname}` }}
                        </p>
                        <p class="text" >am:{{ auto.date }}</p>
                    </div>
                    <div style="margin: 10px">
                        <p class="text" >Vin:{{ auto.vin }}</p>
                        <p class="text" >Besitzer:{{ auto.name }}</p>
                    </div>
                </v-card>
            </router-link>
        </div> -->

        <div style="margin:10px;">
            <v-row>
                <v-col v-for="auto in autos" :key="auto.id" cols="12" sm="4" lg='3'>
                    <!-- <router-link :to="`/stock/vehicle/${auto.id}/overview`" style="text-decoration:none"> -->
                    <v-card class="mx-auto" height="350px" style="border-radius: 20px; margin-top: 20px; " @click="clickMe">

                        <router-link :to="`/stock/vehicle/${auto.id}/overview`" style="text-decoration:none">

                            <div v-if="!auto.get_image">
                                <v-img src='/images/tributo.jpg' height="180px" cover> </v-img>
                            </div>
                            <div v-else>
                                <v-img :src="getImage(auto)" height="180px" cover> </v-img>
                            </div>
                        </router-link>

                        <div class="container">
                            <p style="font-weight: bold; font-size: 20px">{{ auto.title }}</p>
                            <div v-if="findAuto(auto.id) != undefined   ">
                                <v-icon color="red" :icon=" cars.schaden  ? 'mdi-tools' : ''"></v-icon>
                                <v-icon color="red" :icon=" cars.preis  ? 'mdi-currency-eur' : ''"> </v-icon>

                            </div>
                            <!-- <div v-if="findAuto(auto.id) != undefined   ">
                                <v-icon  color="red" :icon=" cars.schaden  ? 'mdi-tools' : ''"></v-icon>
                                <v-icon color="red" :icon=" cars.preis  ? 'mdi-currency-eur' : ''"> </v-icon>
                                <v-icon  @click="click" color="red">mdi-currency-eur</v-icon>
                                <v-icon @click="click" color="red">mdi-tools</v-icon>
                            </div> -->
                            <!-- <div v-else="findAuto(auto.id) != undefined & auto.preis  ">
                                <v-icon  @click="click" color="red">mdi-currency-eur</v-icon>
                                <v-icon @click="click" color="red">mdi-tools</v-icon>
                            </div> -->
                        </div>
                        <div style="margin: 10px">
                            <p class="text">
                                Bewertung:{{ `${auto.name} ${auto.vorname}` }}
                            </p>
                            <p class="text">am:{{ auto.date }}</p>
                        </div>
                        <div style="margin: 10px">
                            <p class="text">Vin:{{ auto.vin }}</p>
                            <p class="text">Besitzer:{{ auto.name }}</p>
                        </div>
                    </v-card>
                    <!-- </router-link> -->

                </v-col>
            </v-row>
        </div>

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
            link: this.$route.params.id,
            bewertungs: [],
            find: [],
            cars: {},
            autosFilterSchaden: [],
            getbewert: [],

        };
    },
    created() {

    },
    mounted() {
        this.getAutos();
        this.getBewrtung()
        // this.getBewertAuto()
        // this.filterSchaden()

    },

    computed: {

        isMobile() {
            switch (this.$vuetify.display.name) {
                case "xs":
                    return true;
                case "sm":
                    return true;
                case "md":
                    return true;
                case "lg":
                    return false;
                case "xl":
                    return false;
                case "xxl":
                    return false;
                default:
                    return false;
            }
        },
        padding() {
            switch (this.$vuetify.display.name) {

                case "sm":
                    return true;

            }

        }

    },
    methods: {
        getImage(auto) {

            return axios.defaults.url + auto.get_image;
        },
      
        getAutos(value) {
            axios
                .get(axios.defaults.baseURL + `autos/${this.$route.params.id}`)
                .then((response) => {
                    this.autos = response.data;
                    console.log(this.autos);

                })
                .catch((error) => {

                    this.error = true;
                });
        },
        getBewrtung() {
            axios
                .get(axios.defaults.baseURL + `bewertungs/`)
                .then((response) => {
                    this.bewertungs = response.data;
                    console.log(this.bewertungs);

                })
                .catch((error) => {

                    this.error = true;
                });

        },

        filterPreis(value) {

            if (value) {

                axios
                    .get(axios.defaults.baseURL + `cars/filterpreis/?search=${this.$route.params.id}`)
                    .then((response) => {
                        this.autos = response.data;
                        console.log(this.getBewertAuto);

                    })
                    .catch((error) => {

                        this.error = true;
                    });
            } else {
                this.getAutos()
            }

        },

        findAuto(id) {

            const bewertungs = this.bewertungs
            const auto = bewertungs.find((item) => item.auto == id)
            this.cars = auto
            console.log(auto);

            return auto

        },
        filterSchaden(value) {

            if (value) {

                axios
                    .get(axios.defaults.baseURL + `cars/filter/?search=${this.$route.params.id}`)
                    .then((response) => {
                        this.autos = response.data
                        console.log(this.autos);

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            } else {
                this.getAutos()
            }

        }

    },
};
</script>

<style scoped>
.text {
    font-size: 14px;
    color: rgb(53, 53, 53)
}

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

.filterSm {
    margin-top: 60px;
    margin-bottom: 10px;
}

.filterSm2 {
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>

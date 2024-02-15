<template>
<div style="background-color:rgb(243 237 237); ">

    <login-nav @filter="inputChange" @get="getData" style="background-color:white"></login-nav>

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

    <filter-bar @hauptCardFilter="filterReparatur"  @modelPreisFilter="modelFilterPreis"  >

    </filter-bar>

    <!-- <div>

    <card v-for="car in cars" :key="car.id" :title="car.title" :id="car.id" :vor_number="car.vor_number" :image="car.image"></card>
    </div> -->
    <v-row no-gutters>
        <!-- <v-col v-for="car in cars" :key="car.id" cols="12" sm="4" lg='2'>

            <router-link to="/stock/model/:id">

            <haupt-card class="mb-4" :title="car.title" :id="car.id" :vor_number="car.vor_number" :image="car.image"></haupt-card>
            </router-link>
        </v-col> -->
        <v-col v-for="mod in models" :key="mod.id" :id='mod.id' cols="12" sm="4" lg='2' md='3'  class="px-2">

            <router-link :to="`stock/model/${mod.id}`" style="text-decoration: none;">
                <!-- /stock/model/:id  -->
                <!-- '/stock/model/' + mod.title -->

                <haupt-card class="mb-4" :title="mod.title" :id="mod.id" :image=' mod.get_image ? getImage(mod) : link' :fahrzeuge='mod.get_fahrz' :model='mod.model'  :reparatur="mod.get_reparatur" :preis='mod.get_preis' ></haupt-card>
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

            models: [],
            autosVohand: [],
            link: '/images/tributo.jpg',
            autos:[],

        }
    },
    mounted() {
        this.getModels()
        this.getData()

    },
    methods: {
        getImage(model) {
           
            return axios.defaults.url + model.get_image;
        },

        getModels(data) {
            axios
                .get(axios.defaults.baseURL + "models/?search=" + data)
                .then((response) => {

                    this.models = response.data;

                })
                .catch((error) => {

                    this.error = true;
                });
        },
        getData() {

            axios
                .get(axios.defaults.baseURL + "models/")
                .then((response) => {

                    this.models = response.data;
                    console.log(this.models);
                    

                })
                .catch((error) => {

                    this.error = true;
                });

        },
        inputChange(data) {

            console.log(data);
            this.getModels(data)

        },
          filterReparatur(value) {

            if (value) {

                axios
                    .get(axios.defaults.baseURL + 'models/filter/')
                    .then((response) => {
                        this.models = response.data
                        

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            } else {
                this.getData()
            }

        },
        modelFilterPreis(value){

              if (value) {

                axios
                    .get(axios.defaults.baseURL + 'models/filterpreis/')
                    .then((response) => {
                        this.models = response.data
                        

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            } else {
                this.getData()
            }
               

           

        }

    }

}
</script>

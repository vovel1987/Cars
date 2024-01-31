<template>
<div class="my-5">

    <login-nav class="loginNav" :textData="overview"></login-nav>
    <nav-second style="background-color:white;" class="my-15"></nav-second>

    <v-row class="py-6"   v-for="auto in info" :key='auto.id'    >
        <v-col cols='4'>

            <v-list>
                <v-list-item>
                    <v-img class="img" cover :src="getImage(auto)">

                    </v-img>

                </v-list-item>

                <v-list-item class="px-4">

                    <v-list-item>

                        <v-text-field disabled type='input' variant='underlined' label='Hersteller' :model-value="auto.hersteller"></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-row align='center'>
                            <v-col>

                                <v-text-field disabled type='input' color="#dddd9b" variant="underlined" :model-value="auto.vin" label="Fahrgestellnummer"></v-text-field>
                            </v-col>
                            <v-col cols='2'>
                                <v-icon @click="alert" style="cursor:pointer;" color='rgb(203, 199, 199)'>
                                    mdi-inbox
                                </v-icon>
                            </v-col>
                        </v-row>

                    </v-list-item>

                    <v-list-item>
                        <v-text-field disabled type='input' variant='underlined' label='Fahrzeugmodell' :model-value='auto.title'></v-text-field>

                    </v-list-item>

                </v-list-item>

            </v-list>
        </v-col>
        <v-col cols='4'>

            <v-list>
                <v-list-item>
                    <v-img class="img" cover src='/images/fahr.jpg'>

                        <v-btn style="position: absolute; left: 50%; bottom: 50%;" icon='mdi-plus-circle-outline'></v-btn>
                    </v-img>

                </v-list-item>

                <v-list-item class="px-4">

                    <v-list-item>

                        <v-text-field type='input' color="#dddd9b" variant="underlined" :model-value="`${auto.name} ${auto.vorname}`" label="Kundenname"></v-text-field>
                    </v-list-item>

                    <v-list-item>

                        <v-row style="align-items: flex-end; padding-top:10px">
                            <v-col cols='4'>
                                <div>

                                    <v-text-field type='input' color="#dddd9b" variant="underlined" :model-value="auto.kilometerstand" label="Kilometerstand:"></v-text-field>
                                </div>
                            </v-col>
                            <v-col cols='4'>

                                <v-text-field type='input' color="#dddd9b" variant="underlined" label="TÜV/AU: Monat"></v-text-field>
                            </v-col>
                            <v-col cols='4'>

                                <v-text-field type='input' color="#dddd9b" label="Jahr" variant="underlined" flat></v-text-field>
                            </v-col>
                        </v-row>
                    </v-list-item>

                    <v-list-item>

                        <v-row style="align-items: flex-end; padding-top:10px">
                            <v-col cols='4'>
                                <div>

                                    <v-text-field type='input' color="#dddd9b" variant="underlined" :model-value="auto.kennzeichen" label="Kennzeichen"></v-text-field>
                                </div>
                            </v-col>
                            <v-col cols='4'>

                                <v-text-field type='input' color="#dddd9b" variant="underlined" label="Insp:Monat"> </v-text-field>
                            </v-col>
                            <v-col cols='4'>

                                <v-text-field type='input' color="#dddd9b" label="Jahr" variant="underlined"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-list-item>

                </v-list-item>

            </v-list>

        </v-col>
        <v-col cols='4'>

            <v-list>
                <v-list-item>
                    <v-img class="img" cover src='/images/fahr.jpg'>

                        <v-btn style="position: absolute; left:50%; bottom:50%;" icon='mdi-plus-circle-outline'></v-btn>
                    </v-img>

                </v-list-item>

                <v-list-item class="px-4">

                    <v-list-item>
                        <v-row align='center'>
                            <v-col>

                                <v-text-field type='input' color="#dddd9b" variant="underlined" model-value="0" label="Ankaufspreis"></v-text-field>
                            </v-col>
                            <v-col cols='2'>
                                <v-icon @click="alert" style="cursor:pointer;" color='yellow'>mdi-home-outline</v-icon>
                            </v-col>
                        </v-row>

                    </v-list-item>

                    <v-list-item>

                        <v-text-field disabled type='input' variant='underlined' label='Reparaturkosten' model-value='--Bewertung nicht abgeschlosen--'></v-text-field>
                    </v-list-item>

                    <v-list-item>
                        <v-text-field disabled type='input' variant='underlined' label='Einkaufspreis' model-value='--Nicht angekauft--'></v-text-field>

                    </v-list-item>

                </v-list-item>

            </v-list>
        </v-col>
    </v-row>

    <v-btn style="  margin: auto; display: block;margin-top: 40px; background: #d3cfcf;" size="x-large">Bewertungsassistent starten</v-btn>

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
            info: [],
            error: false,
            loading: true

        }
    },
    mounted() {
        this.getAutos()

    },
      watch: {
        $route(to, from) {
            if (to.name === 'StammDaten') {
                this.getAutos()
            }
        }
    },

    methods: {
        alert() {
            alert('button click')
        },
        // async fetchData() {
        //     try {
        //         const response = await axios.get('http://localhost:8000/admin/user/auto/');

        //         const data = response.data
        //         console.log(data);

        //     } catch (error) {
        //         console.error('Error', error)
        //     }

        // },
        getAutos() {

             axios.get(axios.defaults.baseURL + `autos/vehicle/${this.$route.params.id}/`)
                .then(response => {

                    this.info = response.data

                })
                .catch(error => {

                    this.error = true
                })
        },
        getImage(item){
            return axios.defaults.url + item.get_image
        }
    }

}
</script>

<style scoped>
.cont {
    display: flex;
    justify-content: space-between;
}

.icon {
    background-image: url('/images/fahr.jpg');
    background-size: cover;
    background-color: aquamarine;
    height: 350px;
    border-radius: 20px;

}

.img {
    height: 350px;
    border-radius: 20px;
    position: relative;

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

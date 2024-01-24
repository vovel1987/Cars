<template>
<div>

    <login-nav :textData="overview"></login-nav>
    <nav-second></nav-second>

    <v-row class="py-6">
        <v-col cols='4'>

            <v-list>
                <v-list-item>
                    <v-img class="img" cover src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>

                    </v-img>

                </v-list-item>

                <v-list-item class="px-4">

                    <v-list-item>

                        <v-text-field disabled type='input' variant='underlined' label='Hersteller' model-value='Ferrari'></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-row align='center'>
                            <v-col>

                                <v-text-field disabled type='input' color="#dddd9b" variant="underlined" model-value="ZdNjhkjhkhkh" label="Fahrgestellnummer"></v-text-field>
                            </v-col>
                            <v-col cols='2'>
                                <v-icon @click="alert" style="cursor:pointer;" color='rgb(203, 199, 199)'>
                                    mdi-inbox
                                </v-icon>
                            </v-col>
                        </v-row>

                    </v-list-item>

                    <v-list-item>
                        <v-text-field disabled type='input' variant='underlined' label='Fahrzeugmodell' model-value='Roma'></v-text-field>

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

                        <v-text-field type='input' color="#dddd9b" variant="underlined" model-value="Bartz" label="Kundenname"></v-text-field>
                    </v-list-item>

                    <v-list-item>

                        <v-row style="align-items: flex-end; padding-top:10px">
                            <v-col cols='4'>
                                <div>

                                    <v-text-field type='input' color="#dddd9b" variant="underlined" model-value="J54564" label="Kilometerstand:"></v-text-field>
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

                                    <v-text-field type='input' color="#dddd9b" variant="underlined" model-value="OHNE-" label="Kennzeichen"></v-text-field>
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

    methods: {
        alert() {
            alert('button click')
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
</style>

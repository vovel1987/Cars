<template>
<div class="my-5">

    <login-nav class="loginNav" :textData="schaden"></login-nav>
    <nav-second style="background-color:white;" class="my-15"></nav-second>

    <v-card style="background-color:#f5f2f2; padding:0 10px">

        <v-row style="background-color:white; margin:20px; border-radius:10px;" align='center'>
            <v-col cols='3'>
                <h3>Serviceleistung:</h3>
            </v-col>
            <v-col>

            </v-col>
            <v-col cols='4'>
                <v-row align='center' class="px-4">
                    <v-col>

                        <v-text-field type='input' color="#dddd9b" variant="underlined" model-value="0" label="Preis"></v-text-field>
                    </v-col>
                    <v-col cols='1'>
                        <v-icon>mdi-currency-eur</v-icon>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-divider class="border-opacity-100 " color="black">

        </v-divider>
        <v-row class="py-2">
            <v-col>

            </v-col>
            <v-col class="mx-5" cols='3'>

                <v-row>
                    <v-col>

                        <span style="font-size:14px">
                            Preis
                        </span>
                    </v-col>
                    <v-col>
                        <span style="font-size:14px">
                            Wird behoben
                        </span>

                    </v-col>
                    <v-col>

                        <span style="font-size:14px">
                            Behoben
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo' v-for="elem in schadenListe " :key="elem.id" :autos_seite="elem.autos_seite" :component_autos_seite="elem.component_autos_seite" :element_in_component="elem.element_in_component" :schaden_descr="elem.schaden_descr" :schaden_value="elem.schaden_value" :image_schaden=getImage(elem) :preis=elem.preis>

        </schaden-elem>
        <!-- <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo' v-for="elem in textFolder " :key="elem.id" :text1="elem.fahrS" :text2="elem.tür" :text3="elem.lack" :text4="elem.abgeblatert" :text5="elem.dimen2">

        </schaden-elem>
        <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo' v-for="elem in textFolder " :key="elem.id" :text1="elem.fahrS" :text2="elem.schweller" :text3="elem.lack" :text4="elem.abgeblatert" :text5="elem.dimen2">

        </schaden-elem>
        <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo' v-for="elem in textFolder " :key="elem.id" :text1="elem.reifenHR" :text3="elem.felge" :text4="elem.steinschlag" :text5="elem.ja">

        </schaden-elem> -->
        <v-row>
            <v-col align='center'>
                <h3>Zusatzreparatur</h3>
            </v-col>
            <v-col>
                <v-textarea></v-textarea>
            </v-col>
            <v-col>
                <v-checkbox style="display: flex;font-size: 30px;flex-direction: row;justify-content: center;} " :model-value="true"></v-checkbox>
            </v-col>
        </v-row>
        <v-divider class="border-opacity-100 " color="black">

        </v-divider>
        <v-row class="ma-5">
            <v-col>
                <h2>Gesamtkosten</h2>
            </v-col>
            <v-col>

            </v-col>
            <v-col align='end'>
                <h2>0 €</h2>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col align='end'>
                <v-btn class="button" color='yellow'>
                    Bepreisung abschliesen
                </v-btn>

            </v-col>
        </v-row>

    </v-card>

</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'
import SchadenElem from '../nav/SchadenElem.vue'
import axios from 'axios'

export default {
    components: {
        LoginNav,
        NavSecond,
        SchadenElem
    },
    data() {
        return {
            schaden: 'Schadenliste',
            schadenListe: [],

            textFolder: [{
                    id: 1,
                    inen: 'Innenraum',
                    sitze: 'Sitze',
                    leder: 'Leder',
                    fahrS: 'Fahrerseite 1T Heckmotor',
                    tür: 'Tür außen',
                    lack: 'Lack',
                    schweller: 'Schweller',
                    foli: 'Folierung',
                    front: 'Front',
                    scheinwerfer: 'Scheinwerfer',
                    glas: 'Glas',
                    stange: 'Stoßstange',
                    beifahS: 'Beifahrerseite 1T Heckmotor',
                    tank: 'Tankdeckel',
                    heck: 'Heck',
                    diffuser: 'Difusser',
                    reifenHR: 'Reifen HR',
                    reifenVR: 'Reifen VR',
                    felge: 'Felge',
                    gehause: 'Gehäuse',
                    kenn: 'Kennzeichenhalter',
                    dimen1: '<10cm',
                    dimen2: '<4cm',
                    ja: 'Ja',
                    zerk: 'Zerkratzt',
                    abgeblatert: 'Abgeblättert',
                    fehlt: 'Fehlt',
                    steinschlag: 'Steinschlag',
                    orangehaut: 'Orangehaut',
                },

            ],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        downloadInfo() {
            alert('download Info')
        },
        focusInfo() {
            alert('Schaden Info')
        },
        reparInfo() {
            alert('Info wegen reparatur kosten')
        },
        getData() {
            axios
                .get(axios.defaults.baseURL + `bewertungs/${this.$route.params.id}`)
                .then((response) => {
                    this.schadenListe = response.data
                    console.log(this.schadenListe);
                })

                .catch((error) => console.log(error))

        },
        getImage(auto) {

            return axios.defaults.url + auto.get_image;
        },

    },

}
</script>

<style scoped>
.loginNav {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: white;
}

.button {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 90%;
}
</style>

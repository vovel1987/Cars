<template>
<div class="my-5">

    <login-nav class="loginNav" :textData="schaden"></login-nav>
    <nav-second style="background-color:white;" class="my-15"></nav-second>

    <v-card v-if="sizeXs">
        <v-form fast-fail @submit.prevent='postHandler'>

            <v-row align='center' class="mx-4">
                <v-col>
                    <h3>Serviceleistung:</h3>
                </v-col>
                <v-col>
                    <v-text-field type='input' color="#dddd9b" variant="underlined" v-model='price' label="Preis"></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="border-opacity-100 " color="black">

            </v-divider>

            <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo'     @check_filter="checkbox_value"    @check_filter_wird="wird_checkbox_value" v-for="elem in schadenListe " :key="elem.id" :autos_seite="elem.autos_seite" :component_autos_seite="elem.component_autos_seite" :element_in_component="elem.element_in_component" :schaden_descr="elem.schaden_descr" :schaden_value="elem.schaden_value" :image_schaden=getImage(elem) :preis=elem.preis  :servicePreis=elem.serviceLeistung  :behoben=elem.behoben  :wird_behoben=elem.wird_behoben>

            </schaden-elem>
            <v-divider class="border-opacity-100 " color="black"></v-divider>
            <v-row class="pt-2">
                <v-col cols='12' align='center'>
                    <h3>Zusatzreparatur</h3>
                </v-col>
                <v-col class="pl-6">
                    <!-- <v-textarea style=""></v-textarea> -->
                    <!-- <textarea name="" id=""  rows="3"></textarea> -->
                    <v-text-field type='input' color="#dddd9b" variant="underlined" label="Repatur"></v-text-field>
                </v-col>
                <v-col cols='4'>
                    <v-checkbox style="display: flex;font-size: 30px;flex-direction: row;justify-content: center;} " v-model='checkbox'></v-checkbox>
                </v-col>
            </v-row>
            <v-divider class="border-opacity-100 " color="black"></v-divider>

            <v-row class="ma-5">
                <v-col>
                    <h2>Gesamtkosten</h2>
                </v-col>
                <v-col>

                </v-col>
                <v-col align='end'>
                    <h2>{{this.totalPrice()}} €</h2>
                </v-col>
            </v-row>
            <v-row class="my-5">
                <v-col align='end'>
                    <v-btn @click="postHandler" class="button" color='yellow'>
                        Bepreisung abschliesen
                    </v-btn>

                </v-col>
            </v-row>
        </v-form>

    </v-card>

    <v-card v-else style="background-color:#f5f2f2; padding:0 10px">

        <v-form fast-fail @submit.prevent='postHandler'>

            <v-row style="background-color:white; margin:20px; border-radius:10px;" align='center'>
                <v-col cols='3'>
                    <h3>Serviceleistung:</h3>
                </v-col>
                <v-col>

                </v-col>
                <v-col cols='4'>
                    <v-row align='center' class="px-4">
                        <v-col>

                            <v-text-field type='input' color="#dddd9b" variant="underlined" v-model="price"  label="Preis"></v-text-field>
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
                <v-col cols='4'>

                    <v-row>
                        <v-col cols='3'>

                            <span style="font-size:14px;text-align:center;">
                                Preis
                            </span>
                        </v-col>
                        <v-col cols='5'>
                            <span style="font-size:14px;text-align:center;">
                                Wird behoben
                            </span>

                        </v-col>
                        <v-col cols='4'>

                            <span style="font-size:14px;text-align:center;">
                                Behoben
                            </span>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <schaden-elem @download='downloadInfo' @focus='focusInfo' @priceInfo='reparInfo'     @check_filter="checkbox_value"  @check_filter_wird="wird_checkbox_value"  v-for="elem in schadenListe " :key="elem.id" :autos_seite="elem.autos_seite" :component_autos_seite="elem.component_autos_seite" :element_in_component="elem.element_in_component" :schaden_descr="elem.schaden_descr" :schaden_value="elem.schaden_value" :image_schaden=getImage(elem) :preis=elem.preis :servicePreis=elem.serviceLeistung  :behoben=elem.behoben  :check_wird='elem.wird_behoben'  >

            </schaden-elem>

            <v-row>
                <v-col align='center'>
                    <h3>Zusatzreparatur</h3>
                </v-col>
                <v-col>
                    <v-textarea v-model='zusatz'></v-textarea>
                </v-col>
                <v-col>
                    <v-checkbox style="display: flex;font-size: 30px;flex-direction: row;justify-content: center;} " v-model='checkbox'  label='I agree' ></v-checkbox>
                   
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
                    <h2>{{this.totalPrice()}} €</h2>
                </v-col>
            </v-row>
            <v-row class="my-5">
                <v-col align='end'>
                    <v-btn @click="postHandler" class="button" color='yellow'>
                        Bepreisung abschliesen
                    </v-btn>

                </v-col>
            </v-row>

        </v-form>

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
            preisTotal: [],
            preis: [],
            servicePreis: [],

            price: undefined,
            zusatz: undefined,
            checkbox: false,
            check:false,
            wird:false,

        }
    },
    mounted() {
        this.getData()
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

        sizeXs() {
            switch (this.$vuetify.display.name) {

                case "xs":
                    return true;

            }
        },
    },
    methods: {
        checkbox_value(params){
            this.check=params
            
        },
         wird_checkbox_value(params){
            this.wird=params
           
        },
        downloadInfo() {

            console.log(this.schadenListe[0].auto);
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

        totalPrice() {
            if (this.schadenListe.length == 0) {
                return 0
            } else {

                this.preis = this.schadenListe.map((item) => item.preis)
                this.servicePreis = this.schadenListe.map((item) => item.serviceLeistung)

                this.preisTotal = [...this.preis, ...this.servicePreis]

                return this.preisTotal.reduce((acc, item) => acc + item, 0)

            }

        },
        postHandler() {
            if (!this.checkbox) {
                alert('Is not agree')
                return
            }

            const formData = {
                zusatzReparatur: this.zusatz,
                serviceLeistung: this.price,
                behoben:this.check,
                wird_behoben:this.wird,

            }
            axios
                .patch(axios.defaults.baseURL + 'schaden/update/' + this.$route.params.id, formData)
                .then((response) => {
                    console.log(response.data);

                    this.$router.push("/stock/vehicle/" + response.data.auto + "/overview")
                })
                .catch((error) => {
                    console.log(error);
                })
        }

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

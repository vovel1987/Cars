<template>
<div style="width:100%">
    <v-row align='center' justify='center'>
        <v-col cols='12' lg='1' md='1' sm='1'>
            <router-link to="/" class="px-4">

                <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
            </router-link>

        </v-col>
        <v-col  cols='12' lg='3' md='3' sm='5'  >

            <h1 v-if="!this.textData">
                Modellübersicht
            </h1>
            <h1 v-else>
                {{textData}}
            </h1>

        </v-col>
        <v-col align='center'   cols='12' lg='5' md='4' sm='5'>

            <div v-if="!this.textData" style="borderRadius:20px;width:350px ">
                <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" hide-details="auto" v-model="inputValue" @input="$emit('filter',inputValue)" >
                    <template v-slot:append-inner v-if="inputValue ">
                        <v-icon @click="$emit('get',inputValue=null)" icon ='mdi-window-close'></v-icon>
                    </template>
                </v-text-field>
            </div>
        </v-col>
        
        <v-col  cols='12' lg='3' md='4' sm='1'>

            <div class="container">
                <h2 style="color:grey;font-size:18px;font-weight: 400;" class="d-sm-none d-md-flex ">
                    Hallo Carolin Schneider
                </h2>
                <v-btn flat @click="clickButton">

                    <v-icon icon=mdi-login></v-icon>
                </v-btn>
            </div>
        </v-col>
    </v-row>

</div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['textData'],
    emits: ['filter'],

    data() {
        return {
            inputValue: '',
            loading: false,
            models: [],

        }
    },
    rules: {
        required: value => !!value || 'Field is required',
    },

    methods: {
        clickIcon() {
            alert('icon')
        },
        clickButton() {
            alert('button click')
        },
        // resetInput(){
        //           axios
        //              .get(axios.defaults.baseURL + "models/")
        //         .then((response) => {

        //             this.models = response.data;

        //         })
        //         .catch((error) => {

        //             this.error = true;
        //         });
        // }
        resetInput() {
           this.inputValue = null
        }

    }

}
</script>

<style>
.container {

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

}
</style>

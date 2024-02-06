<template>
<div style="width:100%">
    <v-row align='center' justify='center'>
        <v-col cols='1'>
            <router-link to="/">

                <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
            </router-link>

        </v-col>
        <v-col cols='3'>

            <h1 v-if="!this.textData">
                Modellübersicht
            </h1>
            <h1 v-else>
                {{textData}}
            </h1>

        </v-col>
        <v-col>

            <div v-if="!this.textData" style="borderRadius:20px; margin-top: 20px;">
                <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" variant='solo' v-model="inputValue" @input="$emit('filter',inputValue)" ></v-text-field>
            </div>
        </v-col>
        <v-col cols='4'>

            <div class="container">
                <h2>
                    Hallo
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
export default {
    props: ['textData'],
    emits:['filter'],

    data() {
        return {
            inputValue:null,

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

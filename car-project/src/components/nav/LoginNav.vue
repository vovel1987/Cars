<template>
<div style="width:100%">

    <div v-if="sizeSm">

        <v-row align='center' justify='center'>
            <v-col cols='12' sm='2'>
                <router-link to="/" class="px-4">

                    <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
                </router-link>

            </v-col>
            <v-col cols='12' sm='5' :style="{'padding-left':padding  }">

                <h1 v-if="!this.textData">
                    Modellübersicht
                </h1>
                <h1 v-else>
                    {{textData}}
                </h1>
            </v-col>
            <v-col cols='12' sm='5'>

                <div class="container">
                    <h2 style="color:grey;font-size:18px;font-weight: 400;">
                        Hallo Carolin Schneider
                    </h2>
                    <v-btn flat @click="clickButton">

                        <v-icon icon=mdi-login></v-icon>
                    </v-btn>
                </div>

            </v-col>

        </v-row>

        <v-row>
            <v-spacer>

            </v-spacer>
            <v-col align='center' cols='12' md='12' sm='8'>

                <div v-if="!this.textData" style="borderRadius:20px;">
                    <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" hide-details="auto" v-model="inputValue" @input="$emit('filter',inputValue)">
                        <template v-slot:append-inner v-if="inputValue ">
                            <v-icon @click="$emit('get',inputValue=null)" icon='mdi-window-close'></v-icon>
                        </template>
                    </v-text-field>
                </div>
            </v-col>
            <v-spacer>

            </v-spacer>
        </v-row>

    </div>

    <div v-else-if="sizeXs">

        <v-row >

            <v-col style="display: flex;align-items: center;justify-content: space-between;">
                <router-link to="/" class="px-4">

                    <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
                </router-link>
                <h1  v-if="!this.textData">
                    Modellübersicht
                </h1>
                <h1  class="textXs" v-else>
                    {{textData}}
                </h1>

                <v-btn flat @click="clickButton">

                    <v-icon icon=mdi-login></v-icon>
                </v-btn>

            </v-col>

            <!-- <v-col cols='12' xs='2'>
                <router-link to="/" class="px-4">

                    <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
                </router-link>

            </v-col>

            <v-col cols='12' xs='8'>

                <h1 v-if="!this.textData">
                    Modellübersicht
                </h1>
                <h1 v-else>
                    {{textData}}
                </h1>
            </v-col>

            <v-col cols='12' xs='2'>

                <div class="container">
                    <v-btn flat @click="clickButton">

                        <v-icon icon=mdi-login></v-icon>
                    </v-btn>
                </div>

            </v-col> -->

        </v-row>

        <v-row>

            <v-spacer>

            </v-spacer>
            <v-col align='center' cols='8'>

                <div v-if="!this.textData" style="borderRadius:20px;">
                    <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" hide-details="auto" v-model="inputValue" @input="$emit('filter',inputValue)">
                        <template v-slot:append-inner v-if="inputValue ">
                            <v-icon @click="$emit('get',inputValue=null)" icon='mdi-window-close'></v-icon>
                        </template>
                    </v-text-field>
                </div>
            </v-col>
            <v-spacer>

            </v-spacer>

        </v-row>

    </div>

    <v-row v-else align='center' justify='center'>
        <v-col cols='12' lg='1' md='1'>
            <router-link to="/" class="px-4">

                <img style="width:65px; cursor: pointer;" src="/images/EberleinLogo2.png">
            </router-link>

        </v-col>
        <v-col cols='12' lg='3' md='4' :style="{'padding-left':padding  }">

            <h1 v-if="!this.textData">
                Modellübersicht
            </h1>
            <h1 v-else>
                {{textData}}
            </h1>

        </v-col>
        <v-col align='center' cols='12' lg='5' md='3'>

            <div v-if="!this.textData" style="borderRadius:20px;">
                <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" hide-details="auto" v-model="inputValue" @input="$emit('filter',inputValue)">
                    <template v-slot:append-inner v-if="inputValue ">
                        <v-icon @click="$emit('get',inputValue=null)" icon='mdi-window-close'></v-icon>
                    </template>
                </v-text-field>
            </div>
        </v-col>

        <v-col cols='12' lg='3' md='4'>

            <div class="container">
                <h2 style="color:grey;font-size:18px;font-weight: 400;">
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
export default {
    props: ['textData'],
    emits: ['filter'],

    data() {
        return {
            inputValue: '',
            loading: false,
            models: [],
            link: this.$route.params.id,

        }
    },
    rules: {
        required: value => !!value || 'Field is required',
    },

    // computed: {
    //     isMobile() {
    //         switch (this.$vuetify.breakpoint.name) {
    //             case "xs":
    //                 return true;
    //             case "sm":
    //                 return true;
    //             case "md":
    //                 return false;
    //             default:
    //                 return false;
    //         }
    //     },

    //     padding() {
    //         switch (this.$vuetify.breakpoint.name) {

    //             case "md":
    //                 return '20px';
    //             default:
    //                 return '';
    //         }

    //     }
    // },

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
                    return '35px';
                default:
                    return '';
            }

        },
        sizeSm() {
            switch (this.$vuetify.display.name) {

                case "sm":
                    return true;

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
        clickIcon() {

            alert('icon')
        },
        clickButton() {
            console.log(this.link);
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
.textXs{
    overflow: hidden;
	text-overflow:ellipsis;
}
</style>

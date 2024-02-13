<template>
<div>
    <!-- <login-nav class="loginNav" :textData="overview"></login-nav> -->
    <login-nav class="loginNav" :textData="overview"></login-nav>

    <v-row style="margin-top:90px;">
        <v-col>
            <div class="text-center">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            All Autos Info
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="item in autos" :key="item.id">
                            <v-list-item-title>Model Id:{{ item.model }}</v-list-item-title>
                            <v-list-item-title>Model Title:{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

        </v-col>
    </v-row>
    <v-row style="margin-top:30px;">

        <v-spacer> </v-spacer>
        <v-col cols='12' lg='11' md='11' sm='11' xs='6'>

            <v-sheet class="pa-2">
                <v-form fast-fail @submit.prevent='postHandler'>
                    <v-row>

                        <v-col cols='12' lg='4' md='4' sm='4'>
                            <v-text-field v-model="model" label='Model Id (nur Zahl)' :rules="[rules.required]" ref='model' @keypress="filter(event)"></v-text-field>
                            <v-text-field v-model="title" label='Title' :rules="[rules.required]" ref='title'></v-text-field>
                            <v-text-field v-model="kennzeichen" label='Kennzeichen' :rules="[rules.required]" ref='kennzeichen'></v-text-field>

                            <v-text-field v-model="name" label='Name' :rules="[rules.required,rules.length]" ref='name'></v-text-field>
                        </v-col>
                        <v-col cols='12' lg='4' md='4' sm='4'>
                            <v-text-field v-model="vorname" label='Vorname' :rules="[rules.required,rules.length]" ref='vorname'></v-text-field>
                            <v-text-field v-model="date" label='Date ex:(year-month-day)' :rules="[rules.required]" ref='date'></v-text-field>
                            <v-text-field v-model="vin" label='Vin' :rules="[rules.required]" ref='vin'></v-text-field>

                            <v-text-field v-model="firma" label='Firma' :rules="[rules.required]" ref='firma'></v-text-field>
                        </v-col>
                        <v-col cols='12' lg='4' md='4' sm='4'>
                            <!-- <v-text-field v-model="image" label='Image' ref='image'></v-text-field> -->
                            <v-file-input show-size counter multiple label="File input"></v-file-input>
                            <v-text-field v-model="hersteller" label='Hersteller' :rules="[rules.required]" ref='hersteller'></v-text-field>

                            <v-text-field v-model="kilometerstand" label='Kilometerstand' :rules="[rules.required]" ref='kilometerstand'></v-text-field>
                            <v-checkbox v-model="checkbox" label="I agree"></v-checkbox>

                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn type="submit" class="me-4">Submit</v-btn>
                            <v-btn @click="resetForm"> clear </v-btn>
                        </v-col>
                    </v-row>
                    <!-- 
                        <v-text-field v-model="model" label='Model Id (nur Zahl)' :rules="[rules.required]" ref='model' @keypress="filter(event)"></v-text-field>
                    <v-text-field v-model="title" label='Title' :rules="[rules.required]" ref='title'></v-text-field>
                    <v-text-field v-model="kennzeichen" label='Kennzeichen' :rules="[rules.required]" ref='kennzeichen'></v-text-field>

                    <v-text-field v-model="name" label='Name' :rules="[rules.required,rules.length]" ref='name'></v-text-field>
                    <v-text-field v-model="vorname" label='Vorname' :rules="[rules.required,rules.length]" ref='vorname'></v-text-field>
                    <v-text-field v-model="date" label='Date ex:(year-month-day)' :rules="[rules.required]" ref='date'></v-text-field>
                    <v-text-field v-model="vin" label='Vin' :rules="[rules.required]" ref='vin'></v-text-field>

                    <v-text-field v-model="firma" label='Firma' :rules="[rules.required]" ref='firma'></v-text-field>
                    <v-text-field v-model="image" label='Image' ref='image'></v-text-field>
                    <v-text-field v-model="hersteller" label='Hersteller' :rules="[rules.required]" ref='hersteller'></v-text-field>

                    <v-text-field v-model="kilometerstand" label='Kilometerstand' :rules="[rules.required]" ref='kilometerstand'></v-text-field>

                    <v-checkbox v-model="checkbox" label="I agree"></v-checkbox>

                    <v-btn type="submit" class="me-4">Submit</v-btn>
                    <v-btn @click="resetForm"> clear </v-btn> -->

                </v-form>
            </v-sheet>
        </v-col>
        <v-spacer> </v-spacer>

        <!-- <v-col cols='12' lg='5' md='5' sm='5' xs='6'>

            <v-shet>

                <v-list>
                    <v-list-subheader>All Models Info</v-list-subheader>

                    <v-list-item v-for="item in autos" :key="item.id">
                        <div style="display:flex;">

                            <p>Model Id: {{item.model}}</p>

                            <p class="pl-3">Model Title: {{item.title}}</p>

                        </div>
                    </v-list-item>
                </v-list>

            </v-shet>

        </v-col> -->
    </v-row>
</div>
</template>

<script>
import axios from 'axios'

import LoginNav from '../nav/LoginNav.vue'
export default {
    components: {
        LoginNav
    },

    data() {
        return {
            autos: [],
            overview: 'Add Auto',

            rules: {
                required: value => !!value || 'Field is required',
                length: value => value.length >= 2 || 'Too short name'
            },

            model: '',
            title: '',
            kennzeichen: '',
            name: '',
            vorname: '',
            date: '',
            vin: '',
            firma: '',
            image: '',
            hersteller: '',
            kilometerstand: '',
            checkbox: false,

        }

    },

    computed: {
        form() {
            return {
                model: this.model,
                title: this.title,
                kennzeichen: this.kennzeichen,

                name: this.name,
                vorname: this.vorname,
                date: this.date,
                vin: this.vin,
                firma: this.firma,
                image: this.image,
                hersteller: this.hersteller,
                kilometerstand: this.kilometerstand,

            }
        }
    },

    mounted() {
        this.postHandler(),
            this.getAutos()
    },

    methods: {

        alert() {
            if (!this.checkbox) {
                console.log('not agree');
                return
            }
            console.log(this.model);
        },
        resetForm() {
            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
            this.checkbox = false
        },
        postHandler() {
            if (!this.checkbox) {
                console.log('not agree');
                return
            }

            const formData = {
                model: this.model,
                title: this.title,
                kennzeichen: this.kennzeichen,
                name: this.name,
                vorname: this.vorname,
                date: this.date,
                vin: this.vin,
                firma: this.firma,
                hersteller: this.hersteller,
                kilometerstand: this.kilometerstand,

            }
            axios
                .post(axios.defaults.baseURL + 'autos/post/', formData)
                .then((response) => {
                    console.log(response.data);

                    this.$router.push("/stock/vehicle/" + response.data.id + "/overview")
                })
                .catch((error) => {
                    console.log(error);
                })

            // Object.keys(this.form).forEach(f => {
            //     this.$refs[f].reset()
            // })
            // this.checkbox = false
        },
        getAutos() {
            axios
                .get(axios.defaults.baseURL + `autos/`)
                .then((response) => {
                    this.autos = response.data;
                    console.log(this.autos);

                })
                .catch((error) => {

                    this.error = true;
                });
        },
        filter: function (evt) {
            evt = (evt) ? evt : window.event;
            let expect = evt.target.value.toString() + evt.key.toString();

            if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
                evt.preventDefault();
            } else {
                return true;
            }
        }

    }

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
</style>

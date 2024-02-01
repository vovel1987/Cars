<template>
<div class="my-5">
    <login-nav class="loginNav" :textData="fotos"></login-nav>
    <nav-second class="my-15" style="background-color: white"></nav-second>

    <div class="pa-6">
        <v-row>
            <v-col cols="6">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(2)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
            <v-col cols="6">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(3)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(4)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>

            </v-col>
            <v-col cols="4">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(5)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
            <v-col cols="4">
                <div v-if="this.images.length !==0  ">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(6)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(7)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
            <v-col cols="6">
                <div v-if="this.images.length !==0">
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" :src="getImage(8)">
                        <download-elem></download-elem>
                    </v-img>
                </div>
                <div v-else>
                    <v-img cover style="height: 350px; border-radius: 20px; position: relative" src='/images/tributo.jpg'>
                        <download-elem></download-elem>
                    </v-img>
                </div>
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
import LoginNav from "../nav/LoginNav.vue";
import NavSecond from "../nav/NavSecond.vue";
import axios from "axios";

import DownloadElem from "./DownloadElem.vue";

export default {
    components: {
        LoginNav,
        NavSecond,
        DownloadElem,
    },

    data() {
        return {
            fotos: "Fotos",
            images: [],

        };
    },
    created() {},
    mounted() {
        this.getData();
    },
    methods: {
        // getImage(auto) {

        //   console.log(this.images[0].get_image);
        //   return axios.defaults.url + auto.get_image;
        // },
        getImage(slotNumber) {

            if (!this.images || this.images.length == 0 || slotNumber > 8) {

                return console.error('Some error: images.length == 0 other slotNumber > 8');;
            }

            try {

                const auto = this.images.find((elem) => elem.slot === slotNumber);

                return axios.defaults.url + auto.get_image;
            } catch (error) {
                console.log(error);
            }
        },

        getData() {
            axios
                .get(axios.defaults.baseURL + `media/images/${this.$route.params.id}`)
                .then((response) => {
                    this.images = response.data;

                })
                .catch((error) => {
                    console.log(error);
                    this.error = true;
                });
        },
    },
};
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

<template>
<div class="my-5">

    <login-nav  class="loginNav"  :textData="fotos"></login-nav>
    <nav-second class="my-15" style="background-color:white;" ></nav-second>
    <div class="pa-6">
        <v-row>
            <v-col cols='6'>

                <v-img cover style=" height: 350px; border-radius: 20px; position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>

                    <!-- <v-row class="pa-6" align="start" justify="end">

                        <v-icon size='x-large' color='yellow'>mdi-download</v-icon>
                        <v-icon color='yellow' size='x-large'>
                            mdi-focus-field-horizontal
                        </v-icon>
                    </v-row> -->
                    <download-elem></download-elem>

                </v-img>

            </v-col>
            <v-col cols='6'>

                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols='4'>
                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>
            </v-col>
            <v-col cols='4'>
                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>
            </v-col>
            <v-col cols='4'>
                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols='6'>
                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>
            </v-col>
            <v-col cols='6'>
                <v-img cover style=" height: 350px; border-radius: 20px;  position: relative;" src='https://media.istockphoto.com/id/1401800610/de/foto/ferrari-488-rennstrecke.jpg?s=612x612&w=0&k=20&c=hMCHVCQOYf08laEHlnLf_mHaxUwH6QiHwGFVNKn-Do8='>
                    <download-elem></download-elem>
                </v-img>
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'

import DownloadElem from './DownloadElem.vue'

export default {
    components: {
        LoginNav,
        NavSecond,
        DownloadElem,

    },
    data() {
        return {
            fotos: 'Fotos'
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

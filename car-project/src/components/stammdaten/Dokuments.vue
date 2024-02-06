<template>
<div class="my-5">

    <login-nav class="loginNav" :textData="documents"></login-nav>
    <nav-second style="background-color:white" class="my-15"></nav-second>

    <v-container>
        <v-row>
            <v-col>
                <h2>
                    Fahrzeugdokumente
                </h2>
            </v-col>
            <v-col align='end'>
                <v-icon style="cursor:pointer;color:grey;" @click="addDokument">
                    mdi-plus-box
                </v-icon>
            </v-col>
        </v-row>
        <v-divider>

        </v-divider>
        <v-row>
            <v-col cols='12' v-for="item in fahrzeugDoc" :key="item.id">
                <div class="info" v-if='item.status === true'>
                    <span>{{item.name}}</span>
                    <span>{{item.vorname}}</span>
                    <span>{{item.title}}</span>
                </div>
                <div class="py-4" v-else>
                    <span style="color:grey; font-size:16px;"> Keine Dokumente vorhanden! </span>
                </div>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2>
                    Bewertung
                </h2>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <!-- <v-row class="my-4">
            <v-col>

                <v-card style="display: flex; flex-direction: row;justify-content: space-around;align-items: center;}">
                    <v-col>
                        <span style="font-size:16px">
                            Berwertung vom:
                        </span>
                        <h3>
                            19.08.2022
                        </h3>
                        <span  style="font-size:14px" >
                            erstellt von Dennis Ranft
                        </span>

                    </v-col>
                    <v-col align='end'>
                        <v-icon @click="addBewertung"  style="cursor:pointer;color:grey;">
                            mdi-dock-right
                        </v-icon>
                    </v-col>
                </v-card>
            </v-col>
        </v-row> -->

    </v-container>
</div>
</template>

<script>
import LoginNav from '../nav/LoginNav.vue'
import NavSecond from '../nav/NavSecond.vue'
export default {
    components: {
        LoginNav,
        NavSecond
    },
    data() {
        return {
            documents: 'Dokumente',
            fahrzeugDoc: [{
                id: 1,
                title: 'Ferrari',
                name: 'Ranft',
                vorname: 'Dennis',
                status: false,
            }],

        }
    },
    methods: {
        addDokument() {
            alert('Add Dokument')
        },
        addBewertung(){
            alert('Add Bewertung')
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

.info {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px;
    padding: 20px 0;
}
</style>

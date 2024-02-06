<template>
<div class="my-5">
    <login-nav class="loginNav" :textData="status"></login-nav>
    <nav-second class="my-15" style="background-color:white;"></nav-second>

    <v-container>
        <v-row>
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-textarea style="background-color:white;" label="Fahrzeugkommentar(wird automatisch gespeichert)"></v-textarea>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>
        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8" style="padding:20px 24px">

                <v-row style="background-color:white; padding: 0 23px">
                    <v-col cols="3" class="d-flex flex-row ga-5" v-for="[key,value] in Object.entries(zubehors)" :key="key" :keyItem='key' :value='value'>
                        <div v-if="key !== 'zusatzInfo'">
                            <span>
                                {{key.charAt(0).toUpperCase() + key.slice(1)}}:
                            </span>
                            <v-icon :color="value ? 'green' : 'red'" :icon="value ? itemOk.icon : itemOk.icon2"> </v-icon>
                        </div>

                    </v-col>

                </v-row>
                <v-row style="background-color:white; padding: 0 23px;
">
                    <v-col v-if="this.zubehors.zusatzInfo">
                        <span> Zusatzinformation: </span>
                        <span class="px-5">
                            {{ this.zubehors.zusatzInfo }}
                        </span>
                    </v-col>
                </v-row>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>
        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-data-table :headers="headers" :items="reifens" class="elevation-1" id="reifen">
                    <template #bottom></template>
                </v-data-table>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>

        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-card  class="d-flex align-center pa-3">
                    <span> {{this.zubehors.bremse}}? </span>
                    <v-icon :color=" this.zubehors.bremse? 'green' : 'red'" :icon=" this.zubehors.bremse ?itemOk.icon : itemOk.icon2 " class="pl-4"> </v-icon>
                </v-card>
                
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>
        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-data-table :headers="bremseHeaders" :items="reifens" class="elevation-1" id="reifen" :sort-asc-icon="false">
                    <template #bottom></template>
                </v-data-table>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>

        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-data-table :headers="fahwerk" :items="reifens" class="elevation-1" id="reifen" :sort-asc-icon="false">
                    <template #bottom></template>
                </v-data-table>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>
        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-container class="pa-3">
                    <v-row style="background-color: yellow">
                        <v-col>
                            Lackschichtenmessung (wird gemessen, in µm)
                            <!-- <v-data-table :headers="lackFahrSeite" :items="lackFahrItems" class="elevation-1" id='reifen' :sort-asc-icon="false">

                                <template #bottom></template>

                            </v-data-table> -->
                        </v-col>
                    </v-row>
                    <v-row class="grayRow">
                        <v-col align='center'> Fahrerseite </v-col>
                        <v-col align='center'>Kotflügel</v-col>
                        <v-col align='center'> Tür</v-col>
                        <v-col align='center'> Seitenpanele</v-col>
                        <v-col align='center'> Schweller</v-col>
                    </v-row>
                    <v-row>
                        <v-col align='center'> </v-col>
                        <v-col align='center'>{{this.lackStatus.kotflügelFS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.türFS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.seitenpaneleFS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.schwellerFS}}</v-col>
                    </v-row>
                    <v-row class="grayRow">
                        <v-col align='center'> Beifahrerseite </v-col>
                        <v-col align='center'>Kotflügel</v-col>
                        <v-col align='center'> Tür</v-col>
                        <v-col align='center'> Seitenpanele</v-col>
                        <v-col align='center'> Schweller</v-col>
                    </v-row>
                    <v-row>
                        <v-col align='center'> </v-col>
                        <v-col align='center'>{{this.lackStatus.kotflügelBS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.türBS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.seitenpaneleBS}}</v-col>
                        <v-col align='center'> {{this.lackStatus.schwellerBS}}</v-col>
                    </v-row>
                    <v-row class="grayRow">
                        <v-col align='center'> Front </v-col>
                        <v-col align='center'>Stoßstange</v-col>
                        <v-col align='center'> Motorhaube</v-col>
                        <v-col align='center'> </v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                    <v-row>
                        <v-col align='center'> </v-col>
                        <v-col align='center'>{{this.lackStatus.stosStangeF}}</v-col>
                        <v-col align='center'> {{this.lackStatus.motorhaubeF}}</v-col>
                        <v-col align='center'> </v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                    <v-row class="grayRow">
                        <v-col align='center'> Heck </v-col>
                        <v-col align='center'>Heck</v-col>
                        <v-col align='center'> Stoßstange</v-col>
                        <v-col align='center'>Spoiler </v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                    <v-row>
                        <v-col align='center'> </v-col>
                        <v-col align='center'>{{this.lackStatus.heckHeck}}</v-col>
                        <v-col align='center'> {{this.lackStatus.stosStangeHeck}}</v-col>
                        <v-col align='center'> {{this.lackStatus.spoilerHeck}}</v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                    <v-row class="grayRow">
                        <v-col align='center'> Dach </v-col>
                        <v-col align='center'>Dach</v-col>
                        <v-col align='center'> Hardtop</v-col>
                        <v-col align='center'> </v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                    <v-row class='letztColumn'>
                        <v-col align='center'> </v-col>
                        <v-col align='center'>{{this.lackStatus.dach}}</v-col>
                        <v-col align='center'> {{this.lackStatus.hardTopDach}}</v-col>
                        <v-col align='center'> </v-col>
                        <v-col align='center'> </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
    </v-container>
</div>
</template>

<script>
import LoginNav from "../nav/LoginNav.vue";
import NavSecond from "../nav/NavSecond.vue";
import axios from 'axios'

export default {
    components: {
        LoginNav,
        NavSecond,

    },
    data() {
        return {
            status: "Status",
            zusatz: "Penske Verbandtasche 3 Teilig",
            carbonBremseStatus: true,
            zubehors: {},
            reifens:[],
            lackStatus:{},
        

            lackmessung: [{
                title: "Lackschichtenmessung (wird gemessen, in µm)",
                align: "start",
                key: "fahrerseite",
            }, ],
            itemOk: {
                icon: "mdi-check",
                icon2: "mdi-window-close",
            },
            bremseHeaders: [{
                    title: "Bremse",
                    align: "center",
                    value: "reifen",
                },
                {
                    title: "Verscließ (%)",
                    align: "center",
                    value: "verschlies",
                },
                {
                    title: "Beläge(mm)",
                    align: "center",
                    value: "belage",
                },
            ],
            // bremseItems: [{
            //         reifen: "VL",
            //         verschlies: 3,
            //         belage: 10,
            //     },
            //     {
            //         reifen: "VR",
            //         verschlies: 3,
            //         belage: 10,
            //     },
            //     {
            //         reifen: "HL",
            //         verschlies: 4,
            //         belage: 10,
            //     },
            //     {
            //         reifen: "HR",
            //         verschlies: 4,
            //         belage: 10,
            //     },
            // ],

            fahwerk: [{
                    title: "Fahwerk",
                    align: "center",
                    value: "reifen",
                },
                {
                    title: "Radlagerspiel",
                    align: "center",
                    value: "radspiel",
                },
                {
                    title: "Lenkungsspiel",
                    align: "center",
                    value: "lenspiel",
                },
                {
                    title: "Spurstange",
                    align: "center",
                    value: "stange",
                },
            ],
            fahwerkItems: [{
                    reifen: "VL",
                    radspiel: "Nein",
                    lenspiel: "Nein",
                    stange: "Nein",
                },
                {
                    reifen: "VR",
                    radspiel: "Nein",
                    lenspiel: "Nein",
                    stange: "Nein",
                },
                {
                    reifen: "HL",
                    radspiel: "Nein",
                    lenspiel: "Nein",
                    stange: "Nein",
                },
                {
                    reifen: "HR",
                    radspiel: "Nein",
                    lenspiel: "Nein",
                    stange: "Nein",
                },
            ],

            headers: [{
                    title: "Reifen",
                    align: "start",
                    value: "reifen",
                },
                {
                    title: "Reifenname",
                    align: "end",
                    value: "reifenname",
                },
                {
                    title: "Profiltiefe(i m a )",
                    align: "end",
                    value: "profil",
                },
                {
                    title: "Reifendimension",
                    align: "end",
                    value: "dimension",
                },
                {
                    title: "Lastindex",
                    align: "end",
                    value: "index",
                },
                {
                    title: "DOT",
                    align: "end",
                    value: "dot",
                },
                {
                    title: "TPMS",
                    align: "end",
                    value: "tpms",
                },
                {
                    title: "Winterreifen",
                    align: "end",
                    value: "winter",
                },
            ],
           
            // reifen: [{
            //         reifen: "VL",
            //         reifenname: "Michelin Pilot Super Sport k3",
            //         profil: "5 6 6",
            //         dimension: "245 35 R20",
            //         index: 95,
            //         dot: 4020,
            //         tpms: 255,
            //         winter: "Nein",
            //     },
            //     {
            //         reifen: "VR",
            //         reifenname: "Michelin Pilot Super Sport k3",
            //         profil: "5 6 6",
            //         dimension: "245 35 R20",
            //         index: 95,
            //         dot: 4020,
            //         tpms: 255,
            //         winter: "Nein",
            //     },
            //     {
            //         reifen: "HL",
            //         reifenname: "Michelin Pilot Super Sport k3",
            //         profil: "6 6 6",
            //         dimension: "305 30 R20",
            //         index: 103,
            //         dot: 3920,
            //         tpms: 255,
            //         winter: "Nein",
            //     },
            //     {
            //         reifen: "HR",
            //         reifenname: "Michelin Pilot Super Sport k3",
            //         profil: "6 6 6",
            //         dimension: "305 30 R20",
            //         index: 103,
            //         dot: 3920,
            //         tpms: 255,
            //         winter: "Nein",
            //     },
            // ],
        };
    },
    mounted() {
        this.getData()
        this.getReifen()
        this.getLackMessung()
    },
    methods: {

        getData() {
            axios
                .get(axios.defaults.baseURL + `status/auto/${this.$route.params.id}`)
                .then((response) => {
                    this.zubehors = response.data[0]
                    

                })
                .catch((error) => {
                    console.log(error);
                    
                })
        },
        getReifen(){
             axios
                .get(axios.defaults.baseURL + `status/reifen/${this.$route.params.id}`)
                .then((response) => {
                    this.reifens = response.data
                    
                    
                })
                .catch((error) => {
                    console.log(error);
                })

        },

        getLackMessung(){
            axios
               .get(axios.defaults.baseURL + `status/lack/${this.$route.params.id}`)
               .then((response) =>{
                 this.lackStatus =response.data[0]
                 
                    
               })
               .catch((error) =>{
                console.log(error);
               })



        }

    }
};
</script>

<style scoped>
/* .v-data-table :deep(.v-data-table__td){
    background-color: aquamarine;
} */
.section-calories {
    color: green !important;
}

#reifen :deep(th) {
    background-color: yellow;
}

#reifen :deep(tr):hover {
    background-color: rgb(216, 213, 213);
}

.grayRow {
    background-color: lightgray;
}

.letztColumn {
    border-bottom: 1px solid lightgray;
}

.loginNav {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: white;

}
</style>

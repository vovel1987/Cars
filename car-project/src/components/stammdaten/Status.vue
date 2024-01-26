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
                    <v-col cols="3" class="d-flex flex-row ga-5" v-for="(item, i) in items" :key="i">
                        <div v-if="item.value === true">
                            <span>
                                {{ item.displayName }}
                            </span>
                            <v-icon color="green" :icon="itemOk.icon"> </v-icon>
                        </div>
                        <div v-else>
                            <span>
                                {{ item.displayName }}
                            </span>
                            <v-icon color="error" :icon="itemOk.icon2"> </v-icon>
                        </div>
                    </v-col>
                </v-row>
                <v-row style="background-color:white; padding: 0 23px;
">
                    <v-col>
                        <span> Zusatzinformation: </span>
                        <span class="px-5">
                            {{ zusatz }}
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
                <v-data-table :headers="headers" :items="boats" class="elevation-1" id="reifen" :sort-asc-icon="false">
                    <template #bottom></template>
                </v-data-table>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>

        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-card v-if="carbonBremseStatus === true" class="d-flex align-center pa-3">
                    <span> CarbonBremse? </span>
                    <v-icon color="green" :icon="itemOk.icon" class="pl-4"> </v-icon>
                </v-card>
                <div v-else>
                    <span> CarbonBremse? </span>
                    <v-icon color="error" :icon="itemOk.icon2"> </v-icon>
                </div>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>
        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-data-table :headers="bremseHeaders" :items="bremseItems" class="elevation-1" id="reifen" :sort-asc-icon="false">
                    <template #bottom></template>
                </v-data-table>
            </v-col>
            <v-spacer> </v-spacer>
        </v-row>
        <v-divider> </v-divider>

        <v-row class="py-5">
            <v-spacer> </v-spacer>
            <v-col cols="8">
                <v-data-table :headers="fahwerk" :items="fahwerkItems" class="elevation-1" id="reifen" :sort-asc-icon="false">
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
                        <v-col align='center'>212</v-col>
                        <v-col align='center'> 241</v-col>
                        <v-col align='center'> 282</v-col>
                        <v-col align='center'> -</v-col>
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
                        <v-col align='center'>193</v-col>
                        <v-col align='center'> 209</v-col>
                        <v-col align='center'> 306</v-col>
                        <v-col align='center'> -</v-col>
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
                        <v-col align='center'>-</v-col>
                        <v-col align='center'> 194</v-col>
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
                        <v-col align='center'>-</v-col>
                        <v-col align='center'> -</v-col>
                        <v-col align='center'> -</v-col>
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
                        <v-col align='center'>227</v-col>
                        <v-col align='center'> -</v-col>
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

            lackmessung: [{
                title: "Lackschichtenmessung (wird gemessen, in µm)",
                align: "start",
                key: "fahrerseite",
            }, ],
            itemOk: {
                icon: "mdi-check",
                icon2: "mdi-window-close",
            },
            lackFahrSeite: [{
                    title: "Fahrerseite",
                    align: "center",
                    key: "fahrerseite",
                },
                {
                    title: "Kotflügel",
                    align: "center",
                    key: "kot",
                },
                {
                    title: "Tür",
                    align: "center",
                    key: "tur",
                },
                {
                    title: "Seitepanele",
                    align: "center",
                    key: "panele",
                },
                {
                    title: "Schweller",
                    align: "center",
                    key: "schweller",
                },
            ],

            lackFahrItems: [{
                fahrerseite: null,
                kot: 212,
                tur: 241,
                panele: 282,
                schweller: null,
            }, ],
            items: [{
                    displayName: "Zweitschlüssel:",
                    value: false,
                },
                {
                    displayName: "Paletot:",
                    value: true,
                },
                {
                    displayName: "Rad 8-fach:",
                    value: false,
                },
                {
                    displayName: "Windschott:",
                    value: false,
                },
                {
                    displayName: "FBAKS:",
                    value: false,
                },
                {
                    displayName: "Reifenfüllkit:",
                    value: true,
                },
                {
                    displayName: "Servicemappe:",
                    value: false,
                },
                {
                    displayName: "Elektronikkarte:",
                    value: false,
                },
                {
                    displayName: "Bordwerkzeuge:",
                    value: true,
                },
                {
                    displayName: "Warndreieck:",
                    value: true,
                },
                {
                    displayName: "Radiokarte:",
                    value: false,
                },
                {
                    displayName: "Ladegerät:",
                    value: true,
                },
                {
                    displayName: "Verbandskasten:",
                    value: true,
                },
                {
                    displayName: "Garantieheft:",
                    value: false,
                },
            ],
            bremseHeaders: [{
                    title: "Bremse",
                    align: "center",
                    key: "bremse",
                },
                {
                    title: "Verscließ (%)",
                    align: "center",
                    key: "verschlies",
                },
                {
                    title: "Beläge(mm)",
                    align: "center",
                    key: "belage",
                },
            ],
            bremseItems: [{
                    bremse: "VL",
                    verschlies: 3,
                    belage: 10,
                },
                {
                    bremse: "VR",
                    verschlies: 3,
                    belage: 10,
                },
                {
                    bremse: "HL",
                    verschlies: 4,
                    belage: 10,
                },
                {
                    bremse: "HR",
                    verschlies: 4,
                    belage: 10,
                },
            ],

            fahwerk: [{
                    title: "Fahwerk",
                    align: "center",
                    key: "reifen",
                },
                {
                    title: "Radlagerspiel",
                    align: "center",
                    key: "radspiel",
                },
                {
                    title: "Lenkungsspiel",
                    align: "center",
                    key: "lenspiel",
                },
                {
                    title: "Spurstange",
                    align: "center",
                    key: "stange",
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
                    title: "reifen",
                    align: "start",
                    key: "reifen",
                },
                {
                    title: "Reifenname",
                    align: "end",
                    key: "reifenname",
                },
                {
                    title: "Profiltiefe(i m a )",
                    align: "end",
                    key: "profil",
                },
                {
                    title: "Reifendimension",
                    align: "end",
                    key: "dimension",
                },
                {
                    title: "Lastindex",
                    align: "end",
                    key: "index",
                },
                {
                    title: "DOT",
                    align: "end",
                    key: "dot",
                },
                {
                    title: "TPMS",
                    align: "end",
                    key: "tpms",
                },
                {
                    title: "Winterreifen",
                    align: "end",
                    key: "winter",
                },
            ],
            boats: [{
                    reifen: "VL",
                    reifenname: "Michelin Pilot Super Sport k3",
                    profil: "5 6 6",
                    dimension: "245 35 R20",
                    index: 95,
                    dot: 4020,
                    tpms: 255,
                    winter: "Nein",
                },
                {
                    reifen: "VR",
                    reifenname: "Michelin Pilot Super Sport k3",
                    profil: "5 6 6",
                    dimension: "245 35 R20",
                    index: 95,
                    dot: 4020,
                    tpms: 255,
                    winter: "Nein",
                },
                {
                    reifen: "HL",
                    reifenname: "Michelin Pilot Super Sport k3",
                    profil: "6 6 6",
                    dimension: "305 30 R20",
                    index: 103,
                    dot: 3920,
                    tpms: 255,
                    winter: "Nein",
                },
                {
                    reifen: "HR",
                    reifenname: "Michelin Pilot Super Sport k3",
                    profil: "6 6 6",
                    dimension: "305 30 R20",
                    index: 103,
                    dot: 3920,
                    tpms: 255,
                    winter: "Nein",
                },
            ],
        };
    },
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

<template>
<div>
    <login-nav :textData="status"></login-nav>
    <nav-second></nav-second>
    <h1>STATUS</h1>
    <v-container>
        <v-textarea label='Fahrzeugkommentar(wird automatisch gespeichert)'></v-textarea>
        <v-divider>

        </v-divider>
        <v-row>
            <v-col>
                <v-row>
                    <v-col cols='12' class="d-flex flex-column ga-5">
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Zweitschlüssel:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Paletot:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Rad 8-fach:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Windschott:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col cols='12' class="d-flex flex-column ga-5">
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                FBAKS:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Reifenfüllkit:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Servicemappe:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Elektronikkarte:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col cols='12' class="d-flex flex-column ga-5">
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Bordwerkzeug:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Warndreieck:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Radiokarte:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>

                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col cols='12' class="d-flex flex-column ga-5">
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Ladegerät:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Verbandskasten:
                            </span>
                            <v-icon :icon='itemOk.icon'>

                            </v-icon>
                        </div>
                        <div style="display: flex;align-items: center; flex-direction: row;">
                            <span>
                                Garantieheft:
                            </span>
                            <v-icon :icon='itemOk.icon2'>

                            </v-icon>
                        </div>

                    </v-col>
                </v-row>
            </v-col>
     

        </v-row>
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
            status: 'Status',
            itemOk: {
                icon: 'mdi-check',
                icon2: 'mdi-window-close'
            }
        }
    }
}
</script>

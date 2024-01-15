<template>
<div>
    <v-app-bar>
        <v-row  align='center' justify='center' >
            <v-col cols="1">
                <img style="width:65px" src="/images/EberleinLogo2.png">
            </v-col>
            <v-col cols="3">
                <text-nav-haupt></text-nav-haupt>
            </v-col>

            <v-spacer />

            <v-col cols="3"  style="marginTop:20px">
                <input-nav></input-nav>
            </v-col>

            <v-spacer />

            <v-col col="4">
                <login-nav></login-nav>
            </v-col>

        </v-row>
    </v-app-bar>
    <div >

        <filter-bar>

        </filter-bar>
    </div>
    

  
</div>
</template>

<script>
import FilterBar from './filterbar/FilterBar.vue'
import InputNav from './nav/InputNav.vue'
import LoginNav from './nav/LoginNav.vue'
import TextNavHaupt from './nav/TextNavHaupt.vue'

export default {
    components: {
        TextNavHaupt,
        InputNav,
        LoginNav,
        FilterBar
    },

    data() {
        return {
            iconImage: ''
        }
    }
}
</script>s

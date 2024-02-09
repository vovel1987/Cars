<template>
<v-container style="marginTop:55px; marginBottom:10px">

    <v-row v-if="sizeXs" align='center'>
        <v-col cols='8'>

            <!-- <v-text-field  style="width:190px font-size:14px" label="Neu Bestandsaufnahme"
             prepend-inner-icon="mdi-plus" variant="solo">

            </v-text-field> -->
            <router-link to="/stock/addvehicle/">

                <div>
                    <v-btn flat>
                        <v-icon>mdi-plus</v-icon>
                        <p>Neu Bestandsaufnahme</p>

                    </v-btn>
                </div>
            </router-link>

        </v-col>

        <v-col cols='2'>
            <v-btn flat>
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

        </v-col>

        <v-col cols='2'>

            <v-btn border='none' flat>
                <v-icon>mdi-currency-eur</v-icon>
                <v-tooltip activator="parent" location="start center">Beipreisung unfertig</v-tooltip>
            </v-btn>
        </v-col>

    </v-row>

    <v-row v-else align='center'>
        <v-col>

            <!-- <v-text-field  style="width:190px font-size:14px" label="Neu Bestandsaufnahme"
             prepend-inner-icon="mdi-plus" variant="solo">

            </v-text-field> -->
            <router-link to="/stock/addvehicle/">

                <div>
                    <v-btn flat>
                        <v-icon>mdi-plus</v-icon>
                        <p>Neu Bestandsaufnahme</p>

                    </v-btn>
                </div>
            </router-link>

        </v-col>

        <v-col cols='auto'>
            <v-btn flat>
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

        </v-col>

        <v-col cols='auto'>

            <v-btn border='none' flat>
                <v-icon>mdi-currency-eur</v-icon>
                <v-tooltip activator="parent" location="start center">Beipreisung unfertig</v-tooltip>
            </v-btn>
        </v-col>

    </v-row>

</v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    },

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

        sizeXs() {

            switch (this.$vuetify.display.name) {
                case "xs":
                    return true;
            }
        }
    }
}
</script>

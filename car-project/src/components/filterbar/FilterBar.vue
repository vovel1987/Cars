<template>
<v-container style="marginTop:55px; marginBottom:10px">

    <v-row v-if="sizeXs" align='center' style="padding-right:10px;">
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
            <v-btn v-if="!link" flat @click=" filterHauptCard">
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

            <v-btn v-else flat @click=" filter">
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

        </v-col>

        <v-col cols='2'>

            <v-btn v-if="!link" border='none' flat @click='filterPreisModels'>
                <v-icon>mdi-currency-eur</v-icon>
                <v-tooltip activator="parent" location="start center">Beipreisung unfertig</v-tooltip>

            </v-btn>

            <v-btn v-else border='none' flat @click='filterPreis'>
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

            <v-btn v-if="!link" flat @click=" filterHauptCard">
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

            <v-btn v-else flat @click=" filter">
                <v-icon>mdi-tools</v-icon>
                <v-tooltip activator="parent" location="start center">Gutachten unfertig</v-tooltip>

            </v-btn>

        </v-col>

        <v-col cols='auto'>

            <v-btn v-if="!link" border='none' flat @click='filterPreisModels'>
                <v-icon>mdi-currency-eur</v-icon>
                <v-tooltip activator="parent" location="start center">Beipreisung unfertig</v-tooltip>

            </v-btn>

            <v-btn v-else border='none' flat @click='filterPreis'>
                <v-icon>mdi-currency-eur</v-icon>
                <v-tooltip activator="parent" location="start center">Beipreisung unfertig</v-tooltip>
            </v-btn>
        </v-col>

    </v-row>

</v-container>
</template>

<script>
export default {
    emits: ['schadenFilter', 'preisFilter', 'hauptCardFilter', 'modelPreisFilter'],

    data() {
        return {
            value: false,
            link: this.$route.params.id,

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
    },
    methods: {
        filter() {

            this.value = !this.value
            this.$emit('schadenFilter', this.value)

        },
        filterPreis() {
            this.value = !this.value
            this.$emit('preisFilter', this.value)

        },

        filterHauptCard() {
            this.value = !this.value
            this.$emit('hauptCardFilter', this.value)

        },
        filterPreisModels() {
            this.value = !this.value
            this.$emit('modelPreisFilter', this.value)

        }

    },
}
</script>

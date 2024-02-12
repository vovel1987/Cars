<template>
<div>

    <v-slide-group v-if="sizeXs" show-arrows>
        <v-slide-group-item>
            <v-tabs class="tabs" centered grow height="60px" v-model="activeTab">
                <v-tab v-for="tab in tabs" :key="tab.id" :name='tab.name' :to="tab.route" exact>{{ tab.name }}</v-tab>
            </v-tabs>

        </v-slide-group-item>
    </v-slide-group>

    <v-tabs v-else class="tabs" centered grow height="60px" v-model="activeTab">
        <v-tab v-for="tab in tabs" :key="tab.id" :name='tab.name' :to="tab.route" exact>{{ tab.name }}</v-tab>
    </v-tabs>
    <!-- <router-view></router-view> -->

    <!-- <v-tabs v-model="activeTab" align-items='center' grow slider-color="yellow">
        <router-link to="/stock/vehicle/:id/overview">
            <v-tab :value="1">Stammdaten</v-tab>

        </router-link>
        <router-link to="/stock/vehicle/:id/pictures">
            <v-tab :value="2">FOTOS</v-tab>

        </router-link>
        <router-link to="/stock/vehicle/:id/bewertung">

            <v-tab :value="3">BEWERTUNG</v-tab>
        </router-link>
        <router-link to="/stock/vehicle/:id/damages">

            <v-tab :value="4">SCHADENLISTE</v-tab>
        </router-link>
        <router-link to="/stock/vehicle/:id/status">

            <v-tab :value="5">STATUS</v-tab>
        </router-link>
        <router-link to="/stock/vehicle/:id/documents">

            <v-tab :value="6">DOKUMENTE</v-tab>
        </router-link>

    </v-tabs> -->

</div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            activeTab: '/stock/vehicle/:id/overview',
            tabs: [{
                    id: 1,
                    name: "Stammdaten",
                    route: '/stock/vehicle/' + this.$route.params.id + '/overview',
                    title: 'Ferrari'
                },
                {
                    id: 2,
                    name: "Fotos",
                    route: '/stock/vehicle/' + this.$route.params.id + '/pictures',
                },
                {
                    id: 3,
                    name: "BEWERTUNG",
                    route: '/stock/vehicle/' + this.$route.params.id + '/bewertung',
                },
                {
                    id: 4,
                    name: "SCHADENLISTE",
                    route: '/stock/vehicle/' + this.$route.params.id + '/damages',
                },
                {
                    id: 5,
                    name: "STATUS",
                    route: '/stock/vehicle/' + this.$route.params.id + '/status',
                },
                {
                    id: 6,
                    name: "DOKUMENTE",
                    route: '/stock/vehicle/' + this.$route.params.id + '/documents',
                },

            ]
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

        sizeSm() {
            switch (this.$vuetify.display.name) {

                case "sm":
                    return true;

            }
        },
        sizeXs() {
            switch (this.$vuetify.display.name) {

                case "xs":
                    return true;

            }
        },

    },

}
</script>

<style >

</style>

<template>
<v-row v-if="sizeXs"   style=" margin-top:20px">
    <v-col cols='12' class="ma-3">
        <v-row>
            <v-col cols='12'>

                <v-img cover style="border-radius:10px;height:150px" :src='image_schaden'>

                </v-img>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols='8'>
                <div>
                    <span style="font-size:14px">
                        {{autos_seite}} |
                    </span>
                    <span style="font-size:14px">
                        {{component_autos_seite}} |
                    </span>
                    <span style="font-size:14px">
                        {{element_in_component}}
                    </span>
                    <h3>
                        {{schaden_descr}}
                    </h3>
                </div>
                <span style="font-size:14px">
                    {{schaden_value}}

                </span>
            </v-col>
            <v-col style="display: flex; flex-direction: column;justify-content: space-evenly;align-items: center;">
                <v-icon @click="$emit('download')" style="cursor:pointer" size='40' color='yellow'>mdi-download</v-icon>
                <v-icon @click="$emit('focus')" style="cursor:pointer" color='yellow' size='40'>
                    mdi-focus-field-horizontal
                </v-icon>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span style="font-size:14px;text-align:center;">
                    Preis
                </span>
            </v-col>
            <v-col>
                <span style="font-size:14px;text-align:center;">
                    Wird behoben
                </span>
            </v-col>
            <v-col>
                <span style="font-size:14px;text-align:center;">
                    Behoben
                </span>

            </v-col>

        </v-row>
        <v-row>

            <v-col  style=" display:flex; align-items: center;">
               <v-icon @click="$emit('priceInfo')" style="cursor:pointer" size='40'>mdi-tools</v-icon>
                <span style="font-size:14px">-{{preis}} </span>
                <span style="font-size:14px">€ </span>
            </v-col>

            <v-col>
              <v-checkbox></v-checkbox>
            </v-col>

            <v-col>
                 <v-checkbox></v-checkbox>
            </v-col>

        </v-row>

    </v-col>

</v-row>

<v-row v-else style="background-color: white; margin:20px; border-radius:10px;" align='center'>
    <v-col cols='6'>
        <v-row>
            <v-col cols='5'>
                <v-img cover style="border-radius:10px;height:150px" :src='image_schaden'>

                </v-img>
            </v-col>
            <v-col style=" display: flex; flex-direction: column;justify-content: center;align-items: flex-start;height:120px;margin-top:10px" cols='5'>
                <div>
                    <span style="font-size:14px">
                        {{autos_seite}} |
                    </span>
                    <span style="font-size:14px">
                        {{component_autos_seite}} |
                    </span>
                    <span style="font-size:14px">
                        {{element_in_component}}
                    </span>
                    <h3>
                        {{schaden_descr}}
                    </h3>
                </div>

                <span style="font-size:14px">
                    {{schaden_value}}

                </span>
            </v-col>
            <v-col cols='1' style="display: flex; flex-direction: column;justify-content: space-evenly;align-items: center;">
                <v-icon @click="$emit('download')" style="cursor:pointer" size='40' color='yellow'>mdi-download</v-icon>
                <v-icon @click="$emit('focus')" style="cursor:pointer" color='yellow' size='40'>
                    mdi-focus-field-horizontal
                </v-icon>
            </v-col>
        </v-row>

    </v-col>
    <v-col>

    </v-col>
    <v-col cols='4'>
        <v-row>

            <v-col cols='6' style=" display:flex; align-items: center;">
                <v-icon @click="$emit('priceInfo')" style="cursor:pointer" size='40'>mdi-tools</v-icon>
                <span style="font-size:14px">-{{preis}} </span>
                <span style="font-size:14px">€ </span>
            </v-col>
            <v-col cols='3'>

                <v-checkbox></v-checkbox>

            </v-col>
            <v-col cols='3'>
                <v-checkbox></v-checkbox>
            </v-col>

        </v-row>

    </v-col>

</v-row>
</template>

<script>
export default {
    props: [
        'autos_seite', 'component_autos_seite', 'element_in_component', 'schaden_descr', 'schaden_value', 'image_schaden', 'preis'
    ],
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
        },

    },

}
</script>

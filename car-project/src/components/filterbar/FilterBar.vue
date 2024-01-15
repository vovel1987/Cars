<template>
<v-container style="height: 56px; marginTop:70px;">

    <v-row align='center'>
        <v-col>
         

            <v-text-field  style="width:190px font-size:14px" label="Neu Bestandsaufnahme"
             prepend-inner-icon="mdi-plus" variant="solo">
               
            </v-text-field>
       

        </v-col>
        <v-spacer />
        <v-col cols='auto'>
            <v-btn flat=false >
                <v-icon>mdi-cog</v-icon>

            </v-btn>

        </v-col>

        <v-col cols='auto'>

            <v-btn border='none'  flat=false >
                <v-icon>mdi-currency-usd</v-icon>

            </v-btn>
        </v-col >
      
    </v-row>

</v-container>
</template>

<script>
export default {
    data() {

    }
}
</script>

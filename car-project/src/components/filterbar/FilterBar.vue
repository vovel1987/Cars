<template>
<v-container style="height: 56px; marginTop:70px; marginBottom:30px">

    <v-row align='center'>
        <v-col>
         

            <!-- <v-text-field  style="width:190px font-size:14px" label="Neu Bestandsaufnahme"
             prepend-inner-icon="mdi-plus" variant="solo">
               
            </v-text-field> -->
            <div>
                <v-btn flat >
                <v-icon>mdi-plus</v-icon>
                <p>Neu Bestandsaufnahme</p>

            </v-btn>
            </div>
       

        </v-col>
        <v-spacer />
        <v-col cols='auto'>
            <v-btn flat >
                <v-icon>mdi-tools</v-icon>
                  <v-tooltip activator="parent" location="start center" >Gutachten unfertig</v-tooltip>

            </v-btn>

        </v-col>

        <v-col cols='auto'>

            <v-btn border='none'  flat >
                <v-icon>mdi-currency-eur</v-icon>
              <v-tooltip activator="parent" location="start center" >Beipreisung unfertig</v-tooltip>
            </v-btn>
        </v-col >
      
    </v-row>

</v-container>
</template>

<script>
export default {
    data() {
       return {
        
       }
    }
}
</script>

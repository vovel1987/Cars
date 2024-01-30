<template>
<v-card class="mx-auto" max-width="250px" height='280px' style="border-radius:20px" @click="clickMe">

    <v-img :src="this.image" height='180px' cover>

    </v-img>
    <div class="container">
        <p style="font-weight:bold; font-size:20px"> {{title}}</p>
        <div>
            <v-icon color='red'>mdi-currency-eur</v-icon>
            <v-icon color='red'>mdi-tools</v-icon>
        </div>

    </div>
    <p style="margin:10px; font-size:16px; color:grey">
        Vorhandene Fahrzeuge:{{fahrzeuge}}
        
    </p>

</v-card>
</template>

<script>
export default {
    props:['title','id','image','fahrzeuge'],
    
methods:{
    clickMe(){
       
    }
},

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c7c1c1;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
}
</style>

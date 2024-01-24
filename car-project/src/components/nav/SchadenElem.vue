<template>
<v-row style="background-color: white; margin:20px; border-radius:10px;" align='center'>
    <v-col cols='5'>
        <v-row>
            <v-col cols='5'>
                <v-img cover style="border-radius:10px" src='/images/inner.jpg'>

                </v-img>
            </v-col>
            <v-col style=" display: flex; flex-direction: column;justify-content: space-around;align-items: flex-start;" cols='5'>
                <div>
                    <span style="font-size:14px">
                        {{text1}} |
                    </span>
                    <span style="font-size:14px">
                        {{text2}} |
                    </span>
                    <span style="font-size:14px">
                        {{text3}}
                    </span>
                    <h3>
                        {{text4}}
                    </h3>
                </div>

                <span style="font-size:14px">
                    {{text5}}

                </span>
            </v-col>
            <v-col cols='1' style="display: flex; flex-direction: column;justify-content: space-evenly;align-items: center;">
                <v-icon  @click="$emit('download')" style="cursor:pointer" size='50' color='yellow'>mdi-download</v-icon>
                <v-icon @click="$emit('focus')" style="cursor:pointer" color='yellow' size='50'>
                    mdi-focus-field-horizontal
                </v-icon>
            </v-col>
        </v-row>

    </v-col>
    <v-col>

    </v-col>
    <v-col cols='3'>
        <v-row align='center'>
            <v-col cols='6' style="padding-left:20px; display:flex; align-items: center;">
                <v-icon @click="$emit('priceInfo')" style="cursor:pointer" size='55'>mdi-tools</v-icon>
                <span style="font-size:14px">- €</span>
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
        'text1', 'text2', 'text3', 'text4', 'text5',
    ]

}
</script>

<template>
<div>

    <h1>Add Auto</h1>
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent=alert>
            <v-text-field v-model="model" label="Model"></v-text-field>

            <v-text-field v-model="title" label="Titel Auto"></v-text-field>
            <v-checkbox v-model="checkbox"></v-checkbox>

            <v-btn type="submit" class="me-4">Submit</v-btn>
            <v-btn @click="clear"> clear </v-btn>

        </v-form>
    </v-sheet>
</div>
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    email,
    required
} from '@vuelidate/validators'
export default {

    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {

            model: '',
            title: '',
            kennzeichen: '',
            name: '',
            vorname: '',
            date: '',
            vin: '',
            firma: '',
            image: '',
            hersteller: '',
            kilometerstand: '',
            checkbox: false,

            // rules: {
            //     model: {
            //         required
            //     },
            //     title: {
            //         required
            //     },
            //     kennzeichen: {
            //         required
            //     },
            //     name: {
            //         required
            //     },
            //     vorname: {
            //         required
            //     },
            //     date: {
            //         required
            //     },
            //     vin: {
            //         required
            //     },
            //     firma: {
            //         required
            //     },
            //     image: {
            //         required
            //     },
            //     hersteller: {
            //         required
            //     },
            //     kilometerstand: {
            //         required
            //     },

            // },
            // v$: useVuelidate(this.rules, this.state),

            // firstName: '',
            // firstNameRules: [
            //     value => {
            //         if (value ? .length > 3) return true

            //         return 'First name must be at least 3 characters.'
            //     },
            // ],
            // lastName: '',
            // lastNameRules: [
            //     value => {
            //         if (/[^0-9]/.test(value)) return true

            //         return 'Last name can not contain digits.'
            //     },
            // ],

        }

    },
    validations() {
        return {
            model:{required},
            state:{required},
            checkbox:{required},

        }

    },

    methods: {
        // clear() {
        //     this.v$.value.$reset()

        //     for (const [key, value] of Object.entries(state)) {
        //         state[key] = value
        //     }
        // },
        // alert(){
        //     console.log('Info');
        // }


    }

}
</script>

<style scoped>

</style>

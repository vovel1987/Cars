<template>
<div style="borderRadius:20px">
    <v-text-field label="Suche" prepend-inner-icon="mdi-magnify" variant ='solo' ></v-text-field>
</div>
</template>

<script>
export default {
    data: () => ({

        rules: {
            required: value => !!value || 'Field is required',
        },
    })

}
</script>

<style>

</style>

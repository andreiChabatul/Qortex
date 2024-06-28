<template>
    <h3 class="q-pl-xs text-weight-medium">Add Song</h3>
    <div class="q-pa-xs" style="width: 400px; margin: 0 auto">

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="name" label="Name song *" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please enter name song']" />

            <q-input filled type="number" v-model="number" label="Serial number *" lazy-rules :rules="[
                val => val !== null && val !== '' || 'Please Serial number'
            ]" />

            <q-select filled v-model="album" :options="albumsOptions()" label="Select album" emit-value map-options
                :rules="[val => val && val.length > 0 || 'Please select album']" />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

<script setup lang="ts">

import apiServices from 'src/services/api.services';
import { useCounterStore } from 'src/stores/app';
import { ref } from 'vue';

const name = ref<string>('');
const album = ref<string>('');
const number = ref<number>(0);

const store = useCounterStore();
store.loadingAlbums();
store.loadingArtists();

const albumsOptions = () => {
    return store.albums.map((album) => {
        return {
            label: album.name,
            value: album.id
        }
    })
}

const onReset = () => {
    name.value = '';
    album.value = '';
    number.value = 0;
}

const onSubmit = () => {
    apiServices.addNewSong({
        name: name.value,
        idAlbum: album.value,
        number: Number(number.value),
    }
    );
}




defineOptions({
    name: 'AddSong'
});

</script>

<style lang="sass" scoped>

</style>
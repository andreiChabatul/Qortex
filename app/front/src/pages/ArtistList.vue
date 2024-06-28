<template>
    <h3 class="q-pl-xs text-weight-medium">Artist List</h3>

    <div class="fit row wrap justify-center items-start content-start artist-container q-pa-xs">

        <q-circular-progress v-if="store.loading" indeterminate size="90px" :thickness="0.2" color="blue"
            track-color="transparent" />

        <ArtistItem v-else v-for="artist in store.artists" :key="artist.id" :name="artist.name" :desc="artist.desc"
            :kind="artist.kind" :avatar="artist.avatar">
        </ArtistItem>
        
    </div>
</template>

<script setup lang="ts">

import ArtistItem from 'components/ArtistItem.vue';
import { useCounterStore } from 'src/stores/app';
const store = useCounterStore();
store.loadingArtists();

defineOptions({
    name: 'ArtistList'
});

</script>

<style lang="sass" scoped>
.artist-container
  gap: 20px
</style>
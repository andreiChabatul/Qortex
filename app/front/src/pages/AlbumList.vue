<template>
    <h3 class="q-pl-xs text-weight-medium">Album List</h3>
    <div class="fit row wrap justify-center items-start content-start album-container q-pa-xs">

        <q-circular-progress v-if="store.loading" indeterminate size="90px" :thickness="0.2" color="blue"
            track-color="transparent" />

        <AlbumItem v-else v-for="album in store.albums" :key="album.id" :name="album.name" :desc="album.desc"
            :avatar="album.avatar" :artist="album.artist" :year="album.year" :songs="album.songs">
        </AlbumItem>

    </div>
</template>

<script setup lang="ts">

import AlbumItem from 'components/AlbumItem.vue';
import { useCounterStore } from 'src/stores/app';

const store = useCounterStore();
store.loadingAlbums();

defineOptions({
    name: 'AlbumList'
});

</script>

<style lang="sass" scoped>
.album-container
  gap: 20px
</style>
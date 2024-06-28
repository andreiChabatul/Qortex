<template>
    <q-card class="artist-card">
        <img :src="`${avatar}.webp`" style="height: 150px; object-fit: contain;">

        <q-card-section>
            <div class="text-h6">{{ name }}</div>
            <div class="text-subtitle2">{{ kind }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            {{ desc }}
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { IArtistProps } from 'src/types';

defineOptions({
    name: 'ArtistItem'
});

withDefaults(defineProps<IArtistProps>(), {
    id: '',
    name: '',
    avatar: '',
    kind: '',
    desc: '',
});

</script>

<style lang="sass" scoped>
.artist-card
  width: 200px
</style>
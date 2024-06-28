<template>
    <q-card class="album-card" flat bordered>
        <q-img :src="`${avatar}.webp`" style="width: 100%; object-fit: contain;">
            <div class="absolute-bottom text-h5  text-center"> {{ name }} </div>
        </q-img>
        <q-card-section>
            <div class="text-overline text-orange-9">{{ year }}</div>
            <div class="text-subtitle2 q-mb-xs">{{ artist }}</div>
            <div class="text-caption text-grey"> {{ desc }} </div>
        </q-card-section>

        <q-card-actions>
            <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded" />
        </q-card-actions>

        <q-slide-transition>
            <div v-show="expanded">
                <q-separator />
                <q-list bordered separator>
                    <q-item-section v-if="!songs?.length">Нету песен</q-item-section>
                    <q-item v-else v-for="song in songs" :key="song.id" clickable v-ripple
                        class="row wrap justify-space items-center" style="gap: 10px;">
                        <q-img :src="`${song.avatar}.webp`" style="width: 30px; object-fit: contain;" />
                        <span>{{ song.number }}. </span>
                        <span>{{ song.name }}</span>
                    </q-item>
                </q-list>
            </div>
        </q-slide-transition>
    </q-card>
</template>

<script setup lang="ts">

import { IAlbum } from 'src/types';
import { ref } from 'vue';

const expanded = ref(false)

defineOptions({
    name: 'AlbumItem'
});

withDefaults(defineProps<IAlbum>(), {
    id: '',
    name: '',
    avatar: '',
    year: 0,
    artist: '',
    desc: '',
    songs: undefined
});

</script>

<style lang="sass" scoped>
.album-card
  width: 280px
</style>
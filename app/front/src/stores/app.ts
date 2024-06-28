import { defineStore } from 'pinia'
import apiServices from 'src/services/api.services'
import { IAlbum, IArtistProps } from 'src/types';

export const useCounterStore = defineStore('app', {
    state: () => ({
        loading: false,
        artists: [] as Array<IArtistProps>,
        albums: [] as Array<IAlbum>
    }),

    actions: {
        async loadingArtists() {
            this.artists = [];
            this.loading = true;
            const artists = await apiServices.getAllArtist();
            this.loading = false;
            this.artists = artists
        },
        async loadingAlbums() {
            this.albums = [];
            this.loading = true;
            const albums = await apiServices.getAllAlbums();
            this.loading = false;
            this.albums = albums
        },
    },
})
import { IAlbum, IArtistProps, IDB, ISong } from 'src/types';
import { DB } from './data';

export default new class FakeDB {
    nameDBLocal = 'Qortex_DB';
    delayServer = 300;
    DB: IDB = {
        artists: [],
        songs: [],
        albums: []
    };

    initDB(): void {
        const local = localStorage.getItem(this.nameDBLocal);
        if (!local) localStorage.setItem(this.nameDBLocal, JSON.stringify(DB));
        this.DB = local ? JSON.parse(local) : DB;
    }

    async getAllArtist(): Promise<Array<IArtistProps>> {
        return new Promise((resolve) => setTimeout(() => resolve(this.DB.artists), this.delayServer));
    }

    async getAllAlbums(): Promise<Array<IAlbum>> {
        console.log(this.DB.songs)
        return new Promise((resolve) => setTimeout(() => resolve(this.DB.albums), this.delayServer));
    }

    async getAllSongs(id: string): Promise<Array<ISong>> {
        return new Promise((resolve) => setTimeout(() =>
            resolve(this.DB.songs.filter((song) =>
                song.idAlbum === id
            ).sort((a, b) => a.number - b.number)
            ), this.delayServer));
    }

    async getNameArtist(id: string): Promise<string> {
        return new Promise((resolve) => setTimeout(() =>
            resolve(this.DB.artists.filter((artist) =>
                artist.id === id)[0]?.name || 'empty'
            ), this.delayServer));
    }

    recordSong(song: ISong) {
        this.DB.songs.push(song);
        localStorage.setItem(this.nameDBLocal, JSON.stringify(this.DB));
    }

}
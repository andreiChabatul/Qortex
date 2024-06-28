import FakeDb from 'src/fakeDB/FakeDb';
import { IAlbum, IArtistProps, ISong } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

export default new class APIServices {

    async getAllArtist(): Promise<Array<IArtistProps>> {
        try {
            return await FakeDb.getAllArtist();
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    async getAllAlbums(): Promise<Array<IAlbum>> {
        try {
            const albums = await FakeDb.getAllAlbums();
            return Promise.all(albums.map(async (album) => {
                return {
                    ...album,
                    songs: await FakeDb.getAllSongs(album.id),
                    artist: await FakeDb.getNameArtist(album.artist)
                }
            }))
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    addNewSong(value: Omit<ISong, 'id' | 'avatar'>) {
        FakeDb.recordSong({ ...value, avatar: 'song', id: uuidv4() })
    }

}
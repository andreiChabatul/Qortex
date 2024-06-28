export interface IDefaultEntity {
    id: string,
    name: string,
    avatar: string,
}

export interface IArtistProps extends IDefaultEntity{
    kind: string,
    desc: string,
}

export interface ISong extends IDefaultEntity {
    number: number,
    idAlbum: string
}

export interface IAlbum extends IDefaultEntity {
    artist: string,
    desc: string,
    year: number,
    songs?: ISong[]
}

export interface IDB {
    artists: Array<IArtistProps>,
    songs: Array<ISong>,
    albums: Array<IAlbum>
}

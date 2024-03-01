class FullMusicItemDto {
    public id: number;
    public name: string;
    public created: Date;
    public lastModified: Date;
    public shortDescription: string ;
    public longDescription: string;
    public size: number;
    public instrument: string;

    constructor(
        id: number,
        name: string,
        created: Date,
        lastModified: Date,
        shortDescription: string,
        longDescription: string,
        size: number,
        instrument: string
        ) {
            this.id = id;
            this.name = name;
            this.created = created;
            this.lastModified = lastModified;
            this.shortDescription = shortDescription;
            this.longDescription = longDescription;
            this.size = size;
            this.instrument = instrument;
    }
}

class CreateMusicItemDto {
    public name: string;
    public shortDescription: string;
    public longDescription: string;
    public size: number;
    public instrument: string;

    constructor(
        name: string,
        shortDescription: string,
        longDescription: string,
        size: number,
        instrument: string
        ) {
            this.name = name;
            this.shortDescription = shortDescription;
            this.longDescription = longDescription;
            this.size = size;
            this.instrument = instrument;
    }
}

export { FullMusicItemDto, CreateMusicItemDto };

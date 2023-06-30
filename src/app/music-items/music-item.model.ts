export class MusicItem {
    public id: number | undefined;
    public name: string = '';
    public created: Date | undefined;
    public lastModified: Date | undefined;
    public shortDescription: string = '';
    public longDescription: string = '';
    public size: number = 0;
    public instrument: string = '';

    //factory method for creating a music item initially
    public static fromCreation(name: string, shortDescription: string, longDescription: string, size: number, instrument: string): MusicItem {
        const mi = new MusicItem();
        mi.name = name;
        mi.shortDescription = shortDescription;
        mi.longDescription = longDescription;
        mi.size = size;
        mi.instrument = instrument;
        return mi;
    }
}

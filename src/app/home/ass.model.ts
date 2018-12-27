export class AssModel {
    public id: number;
    public name: string;
    public thumbnail: string;
    public age: number;
    public weight: number;
    public height: number;
    public hair_color: string;
    public professions: [];
    public friends: [];
    public show: boolean;
    constructor(args: {
        id: number,
        name: string,
        thumbnail: string,
        age: number,
        weight: number,
        height: number,
        hair_color: string,
        professions: [],
        friends: [],
    }) {
        this.id = args.id;
        this.name = args.name;
        this.thumbnail = args.thumbnail;
        this.show = true;
        this.age = args.age;
        this.weight = args.weight;
        this.height = args.height;
        this.hair_color = args.hair_color;
        this.professions = args.professions;
        this.friends = args.friends;

    }
}

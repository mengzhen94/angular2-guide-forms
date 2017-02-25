export class Hero {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        // alterEgo is optional
        public alterEgo?: string
    ){ }

}
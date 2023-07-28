export default interface Task {
    name: string;
    parameters: {
        [prop: string] : any;
    }
}
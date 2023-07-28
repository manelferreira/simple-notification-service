export default interface Task {
    type: string;
    parameters: {
        [prop: string] : any;
    }
}
import UseCaseRequest from "../../helpers/useCases/useCaseRequest";

export default class CreateUserRequest implements UseCaseRequest {
    public readonly name: string;
    public readonly email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
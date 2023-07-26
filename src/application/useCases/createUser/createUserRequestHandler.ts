import { User } from "../../../domain/notifiables/user";
import UserRepository from "../../../domain/notifiables/userRepository";
import RequestHandler from "../../helpers/useCases/requestHandler";
import CreateUserRequest from "./createUserRequest";
import CreateUserResponse from "./createUserResponse";

export default class CreateUserRequestHandler implements RequestHandler<CreateUserRequest, CreateUserResponse> {
    private readonly userRepository : UserRepository;

    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async handle(request: CreateUserRequest): Promise<CreateUserResponse> {
        let user = User.create(request.name, request.email);

        user = await this.userRepository.create(user);

        return new CreateUserResponse();
    }
}
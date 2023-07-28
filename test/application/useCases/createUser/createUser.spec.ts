import CreateUserRequest from "../../../../src/application/useCases/createUser/createUserRequest";
import CreateUserRequestHandler from "../../../../src/application/useCases/createUser/createUserRequestHandler";
import InMemoryUserRepository from "../../../mocks/repositories/inMemoryUserRepository";


describe ("Create user use case", () => {
    test("creates a user and returns its id", async () => {
        const userRepository = new InMemoryUserRepository();
        const sut = new CreateUserRequestHandler(userRepository);
        const request = new CreateUserRequest("Sub-zero", "sub_zero@mk.com");

        await sut.handle(request);

        let registeredUser = await userRepository.findByEmailAddress("sub_zero@mk.com");
        expect(registeredUser.name.fullname).toBe("Sub-zero");
    });
})
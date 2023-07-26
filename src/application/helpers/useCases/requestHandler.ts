import UseCaseRequest from "./useCaseRequest";
import UseCaseResponse from "./useCaseResponse";

export default interface RequestHandler<R extends UseCaseRequest, A extends UseCaseResponse> {
    handle(request: R) : Promise<A>;
}
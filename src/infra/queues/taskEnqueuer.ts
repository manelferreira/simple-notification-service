import Task from "./task";

export default interface TaskEnqueuer {
    enqueue(task: Task);
}
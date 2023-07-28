import Task from "../../../src/infra/queues/task";
import TaskEnqueuer from "../../../src/infra/queues/taskEnqueuer";

export default class FakeTaskEnqueuer implements TaskEnqueuer {
    queue : Task[] = [];

    enqueue(task: Task) {
        this.queue.push(task);
    }

    dequeueAs<T extends Task>() {
        return this.queue.pop() as T;
    }

    size() {
        return this.queue.length;
    }
}
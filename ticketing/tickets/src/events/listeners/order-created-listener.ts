import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, Subjects } from "@ydangi/common";
import { queueGroupName } from "./queeu-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {}
}

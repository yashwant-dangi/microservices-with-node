import { Publisher, OrderCreatedEvent, Subjects } from "@ydangi/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

import { Subjects, Publisher, OrderCancelledEvent } from "@ydangi/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

import { Subjects, Publisher, PaymentCreatedEvent } from "@ydangi/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

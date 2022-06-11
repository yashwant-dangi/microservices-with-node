import { Publisher, Subjects, TicketUpdatedEvent } from "@ydangi/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

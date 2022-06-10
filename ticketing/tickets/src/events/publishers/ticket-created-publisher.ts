import { Publisher, Subjects, TicketCreatedEvent } from "@ydangi/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

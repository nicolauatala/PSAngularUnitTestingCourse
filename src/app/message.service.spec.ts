import { MessageService } from './message.service';

describe(MessageService.name, () => {
  let service: MessageService;

  beforeEach(() => {
  });

  it('should have no messages when start', () => {
    service = new MessageService();
    expect(service.messages.length).toBe(0);
  });

  it('should add messages when add is called', () => {
    service = new MessageService();
    service.add('new message');
    expect(service.messages.length).toBe(1);
  });

  it('should clear messages when clear is called', () => {
    service = new MessageService();
    service.add('new message');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});

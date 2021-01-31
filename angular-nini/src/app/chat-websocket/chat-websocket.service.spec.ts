import { TestBed } from '@angular/core/testing';

import { ChatWebsocketService } from './chat-websocket.service';

describe('ChatWebsocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatWebsocketService = TestBed.get(ChatWebsocketService);
    expect(service).toBeTruthy();
  });
});

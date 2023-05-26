import { Injectable } from '@nestjs/common';
import { ChatMessage, Humanloop } from 'humanloop';

@Injectable()
export class AppService {
  getHello(): string {

    const humanloop = new Humanloop({
      basePath: 'https://api.humanloop.com/v4',
      apiKey: process.env.HUMANLOOP_API_KEY,
    });

    return 'Welcome!';
  }
}

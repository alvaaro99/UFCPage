import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SimulatorService {
  constructor(private httpClient: HttpService) {}
}

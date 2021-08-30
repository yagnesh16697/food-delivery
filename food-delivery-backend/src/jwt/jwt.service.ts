import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt-module-options.interface';
import { CONFIG_OPTIONS } from './jwt.constants';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
    private readonly configService: ConfigService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  sign(payload: object): string {
    return jwt.sign(payload, this.configService.get('TOKEN_SECRET'));
  }
}

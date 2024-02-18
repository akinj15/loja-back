import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { environment } from 'config/';
import { Payload } from 'models';
import { UserService } from 'modules/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token)
      throw new HttpException('invalid session', HttpStatus.BAD_REQUEST);

    try {
      const payload: Payload = await this.jwtService.verifyAsync(token, {
        secret: environment.JWT_SECRET,
      });

      request['person'] = await this.userService.findById(payload.sub);
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    if (!request.headers?.authorization) return undefined;

    const [type, authorization] = request.headers.authorization.split(' ');

    return type === 'Bearer' ? authorization : undefined;
  }
}

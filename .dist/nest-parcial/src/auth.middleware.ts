import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { url } from 'inspector';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req,res,next){
    console.log(req,req,url)
    next();
  }
}

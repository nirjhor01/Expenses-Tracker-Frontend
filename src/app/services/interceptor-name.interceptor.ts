import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorNameInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

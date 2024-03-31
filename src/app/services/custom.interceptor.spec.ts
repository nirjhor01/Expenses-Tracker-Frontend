import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { customInterceptor} from './custom.interceptor'; // Assuming the correct class name is CustomInterceptor

describe('CustomInterceptor', () => {
  let interceptor: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = new customInterceptor();// Instantiate CustomInterceptor class
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

import { HttpHeaders } from '@angular/common/http';

export const BASE_URL = 'http://localhost:3000'


export function getHeaders(token) {
    return {
      headers: new HttpHeaders().set('Authorization', `${token}`)
    }
}


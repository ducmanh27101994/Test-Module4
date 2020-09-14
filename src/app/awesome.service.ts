import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAwesome} from './iawesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  private readonly URL = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.URL);
  }

  addAwesome(awesome: Partial<IAwesome>): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.URL, awesome);
  }

  deleteAwesome(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }

  updateAwesome(awesome: IAwesome, id: number): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.URL + '/' + id, awesome);
  }

  getAwesomeId(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.URL + '/' + id);
  }

}

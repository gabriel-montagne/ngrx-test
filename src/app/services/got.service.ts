import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import concat from 'ramda/src/concat';
import find from 'ramda/src/find';
import includes from 'ramda/src/includes';
import {GoTHouse} from '../model/got';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoTService {

  constructor(private http: HttpClient) {
  }

  public getAllHouses(): Observable<GoTHouse[]> {
    return from(this.getAllPages());
  }

  private getAllPages(): Promise<GoTHouse[]> {
    return new Promise<GoTHouse[]>(
      resolve => {
        const firstPageUrl = `${environment.GOT_API_PATH}/houses?pageSize=20`;
        let houses: GoTHouse[] = [];

        const getNextPage = (nextPageUrl) => {
          const sub = this.http.get<GoTHouse[]>(nextPageUrl, { observe: 'response' })
            .subscribe((res) => {
              sub.unsubscribe();
              houses = concat(res.body, houses);
              const linkHeader = res.headers.get('Link');
              const links = linkHeader.split(',');
              const nextLink = find(v => includes('next', v), links);

              if (nextLink) {
                const nextUrl = nextLink.match(/(?!<).*(?=>)/)[0];
                getNextPage(nextUrl);
              } else {
                resolve(houses);
              }
            });
        };

        getNextPage(firstPageUrl);
      }
    );
  }
}

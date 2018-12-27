import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssModel } from './ass.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DownloadUrlService {
    constructor(private http: HttpClient) { }

    public getData(): Observable<AssModel[]> {
        return this.http.get<any>('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').pipe(
            map(res => res.Brastlewark.map(assModel => new AssModel (assModel))),
        );
    }

}/*
assModel.id,
assModel.name,
assModel.thumbnail,
assModel.age,
assModel.weight
assModel.height,
assModel.hair_color,
assModel.professions,
assModel.friends },*/

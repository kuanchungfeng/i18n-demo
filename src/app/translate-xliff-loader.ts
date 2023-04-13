import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { XMLParser } from 'fast-xml-parser';
import { map } from 'rxjs/operators';

interface TranslateObj {
  source: string;
  target: string;
  id: number;
}

@Injectable()
export class TranslateXliffLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    const url = `locale/${lang}.xlf`;

    return this.http.get(url, { responseType: 'text' }).pipe(
      map((data) => {
        const options = {
          attributeNamePrefix: '',
          ignoreAttributes: false,
          parseAttributeValue: true,
          ignoreNameSpace: true,
        };
        const parser = new XMLParser(options);
        const jsonObj = parser.parse(data);
        const transUnits = jsonObj.xliff.file.body['trans-unit'];
        // console.log(transUnits);
        const transformedObj = transUnits.reduce(
          (result: any, item: TranslateObj) => {
            result[item.source] = item.target;
            return result;
          },
          {}
        );
        // console.log(transformedObj);
        return transformedObj;
      })
    );
  }
}

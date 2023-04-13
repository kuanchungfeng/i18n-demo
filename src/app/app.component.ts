import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public helloLocalize: string = '';
  public nameLocalize: string = '';
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    // this.translateService.setTranslation('zh-tw', {
    //   HELLO: '你好!',
    // });
    // this.translateService.setTranslation('jp', {
    //   HELLO: 'こんにちは',
    // });
    // this.translateService.setTranslation('en-us', {
    //   HELLO: 'Hello',
    // });
  }

  ngOnInit(): void {
    // this.helloLocalize = $localize`HELLO`;
    // this.nameLocalize = $localize`NAME`;
    // console.log($localize`HELLO`);
    // this.translateService.use('zh-tw');
    // this.translateService.use('messages.zh-Hant');
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    const hello = this.translateService.instant('HELLO');
    console.log(hello);
    // this.translateService.get('HELLO').subscribe((res: string) => {
    //   console.log(res);
    // });
    // console.log(this.translateService.getLangs());
    // this.translateService.get('HELLO').subscribe((res: string) => {
    //   console.log('get example');

    //   console.log(res);
    // });
  }
}

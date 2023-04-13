import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateXliffLoader } from './translate-xliff-loader';

// import localeJa from '@angular/common/locales/ja';
// import { registerLocaleData } from '@angular/common';

// export function createLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './locale/', '.xlf');
// }

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

// export function createXliffLoader(http: HttpClient) {
//   return new TranslateXliffLoader(http, './locale/', '.xlf');
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // TranslateModule.forRoot({
    //   defaultLanguage: 'en-us',
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient],
    //   },
    // }),
    TranslateModule.forRoot({
      defaultLanguage: 'messages.ja-JP',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateXliffLoader,
        deps: [HttpClient],
      },
    }),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (xliffLoader: TranslateXliffLoader) => xliffLoader,
    //     deps: [TranslateXliffLoader, HttpClient]
    //   },
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

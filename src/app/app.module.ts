// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { HelloService } from './services/hello.service'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClient // Asegúrate de que HttpClientModule está aquí
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}

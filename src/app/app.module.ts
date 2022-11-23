import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { JourneyComponent } from './journey/journey.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MatIconModule } from '@angular/material/icon';
import { HiddenDirective } from './hidden.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    JourneyComponent,
    ContactFormComponent,
    FooterComponent,
    LegalNoticeComponent,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
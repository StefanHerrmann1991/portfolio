import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { JourneyComponent } from './journey/journey.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
{ path: '', component: IntroductionComponent },
{ path: 'legal-notice', component: LegalNoticeComponent },
{ path: 'about', component: JourneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

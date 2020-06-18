import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {AboutComponent} from '../../pages/about/about.component';
import {WorkExComponent} from '../../pages/work-ex/work-ex.component';
import {EducationComponent} from '../../pages/education/education.component';
import {SkillsComponent} from '../../pages/skills/skills.component';
import {ContactComponent} from '../../pages/contact/contact.component';
import {ProjectsComponent} from '../../pages/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    AboutComponent,
    WorkExComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent
  ]
})
export class AdminLayoutModule {}

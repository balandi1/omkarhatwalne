import { Routes } from "@angular/router";

import {AboutComponent} from '../../pages/about/about.component';
import {WorkExComponent} from '../../pages/work-ex/work-ex.component';
import {EducationComponent} from '../../pages/education/education.component';
import {SkillsComponent} from '../../pages/skills/skills.component';
import {ContactComponent} from '../../pages/contact/contact.component';
import {ProjectsComponent} from '../../pages/projects/projects.component';

export const AdminLayoutRoutes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "workEx", component: WorkExComponent },
  { path: "education", component: EducationComponent },
  { path: "skills", component: SkillsComponent },
  { path: "contact", component: ContactComponent },
  { path: "projects", component: ProjectsComponent }
];

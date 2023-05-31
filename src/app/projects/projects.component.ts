import { Component } from '@angular/core';
import { ProjectData, data } from 'src/infos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: ProjectData[] = data.projects
}

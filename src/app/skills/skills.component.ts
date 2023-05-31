import { Component } from '@angular/core';
import { LanguageSkill, Skills, data } from 'src/infos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skills = data.skills
  frontSkills: LanguageSkill[] = []
  commonSkills: LanguageSkill[] = []
  backSkills: LanguageSkill[] = []

  /**
   *
   */
  constructor() {
    this.skills.languages.forEach((val, index, array) => {
      let skills = this.frontSkills;

      if (val.side == "back") skills = this.backSkills;
      else if (val.side == "fullstack") skills = this.commonSkills;

      skills.push(val)
  })
  }
}

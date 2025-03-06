import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from '../../services/team-member.service';
import { TeamMemberModel } from '../../services/team-member.model';
import { TemplateBindingParseResult } from '@angular/compiler';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-mebers',
  imports: [NgStyle, NgFor],
  templateUrl: './mebers.component.html',
  styleUrl: './mebers.component.css',
})
export class MebersComponent implements OnInit {
  teamMembers: TeamMemberModel[] = [];
  constructor(private _teamMemberService: TeamMemberService) {}
  ngOnInit(): void {
    this.teamMembers = this._teamMemberService.teamMembers;
  }
}

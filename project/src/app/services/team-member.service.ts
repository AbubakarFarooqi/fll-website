import { Injectable } from '@angular/core';
import { TeamMemberModel } from './team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  teamMembers: TeamMemberModel[] = [
    {
      Name: 'Ibrahim Tahir',
      Age: 9,
      Hobbies: 'reading books,coding',
      img: 'images/programmer.jpg',
    },
    {
      Name: 'Ameen.A',
      Age: 10,
      Hobbies: 'playing Fortnite, Roblox, reading books, and playing in our trampoline',
      img: 'images/fortnite.jpg',
    },
    {
      Name: 'Ameen.e',
      Age: 9,
      Hobbies: 'soccer',
      img: 'images/football.jpg',
    },
    {
      Name: 'Ashika',
      Age: 8,
      Hobbies: 'Reading books, making arts and crafts',
      img: 'images/reading.jpg',
    },
    {
      Name: 'Husna',
      Age: 8,
      Hobbies: 'jewlery making, arts and craft and Scratch',
      img: 'images/art.jpg',
    },
    {
      Name: 'Nadirah',
      Age: 8,
      Hobbies: 'arts and crafts',
      img: 'images/art.jpg',
    },
    
  ];
  constructor() {}
}

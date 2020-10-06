import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title:'Cadastro de alunos ',
      icon: 'supervised_user_circle',
      routeUrl: '/students'
    }
  }

  ngOnInit(): void {
  }

  navigateToStudentCreate(): void {
    this.router.navigate(['/students/create'])
  }

}

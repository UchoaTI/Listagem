import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {

  students: Student[]
  displayedColumns = ['id', 'nome', 'matricula', 'email','action']
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.read().subscribe(students => {
      this.students = students
      console.log(students)
    })
  }

}

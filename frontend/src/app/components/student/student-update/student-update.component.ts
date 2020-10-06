import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  student: Student

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.readById(id).subscribe(student =>{
      this.student = student;
    })
  }

  updateStudent(): void {
    this.studentService.update(this.student).subscribe(() => {
      this.studentService.showMessage('Dados alterados')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }
}

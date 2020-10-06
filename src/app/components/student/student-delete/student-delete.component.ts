import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  student: Student

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.studentService.readById(id).subscribe(student=>{
      this.student = student
    })
  }
  deleteStudent():void{
    this.studentService.delete(this.student.id).subscribe(() =>{
      this.studentService.showMessage('aluno excluído do banco de dados ')
      this.router.navigate(['/students'])
    })
  }

  cancel():void{
    this.router.navigate(['/students'])
  }
}

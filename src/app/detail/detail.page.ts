import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Estudiante } from "../models/estudiante";
import { EstudianteService } from "../services/estudiante.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  public myForm:FormGroup;
  public nombreEditable=false;
  public curpEditable=false;
  public ncontrolEditable=false;
  public edadEditable=false;
  public student: Estudiante;

  constructor(private service: EstudianteService, private actroute: ActivatedRoute,
              private router:Router, public fb:FormBuilder, private toast: ToastController) {                 
                this.actroute.queryParams.subscribe(
                  params => {
                    if(params && params.special){
                      this.student= JSON.parse(params.special) as Estudiante;
                      console.log(this.student);
                    }
                  }
                );

                this.myForm = this.fb.group({
                  name:[""],
                  controlnumber:[""],
                  curp:[""],
                  age:[""],
                  active:[]
                });

              }

              editN():void{
                this.nombreEditable = !this.nombreEditable;
              }
              updateN(student:Estudiante) {                
                student.name=this.myForm.controls.name.value;                 
                this.service.updateStudent(student, student.id);
                this.editN();
              }
              
              editC():void{
                this.curpEditable = !this.curpEditable;
              }
              updateC(student:Estudiante) {                
                student.curp=this.myForm.controls.curp.value;                 
                this.service.updateStudent(student, student.id);
                this.editC();
              }
              
              editNC():void{
                this.ncontrolEditable = !this.ncontrolEditable;
              }
              updateNC(student:Estudiante) {                
                student.controlnumber=this.myForm.controls.controlnumber.value;                 
                this.service.updateStudent(student, student.id);
                this.editNC();
              }
              
              editE():void{
                this.edadEditable = !this.edadEditable;
              }
              updateE(student:Estudiante) {                
                student.age=this.myForm.controls.age.value;                 
                this.service.updateStudent(student, student.id);
                this.editE();
              }

}

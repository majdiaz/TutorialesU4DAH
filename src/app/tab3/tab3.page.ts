import { Component } from '@angular/core';
import { EstudianteService } from "../services/estudiante.service";
import { Estudiante } from "../models/estudiante";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public students: Estudiante[];
  public ver = false;
  constructor(private service: EstudianteService) {
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });
  }

  verMas(): void {
    this.ver= !this.ver;    
  }
}

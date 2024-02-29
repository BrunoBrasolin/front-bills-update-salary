import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { ApiDtoInterface, PersonInterface } from './app.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: AppService) {
  }
  public salary: number | null = null;
  public person: PersonInterface | null = null;

  onClickAtualizar() {
    if (this.salary === null || this.person === null) {
      alert('Favor colocar dados válidos!');
      return;
    }

    let dto: ApiDtoInterface = {
      salary: this.salary,
      person: this.person
    }

    this.service.UpdateSalary(dto).subscribe(s => console.log(s));
  }
}

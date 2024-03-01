import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { ApiDtoInterface, PersonInterface } from './app.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: AppService, private snackBar: MatSnackBar) {
  }
  public salary: number | null = null;
  public person: PersonInterface | null = null;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public timer: number = 3000;

  onClickAtualizar(): void {
    if (this.salary === null || this.person === null) {
      this.snackBar.open(`Favor colocar dados válidos!`, 'Fechar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.timer
      });
      return;
    }

    let dto: ApiDtoInterface = {
      salary: this.salary,
      person: this.person
    }

    this.service.UpdateSalary(dto)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleSuccess(): void {
    this.snackBar.open(`Salário de ${this.person} atualizado para ${this.salary}!`, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.timer
    });
  }

  handleError(): void {
    this.snackBar.open('Erro, favor contatar o Maggie Hub!', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.timer
    });

  }
}

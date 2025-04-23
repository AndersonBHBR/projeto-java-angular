import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


interface Tarefa {
  id: number;
  descricao: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 ADICIONE AQUI
  template: `
    <h1>Lista de Tarefas</h1>
    <ul>
      <li *ngFor="let t of tarefas">{{t.descricao}}</li>
    </ul>
    <input [(ngModel)]="novaDescricao" placeholder="Nova tarefa">
    <button (click)="adicionarTarefa()">Adicionar</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaDescricao: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Tarefa[]>('http://localhost:8080/api/tarefas')
      .subscribe(data => this.tarefas = data);
  }

  adicionarTarefa() {
    const nova = { descricao: this.novaDescricao };
    this.http.post<Tarefa>('http://localhost:8080/api/tarefas', nova)
      .subscribe(t => this.tarefas.push(t));
    this.novaDescricao = '';
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirtyCheckingComponent implements OnInit {
  total: number = 0;
  todos: any[] = [];
  constructor() { }

  ngOnInit() {
    
  }

  incrementa() {
    this.total++;
  }

  mudaPrimeiroElemento() {
    this.todos[0].descricao = "primeiro elemento";
  }

  addTodo() {
    // let newTodos = this.todos.slice(0);
    // newTodos.push("TODO 4");
    // this.todos = newTodos;

    this.todos.push({ id: 1, descricao: "ijiji" });
  }
}

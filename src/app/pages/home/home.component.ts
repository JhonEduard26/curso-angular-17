import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: 1,
      name: 'Instalar el angular CLI',
      completed: true
    },
    {
      id: 2,
      name: 'Crear proyecto',
      completed: true
    },
    {
      id: 3,
      name: 'Crear componentes',
      completed: false
    }
  ])
  uncompletedTasks = this.tasks().filter(task => !task.completed).length

  addTask(event: Event) {
    const target = event.target as HTMLInputElement
    const input = target.value
    const newTask = {
      id: this.tasks.length + 1,
      name: input,
      completed: false
    }
    this.tasks.update(tasks => [...tasks, newTask])
    target.value = ''
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id))
  }

  updateTask(id: number) {
    this.tasks.update(tasks => {
      return tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    })
  }
}

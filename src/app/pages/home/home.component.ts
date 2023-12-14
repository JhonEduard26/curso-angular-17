import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// Genera un id aleatorio
const uuid = () => Math.random().toString(16).slice(-4)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: uuid(),
      name: 'Instalar el angular CLI',
      completed: true
    },
    {
      id: uuid(),
      name: 'Crear componentes',
      completed: false
    }
  ])
  uncompletedTasks = this.tasks().filter(task => !task.completed).length

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  })

  addTask() {
    if (this.newTaskCtrl.valid) {
      const newTask = {
        id: uuid(),
        name: this.newTaskCtrl.value.trim(),
        completed: false
      }

      if (newTask.name === '') return
      this.tasks.update(tasks => [...tasks, newTask])
      this.newTaskCtrl.reset()
    }
  }

  deleteTask(id: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id))
  }

  updateTask(id: string) {
    this.tasks.update(tasks => {
      return tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }
}

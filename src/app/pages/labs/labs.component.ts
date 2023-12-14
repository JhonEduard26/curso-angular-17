import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hallo!';

  tasks = signal([
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ])

  name = signal('Jhon')
  age = 15
  disabled = true
  img = 'https://picsum.photos/200/200'

  person = signal({
    name: 'Jhon',
    age: 14,
    img: 'https://picsum.photos/200/200'
  })

  colorCtrl = new FormControl()
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  })

  inputCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
    ]
  })

  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    const target = event.target as HTMLInputElement
    const newValue = target.value
    this.person.update(person => {
      return {
        ...person,
        name: newValue
      }
    })
  }

  keydownHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement
    console.log(target.value)
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.person.update(person => {
      return {
        ...person,
        age: Number(newValue)
      }
    })
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
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
  age = 24
  disabled = true
  img = 'https://picsum.photos/200/200'

  person = {
    name: 'Jhon',
    age: 24,
    img: 'https://picsum.photos/200/200'
  }

  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    const target = event.target as HTMLInputElement
    const newValue = target.value
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement
    console.log(target.value)
  }
}

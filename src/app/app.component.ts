import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-reflection';
  myContext = {$implicit: 'World', value: 'Svet'};

  items = [
    {name: 'First', value: 1, type: 'bold'},
    {name: 'Second', value: 2, type: 'italic'},
    {name: 'Third', value: 3, type: 'bold'},
    {name: 'Fourth', value: 4, type: 'italic'},
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkList } from './models/link';
import { Accordion } from './models/accordion';
import { PostTypes } from './enums/post-types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LinkListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-reflection';
  myContext = {$implicit: 'World', value: 'Svet'};

  protected PostTypes = PostTypes;

  items: (LinkList | Accordion)[] = [
    {title: 'First', type: PostTypes.LINKS, value: [{title: 'First', url: 'http://www.google.com'}, {title: 'Second', url: 'http://www.google.com'}]},
    {title: 'Second', value: '', type: PostTypes.ACCORDION} as Accordion,
    {title: 'Third', value: '', type: PostTypes.ACCORDION} as Accordion,
    {title: 'Fourth', value: '', type: PostTypes.ACCORDION} as Accordion,
    {title: 'Last', type: PostTypes.LINKS, value: [{title: 'Google', url: 'http://www.google.com'}]},
  ];
}

import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';
import { LinkList, SingleLink } from '../models/link';
import { PostTypes } from '../enums/post-types';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.css'
})
export class LinkListComponent {

  private readonly _content: WritableSignal<LinkList> = signal({title: '', type: PostTypes.LINKS, value: []});

  @Input() set content(value: any) {
    // Asserts that the value interface is of type LinkList
    if (!this.isListType(value)) {
      throw new Error('Invalid type for LinkListComponent');
    }
    this._content.set(value);
  }

  title: Signal<string> = computed(() => this._content().title);
  items: Signal<SingleLink[]> = computed(() => this._content().value);

  private isListType(content: any): content is LinkList {
    return content.type === PostTypes.LINKS;
  }

}

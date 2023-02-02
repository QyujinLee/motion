import { BaseComponent } from './../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    const htmlString = `<ul class="page">This is PageComponent!</ul>`;
    super(htmlString);
  }
}

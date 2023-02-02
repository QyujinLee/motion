import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    const htmlString = `<section class="video">
                          <div class="video__player">
                            <iframe src="" frameborder="0" class="video__iframe"> </iframe>
                          </div>
                          <h3 class="video__title"></h3>
                        </section>`;
    super(htmlString);

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = `https://www.youtube.com/embed/SMemB8qejtk`; // url -> videoId 추출함수
    console.log(url);

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
//   width="1022"
//   height="575"
//   src="https://www.youtube.com/embed/SMemB8qejtk"
//   title="창모(Changmo)의 킬링벌스를 라이브로! | Selfmade orange, BAND, I always, Interlude, 아이야, 널 지워야해, 비워 등"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;

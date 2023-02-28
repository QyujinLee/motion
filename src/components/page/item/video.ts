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
    // iframe.src = `https://www.youtube.com/embed/w4C03OoKGII`; // url -> videoId 추출함수
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=w4C03OoKGII --> 주소창에 있는 URL 복사
  // https://youtu.be/w4C03OoKGII --> 동영상 URL 복사 기능을 통한 복사
  // output
  // https://www.youtube.com/embed/w4C03OoKGII
  // 정규표현식 Regex 사용할 것
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  }
}

// <iframe
//   width="893"
//   height="502"
//   src="https://www.youtube.com/embed/w4C03OoKGII"
//   title="박재범 Jay Park - &#39;All The Way Up (K)&#39; Dance Visual (ENG)"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;

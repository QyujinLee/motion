type BtnType = 'image' | 'video' | 'note' | 'task';

const btnList = document.querySelectorAll('.buttons button');
const popup: HTMLElement = document.querySelector('.popup') as HTMLElement;
const dimmed: HTMLElement = document.querySelector('.dimmed') as HTMLElement;
const btnClose: HTMLElement = document.querySelector(
  '.close__button'
) as HTMLElement;
const btnAdd: HTMLElement = document.querySelector(
  '.add__button'
) as HTMLElement;

if (btnList && btnList.length > 0) {
  btnList.forEach((btn) => {
    /**
     * 상단 버튼들 이벤트 바인딩
     */
    btn.addEventListener('click', (e) => {
      const value = (e.target as HTMLButtonElement).value;
      popup.style.display = 'block';
      dimmed.style.display = 'block';
    });
  });
}

/**
 * 팝업 닫기 버튼 이벤트 바인딩
 */
btnClose.addEventListener('click', () => {
  closePopup();
});

/**
 * 팝업 내 추가 버튼 이벤트 바인딩
 */
btnAdd.addEventListener('click', () => {
  addContents();
});

/**
 * 팝업 닫기
 */
function closePopup(): void {
  popup.style.display = 'none';
  dimmed.style.display = 'none';
}

/**
 * 팝업 내 추가 버튼 클릭 시 이벤트
 */
function addContents() {
  closePopup();
}

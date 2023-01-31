type BtnType = 'image' | 'video' | 'note' | 'task' | null;

const btnList = document.querySelectorAll('.buttons button');

if (btnList && btnList.length > 0) {
  btnList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.value;
      console.log(`click ! : ${target}`);
    });
  });
}

// function btnClick(type: BtnType): void {
//   console.log(`click btn : ${type}`);

//   // 버튼을 클릭할 시 입력 창 오픈
//   const popup: HTMLElement | null = document.querySelector('div.popup');

//   if (popup) {
//     popup.style.display = 'block';
//   }
// }

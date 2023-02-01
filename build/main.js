"use strict";
const btnList = document.querySelectorAll('.buttons button');
const popup = document.querySelector('.popup');
const dimmed = document.querySelector('.dimmed');
const btnClose = document.querySelector('.close__button');
const btnAdd = document.querySelector('.add__button');
if (btnList && btnList.length > 0) {
    btnList.forEach((btn) => {
        /**
         * 상단 버튼들 이벤트 바인딩
         */
        btn.addEventListener('click', (e) => {
            const value = e.target.value;
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
function closePopup() {
    popup.style.display = 'none';
    dimmed.style.display = 'none';
}
/**
 * 팝업 내 추가 버튼 클릭 시 이벤트
 */
function addContents() {
    closePopup();
}
//# sourceMappingURL=main.js.map
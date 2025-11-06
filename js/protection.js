// 오른쪽 클릭 방지
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// 개발자 도구 단축키 방지
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 123 || 
      (e.ctrlKey && e.shiftKey && [73, 67, 74].includes(e.keyCode)) ||
      (e.ctrlKey && e.keyCode === 85)) {
    e.preventDefault();
  }
});

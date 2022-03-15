// Блок Блок карточек с продукцией

const equalHeight = (selector) => {
  const blocks = document.querySelectorAll(selector);
  let maxHeight = 0;
  let blockHight;

  blocks.forEach(block => {
    block.style.setProperty('height', 'unset');
  })
  blocks.forEach(block => {
    blockHight = block.clientHeight;
    if (blockHight > maxHeight) {

      maxHeight = blockHight;
    }
  })
  blocks.forEach(block => {
    block.style.setProperty('height', maxHeight + 'px');
  })
}
equalHeight('.goods-list__info');

window.addEventListener('resize', () => {
  equalHeight('.goods-list__info');
});



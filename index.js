async function main() {
  const itemContainer = document.querySelector('.item-container');
  const itemWrapper = document.querySelector('.item-wrapper');
  const icon = document.querySelector('.icon');
  const arr = [...new Array(3)];

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function addItemAnim(e, amount = 1) {
    e.classList.add('itemAnim');

    e.style.animationDuration = `${Math.round(4.5 * amount)}s`;
  }

  itemWrapper.addEventListener('animationstart', async () => {
    await timeout(arr.length > 200 ? 1000 : 500);
    icon.classList.add('active');
  });
  
  
  itemWrapper.addEventListener('animationend', async () => {
    itemWrapper.classList.remove('itemAnim');
    await timeout(100);
    icon.classList.remove('active');

    await timeout(2000);
    addItemAnim(itemWrapper, arr.length);
    await timeout(arr.length > 200 ? 1000 : 500);
    icon.classList.add('active');
  });


  arr
    .map((_, i) => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = 'Item';
      itemWrapper.append(item);
    })
    .join('');

  addItemAnim(itemWrapper, arr.length);
}

document.onload = main();

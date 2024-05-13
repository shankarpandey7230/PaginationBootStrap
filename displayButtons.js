const displayButtons = (container, pages, activeIndex) => {
  //   console.log(container, pages, activeIndex);
  let buttons = pages.map((_, pageIndex) => {
    return `<button class="btn paginate btn-primary ${
      activeIndex === pageIndex ? 'active' : 'null'
    }" data-index= '${pageIndex}'>${pageIndex + 1}</button>`;
  });
  buttons.unshift('<button class="btn paginate btn-prev">prev</button>');
  buttons.push(' <button class="paginate btn btn-next">next</button>');
  container.innerHTML = buttons.join('');
};
export default displayButtons;

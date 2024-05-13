import followers from './followers.js';
import displayPeople from './displayPeople.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const pageTitle = document.querySelector('.title h2');
// console.log(pageTitle);
const buttonContainer = document.querySelector('.btn-container');
// console.log(buttonContainer);

let index = 0;
let pages = [];

const setupUI = () => {
  displayPeople(pages[index]);
  displayButtons(buttonContainer, pages, index);
};

const setupItems = async () => {
  const people = await followers();
  //   console.log(people);
  pageTitle.textContent = 'pagination';
  // displayPeople(people);
  // displayPeople(paginate(people)[0]);
  pages = paginate(people);
  setupUI();
  // console.log(pages);
};

buttonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) {
    return;
  }
  if (e.target.classList.contains('btn')) {
    // console.log(typeof e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('btn-next')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('btn-prev')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }

  setupUI();
});
window.addEventListener('load', setupItems);
// the load event is fired when the whole page has loaded, including all dependent resources

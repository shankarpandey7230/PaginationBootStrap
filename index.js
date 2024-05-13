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

window.addEventListener('load', setupItems);
// the load event is fired when the whole page has loaded, including all dependent resources

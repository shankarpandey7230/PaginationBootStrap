import followers from './followers.js';
import displayPeople from './displayPeople.js';
import paginate from './paginate.js';

const pageTitle = document.querySelector('.title h2');
// console.log(pageTitle);

const setupItems = async () => {
  const people = await followers();
  //   console.log(people);
  // displayPeople(people);
  displayPeople(paginate(people)[0]);
  pageTitle.textContent = 'pagination';
  const pages = paginate(people);
  // console.log(pages);
};

window.addEventListener('load', setupItems);
// the load event is fired when the whole page has loaded, including all dependent resources

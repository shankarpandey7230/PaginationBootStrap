import followers from './followers.js';
import displayPeople from './displayPeople.js';

const pageTitle = document.querySelector('.title h2');
// console.log(pageTitle);

const setupItems = async () => {
  const people = await followers();
  //   console.log(people);

  displayPeople(people);
  pageTitle.textContent = 'pagination';
};

window.addEventListener('load', setupItems);
// the load event is fired when the whole page has loaded, including all dependent resources

const paginate = (people) => {
  //   console.log(people);

  const peopleperpage = 9;
  const pagesNumber = Math.ceil(people.length / peopleperpage);
  //   console.log(pagesNumber);

  const newPeople = Array.from({ length: pagesNumber }, (_, index) => {
    const first = index * peopleperpage;
    // console.log(first);
    return people.slice(first, first + peopleperpage);
  });
  return newPeople;
};

export default paginate;

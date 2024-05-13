const peopleContainer = document.querySelector('.people-container');
// console.log(peopleContainer);

const displayPeople = (people) => {
  //   console.log(people);

  const newPeople = people
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `<div class="col-md-4  col-sm-6">
       <div class="card " style="height:350px">
    <div class="card-body mx-auto text-center" style="">
      <img
        src="${avatar_url}"
        alt="img"
        class="img-fluid"
      />
      <h2 class="text-center block">${login}</h2>
    <a href="${html_url}"><button class="btn btn-primary mx-auto mt-5"">View Profile</button></a>
    </div>
  </div>
  </div>`;
    })
    .join('');
  peopleContainer.innerHTML = newPeople;
};

export default displayPeople;

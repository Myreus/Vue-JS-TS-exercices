const defaultMovies = [
  {id: 1, name: 'Le Seigneur des Anneaux', vote: 0},
  {id: 2, name: 'Le Silence des Agneaux', vote: 0},
  {id: 3, name: 'Fargo', vote: 0},
  {id: 4, name: 'The Backrooms', vote: 0}
];

if (!localStorage.getItem('movies')){
  localStorage.setItem('movies', JSON.stringify([
    {id: 1, name: 'Spiderman : Noire', vote: 0},
    {id: 2, name: 'Avatar 4', vote: 0},
    {id: 3, name: 'The Grinch 3', vote: 0},
    {id: 4, name: 'The Oldest View', vote: 0},
    {id: 5, name: 'The SCP Foundation', vote: 0}
  ]));
}


const movies = JSON.parse(localStorage.getItem('movies'));

function createMovieCard(movie){
  const container = document.body.querySelector('#movies-container');
  const div = document.createElement('div');
  div.className='card border border-base-300 bg-base-100 p-5 shadow-xl';
  container.append(div);
  const h2 = document.createElement('h2');
  h2.innerText=movie.name;
  h2.className='card-title text-xl text-primary';
  const section = document.createElement('section');
  section.className='mt-4 flex items-center gap-2';
  const h3 = document.createElement('h3');
  h3.innerText=movie.vote;
  h3.className='badge badge-neutral';
  const p = document.createElement('p');
  p.innerText=' votes';
  p.className='text-sm text-base-content/70';
  const button = document.createElement('button');
  button.innerText='Voter pour ce film 👍';
  button.className='btn btn-primary mt-5 w-full';
  button.addEventListener('click', () => {
    movie.vote++;
    h3.innerText = movie.vote;
    localStorage.setItem('movies', JSON.stringify(movies));
  }); // Fait par IA, petit blocage ici
  div.append(h2);
  div.append(section);
  div.append(button);
  section.append(h3);
  section.append(p);
}

if (movies.length>0){
  movies.forEach(movie => {
    createMovieCard(movie);
  });
} else {
  defaultMovies.forEach(movie => {
    createMovieCard(movie);
  });
}
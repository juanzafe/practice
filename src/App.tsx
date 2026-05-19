import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function App() {
  const chemists = people.filter(person =>
  person.profession === 'chemist'
);
  const others = people.filter(person=>
    person.profession !== 'chemist'
);
  const listItems1 = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );
  const listItems2 = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <section>
        <h1>Chemists</h1>
        <ul>{listItems1}</ul>
      </section>
      <section>
        <h1>Others</h1>
        <ul>{listItems2}</ul>
      </section>
    </article>
  );
}

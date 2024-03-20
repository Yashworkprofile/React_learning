import { people } from './people.js';
import { getImageUrl } from './photosurl.js';

export default function Description() {
    const listItems = people.map(person =>
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
        <h1>Players</h1>
        <ul>{listItems}</ul>
      </article>
    );
  }
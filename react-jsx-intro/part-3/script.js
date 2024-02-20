// Part 3 
const Person = ({ age, hobbies, name }) => {
    const MAX_NAME_LENGTH_TO_SHOW = 8;
    const voteText = age >= 18 ? "Go vote!" : "Go study!";
    
    const truncatedName = name.length > MAX_NAME_LENGTH_TO_SHOW ? name.slice(0, MAX_NAME_LENGTH_TO_SHOW) + '...' : name;
    
    const hobbiesLIs = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {truncatedName}</li>
          <li>Age: {age}</li>
          <li>Hobbies:</li>
          <ul>{hobbiesLIs}</ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }

  
  const App = () => {
    return (
        <div> 
            <Person name="John Doe" age={25} hobbies={['Reading', 'Hiking', 'Painting']} />
            <Person name="Alice" age={16} hobbies={['Drawing', 'Singing', 'Dancing']} />
            <Person name="Robert" age={30} hobbies={['Coding', 'Gardening', 'Cooking']} />
        </div>
    )
  }

  ReactDOM.render( <App/>, document.getElementById( 'root' ));
  
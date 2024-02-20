// Part 1 

// First Component 
const FirstComponent = () => {
    return ( 
        <h1> This is my first component and it is an H1!!!! </h1>
    )
}



// Named Component 
const NamedComponent = ( { name } ) => {
    return (
        <p> My name is { name } </p>
    )
} 



// App 
const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name = 'Jack Ryan'/>
        </div>
    )
}

ReactDOM.render( <App/>, document.getElementById( 'root' ));





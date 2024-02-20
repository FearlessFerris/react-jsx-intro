// Part 2 
// Tweet Component 
const Tweet = ( props ) => {
    return (
        <div className = 'tweet'> 
            <h3> Username: { props.username } </h3>
            <h4> Name: { props.name } </h4>
            <h4> Date: { props.date } </h4>
            <h2> Tweet: { props.message } </h2>
        </div>
    )
}


const App = () => {
    return (
        <div className = 'container'>
            <Tweet username = 'Jack Ryan' name = 'Jack' date = '03/01/02' message = 'I am Jack Ryan!!!' /> 
            <Tweet username = 'Jason Bourne' name = 'Jason' date = '09/13/70' message = 'I dont know who I am' />
            <Tweet username = 'Tiny Dancer' name = 'Elton' date = '03/25/47' message = 'Dont let the sun go down on me' />     
        </div>
    )
}

ReactDOM.render( <App/>, document.getElementById( 'root' ));

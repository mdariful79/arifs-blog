import { useState } from "react";

const Home = () => {
    // let name = 'Arif';
    const [name, setName] = useState('Arif');
    const [age, setAge] = useState('24');

    const handleClick = () => {
        setName('Akib');
        setAge(18);
        
    }
    

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
            
        </div>
     );
}
 
export default Home;
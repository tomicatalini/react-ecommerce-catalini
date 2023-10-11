import { useState } from 'react'

const Example = () => {
    const [activo, setActivo] = useState(false);
    
    const handleClick = () => setActivo(!activo);

    return (
      <button onClick={handleClick}>
        {activo ? 'Activo' : 'Inactivo'}
      </button>
    );
  };

// Paginas para generacion de readme

//   https://readme.so/es 
// 2) https://www.makeareadme.com/
// 3) https://rahuldkjain.github.io/gh-profile-readme-generator
export default Example;
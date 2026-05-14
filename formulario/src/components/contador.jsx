import {useState} from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>valor atual: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>somar</button>
            </div>
    )
}

export default Contador;
import inputfield from "./components/inputfield";
import botaoenviar from "./components/botaoenviar";

function formulario_cadastro() {
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [telefone, settelefone] = useState('');

    return (
                <form>
            <inputfield 
                label="Nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
            />
            <inputfield 
                label="Email"
                type="email"
                name="email"
                placeholder="Digite seu email"
            />
            <inputfield 
                label="Senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
            />
            <botaoenviar label="Cadastrar" />
        </form>
    )
}
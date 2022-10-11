import './style.css';

function Form() {
    return (
        <div className='container-form'>
            <div>
                <p className='boas-vindas'>Seja Bem vindo(a)!</p>
                <p className='informe'>Vamos verificar se existe cobertura em sua localidade, digite seu CEP</p>
            </div>
            <div className='cep'>
                <label>CEP</label>
                <input />
            </div>
            <div className='rua'>
                <label>Rua</label>
                <input />
            </div>
            <div className='cidade'>
                <label>Cidade</label>
                <input />
            </div>
            <div className='estado'>
                <label>Estado</label>
                <input />
            </div>
        </div>
    )
}

export default Form;
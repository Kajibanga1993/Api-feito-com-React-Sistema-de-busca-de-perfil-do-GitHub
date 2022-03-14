import React from 'react';

class List extends React.Component {
    state = {
        clientes: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/cliente/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    clientes: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de clientes</h1>

                <ul>
                    {this.state.clientes.map(item => (
                        <li key={item.id}>
                            <p><b>Id:</b> {item.id}</p>
                            <p><b>Nome:</b> {item.nome}</p>
                            <p><b>Descrição:</b> {item.descricao}</p>
                            <p><b>Telefone:</b> {item.telefone}</p>
               
                           
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
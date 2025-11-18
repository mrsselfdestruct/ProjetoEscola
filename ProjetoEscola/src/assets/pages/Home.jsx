import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Bem-vindo à Escola Fênix</h1>
                <p>Preparação para concursos públicos</p>
            </div>

            <div className="container">
                <section className="apresentacao">
                    <h2>Sobre a Escola Fênix</h2>
                    <p>
                        A Escola Fênix é uma escola especializada em preparação para concursos públicos.
                        Oferecemos cursos de qualidade com professores experientes.
                    </p>
                </section>

                <section className="concursos">
                    <h2>Áreas de Preparação</h2>
                    <ul className="lista-concursos">
                        <li>🚔 Área Policial</li>
                        <li>🏛️ Área Administrativa</li>
                        <li>💰 Área Fiscal</li>
                        <li>⚖️ Área Judiciária</li>
                        <li>🎓 Área Educacional</li>
                        <li>🏥 Área de Saúde</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Home;
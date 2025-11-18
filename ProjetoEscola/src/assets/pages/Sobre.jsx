import './Sobre.css';

function Sobre() {
    return (
        <div className="sobre-container">
            <div className="sobre-header">
                <h1>Sobre Este Projeto</h1>
            </div>

            <div className="sobre-content">
                <div className="perfil">
                    <div className="avatar">
                        <img src="https://media.discordapp.net/attachments/1350636968882470914/1440136186411618435/IMG_5432.jpg?ex=691d0ed7&is=691bbd57&hm=1eb34472a1b18fdb1cc5529bab31d5feb1f59b2d92dd30ced93c9ed2db1cbb82&=&format=webp&width=881&height=881" alt="Foto de perfil" className="avatar-img" />
                    </div>
                    <h2>Samantha Santos da Costa</h2>
                    <p className="cargo">Estudante de ADS</p>
                    
                    <div className="info-box">
                        <h3>Sobre Mim</h3>
                        <p>
                            Sou uma estudante dedicada de Análise e Desenvolvimento de Sistemas (ADS) na UNINORTE - Campus Djalma Batista.
                            Apaixonada por tecnologia e desenvolvimento web, estou sempre em busca de novos desafios e aprendizados na área de TI.
                        </p>
                    </div>

                    <div className="info-box">
                        <h3>Tecnologias</h3>
                        <ul className="tech-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h3>Contato</h3>
                        <p>📧 <a href="mailto:03359856@sempreuninorte.com.br">03359856@sempreuninorte.com.br</a></p>
                        <p>💼 <a href="https://github.com/mrsselfdestruct" target="_blank" rel="noopener noreferrer">github.com/mrsselfdestruct</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
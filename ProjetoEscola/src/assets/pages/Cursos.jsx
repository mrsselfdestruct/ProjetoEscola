import './Cursos.css';


function Cursos() {
    const cursos = [
        {
            id: 1,
            nome: 'Preparação PRF',
            imagem: 'https://i.pinimg.com/736x/59/02/31/5902319d9e4affe4a757a32e27d8950b.jpg', // coloque o caminho da imagem
            descricao: 'Prepare-se para a Polícia Rodoviária Federal.'
        },
        {
            id: 2,
            nome: 'Concurso Administrativo',
            imagem: 'https://fia.com.br/wp-content/uploads/2021/01/Areas-da-administracao-capa-scaled.jpg',
            descricao: 'Cursos para órgãos públicos e tribunal.'
        },
        {
            id: 3,
            nome: 'Auditor Fiscal',
            imagem: 'https://agendacapital.com.br/wp-content/uploads/2024/12/Receita-DF-Auditor-Fiscal.jpg',
            descricao: 'Especialização em Receita Federal.'
        },
        {
            id: 4,
            nome: 'Magistratura',
            imagem: 'https://www.direitoprofissional.com/wp-content/uploads/2018/10/245782-concursos-publicos-para-magistratura-entenda-como-e-essa-carreira.jpg',
            descricao: 'Prepare-se para Juiz e Promotor.'
        },
        {
            id: 5,
            nome: 'Professor Concursado',
            imagem: 'https://media.gazetadopovo.com.br/2022/10/14104107/professor-1200x720.jpg',
            descricao: 'Qualifique-se para escolas públicas.'
        },
        {
            id: 6,
            nome: 'Saúde Pública',
            imagem: 'https://schroeder.sc.gov.br/uploads/sites/353/2023/09/saude.jpg',
            descricao: 'Concursos para profissionais de saúde.'
        }
    ];

    return (
        <div className="cursos-container">
            <div className="cursos-header">
                <h1>Nossos Cursos</h1>
                <p>Escolha o curso ideal para você</p>
            </div>

            <div className="cursos-grid">
                {cursos.map((curso) => (
                    <div key={curso.id} className="card-curso">
                        {curso.imagem && (
                            <img src={curso.imagem} alt={curso.nome} className="card-img" />
                        )}
                        <h2>{curso.nome}</h2>
                        <p>{curso.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cursos;

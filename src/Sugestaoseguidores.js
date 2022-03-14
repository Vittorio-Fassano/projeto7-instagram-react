export default function Sugestaoseguidores() {
    const sugestoes = [
        { foto: "imagens/badvibesmemes.png", nome: "bad.vibes.memes" },
        { foto: "imagens/chibirdart1.png", nome: "chibirdart" },
        { foto: "imagens/razoesparaacreditar1.png", nome: "razoesparaacreditar" },
        { foto: "imagens/adorableanimals1.png", nome: "adorable_animals" },
        { foto: "imagens/smallcutecats1.png", nome: "smallcutecats" },
    ];

    return (
        <div>
            <div class="meio">
                <p>Sugestões para você</p>
                <h2>Ver tudo</h2>
            </div>

            <div class="perfismeio">

            {sugestoes.map(element => <Perfis info={element} />)}

            </div>
        </div>
    )
}

function Perfis(props) {
    return (
    <div class="perfil1">
        <img src={props.info.foto} alt="" />
        <div class="perfil1txt">
            <h2>{props.info.nome }</h2>
            <p>Segue você</p>
        </div>
        <div class="seguir">
            <p>Seguir</p>
        </div>
    </div>
    );
}
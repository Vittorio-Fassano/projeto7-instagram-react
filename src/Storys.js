export default function Storys() {

    const storys = [
        { foto: "imagens/9gag.png", nome: "9gag" },
        { foto: "imagens/meowed1.png", nome: "meowed" },
        { foto: "imagens/barked1.png", nome: "barked" },
        { foto: "imagens/nathanwpylestrangeplanet.png", nome: "nathanwpyle..." },
        { foto: "imagens/wawawiwacomicsa.png", nome: "wawawiwac..." },
        { foto: "imagens/respondeai.png", nome: "respondeai" },
        { foto: "imagens/filomoderna.png", nome: "filomoderna" },
        { foto: "imagens/memeriagourmet.png", nome: "memeriago" },
    ]

    return (
        <div class="storys">
            {storys.map(element => <Storie info={element} />)}
            <div class="seta">
                <img src="imagens/Vector2.png" alt="" />
            </div>
        </div>
    )
}

function Storie(props) {
    return (
        <div class="storys1">
            <img src="imagens/stories_background1.png" alt="" />
            <div class="storys2">
                <img src={props.info.foto} alt="" />
                <p>{props.info.nome}</p>
            </div>
        </div>
    )
}
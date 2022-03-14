export default  function Perfilsugerido() {

        
    const perfilSugerido = {foto: "imagens/catanacomics.png", nome: "catanacomics", usuario: "Catana"};

    return (
    
    <Sugestao foto = {perfilSugerido.foto} nome={perfilSugerido.nome} usuario={perfilSugerido.usuario}/>

    
    )
}

function Sugestao(props) {
    return (
        <div class="superior">
            <img src={props.foto} alt=""/>
            <div class="textosuperior">
             <h2>{props.nome}</h2>
             <p>{props.usuario}</p>
            </div>
        </div>
    )
}
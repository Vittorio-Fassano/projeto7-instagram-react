export default function Feed() {

  const feed = [
    { nome: "meowed", fotoPerfil: "imagens/meowed1.png", fotoFeed: "imagens/gato-telefone.png", fotosCurtidas: "imagens/barked1.png", comentarios: ["adorable_animals", "99.159"] },
    { nome: "barked", fotoPerfil: "imagens/barked1.png", fotoFeed: "imagens/dog1.png", fotosCurtidas: "imagens/respondeai.png", comentarios: ["respondeai", "42.042"] },
    { nome: "meowed", fotoPerfil: "imagens/meowed1.png", fotoFeed: "imagens/gato-telefone.png", fotosCurtidas: "imagens/memeriagourmet.png", comentarios: ["memeriagourmet", "63.388"] }
  ]

  return (
    <div class="feed">
      {feed.map(element => <Postagens info={element} />)}
    </div>
  )

  function Postagens(props) {
    return (
      <div class="publi">

        <div class="barratopper">
          <img src={props.info.fotoPerfil} alt="" />
          <h3>{props.info.nome}</h3>
          <div class="icone3pontos">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </div>

        <div class="fotopubli">
          <img src={props.info.fotoFeed} alt="" />
        </div>

        <div class="barrabottom">
          <div class="barrabottom1">
            <div class="tbtm">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="navigate-outline"></ion-icon>
            </div>
            <div class="ubtm">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div class="barrabottom2">
            <img src={props.info.fotosCurtidas} alt="" />
            <p>Curtido por <strong>{props.info.comentarios[0]}</strong> e <strong>outras {props.info.comentarios[1]} pessoas</strong></p>
          </div>
        </div>

      </div>
    );
  }
}
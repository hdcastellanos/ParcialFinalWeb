import react from "react";
function MovieDetail(props) {
    return (
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={props.movie.poster} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.movie.name}</h5>
    <p class="card-text">{props.movie.description}</p>
    <p class="card-title">Cast</p>
    <p class="card-text">{props.movie.cast}</p>
  </div>
</div>
    )
}
export default MovieDetail;
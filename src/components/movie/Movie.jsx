import "./movie.css";

export default function Movie(props) {
    return (
        <div className="movie">
            <div className="postDirector">
                <b>A movie by <a>John Doe</a></b>
            </div>
            <img
                className="movieImg"
                src={props.movie.img}
                alt={props.movie.img}
            />
            <div className="movieInfo">
                <span className="postTitle">
                     Not So Green
                </span>
                <hr />
            </div>
            <p className="postDesc">
                {props.movie.description}
            </p>
            <div className="imageDate">
                <span className="date">March 2019</span>
            </div>

        </div>
    );
}
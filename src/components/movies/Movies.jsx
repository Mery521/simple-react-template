import "./movies.css";
import Movie from "../movie/Movie";
export default function Movies() {
  /* here should be the response from the App.js axios */
    const elements = [
      {
        img : "https://image.shutterstock.com/image-illustration/3d-illustrator-shopping-online-mall-600w-1716326770.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate rationeatque, exercitationem quibusdam, reiciendis odio laboriosam?",
      },
      {
        img : "https://static.wixstatic.com/media/97921b_a7009c69f56d4f68bafa19ab09b3f111~mv2.jpeg/v1/fill/w_734,h_413,al_c,lg_1,q_90/97921b_a7009c69f56d4f68bafa19ab09b3f111~mv2.webp",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate rationeatque, exercitationem quibusdam, reiciendis odio laboriosam?",
      }
    ]
    return (
        <div className="movies">
          {elements.map((item) => {
            return <Movie movie = {item} />
          })}
        </div>
    );
}
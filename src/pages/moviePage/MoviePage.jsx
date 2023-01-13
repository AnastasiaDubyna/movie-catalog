import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageBase from "../../components/pageBase/PageBase"
import { getMovieById } from "../../repository/movieRepository";
import MediaBanner from "../../components/mediaBanner/MediaBanner";

const MoviePage = () => {
    const {id} = useParams();
    const {isLoading, error, data} = useQuery("movie", () => getMovieById(id));
    console.log(isLoading)
    console.log(error)
    console.log(data)
    if (data) {
        return (
            <PageBase>
                <div className="movie-page-content">
                    <MediaBanner
                        mediaData={data}
                    />
                </div>
            </PageBase>
        )
    }
};

export default MoviePage;

// background: linear-gradient(to bottom right, rgba(31.5, 31.5, 73.5, 1), rgba(31.5, 31.5, 73.5, 0.84));
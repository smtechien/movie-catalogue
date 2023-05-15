import API_ENDPOINT from '../globals/api-endpoint';

/**
 * Fetching data dari TheMovieDB dan rubah ke result / json()
 */
class TheMovieDbSource {
  /** */
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  /** */
  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  /**
   * @param {number} id - id of the movie
  */
  static async detailMovie(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;

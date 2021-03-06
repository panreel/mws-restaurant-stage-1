/**
 * Common database helper functions.
 */
export default class DBHelper {

  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get RESTAURANTS_URL() {
    const port = 1337 // Change this to your server port
    return `http://localhost:${port}/restaurants`;
  }

  static get REVIEWS_URL() {
    const port = 1337 // Change this to your server port
    return `http://localhost:${port}/reviews`;
  }

  static get OUTBOXREVIEWS_URL() {
    const port = 1337 // Change this to your server port
    return `http://localhost:${port}/outboxreq`;
  }

  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants() {
    return fetch(DBHelper.RESTAURANTS_URL) //get fresh or cached restaurants data (if no connection)
    .then(blob => blob.json())
  }

  /**
   * Favorite a restaurant
   */
  static favoriteRestaurant(id) {
    return fetch(this.RESTAURANTS_URL + '/' + id + '/?is_favorite=true', { 
      method: 'PUT',
      mode: 'cors'})
      .then(blob => blob.json());
  }

  /**
   * Un-favorite a restaurant
   */
  static unfavoriteRestaurant(id) {
    return fetch(this.RESTAURANTS_URL + '/' + id + '/?is_favorite=false', { 
      method: 'PUT',
      mode: 'cors'})
      .then(blob => blob.json());
  }

/**
 * Get all the reviews for a restaurant
 */  
  static fetchRestaurantReviews(id) {
    return fetch(this.REVIEWS_URL + '/?restaurant_id=' + id, {
      mode: 'cors'
    }).then(blob => blob.json());
  }

  /**
   * Add a review
   */
  static addReview(id, review) {
    review.restaurant_id = id;
    return fetch(this.REVIEWS_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(review)
    })
    .then(blob => blob.json());
  }

  /**
   * Store a review
   */
  static storeIDBReview(id, review) {
    review.restaurant_id = id;
    return fetch(this.OUTBOXREVIEWS_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(review)
    })
    .then(blob => blob.json());
  }

  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper
    .fetchRestaurants()
    .then(restaurants => {
      const restaurant = restaurants.find(r => r.id == id);
      if(restaurant) callback(null, restaurant);  // Got the restaurant
      else callback('Restaurant does not exist', null);}) // Restaurant does not exist in the database
    .catch(error => callback(null, error));
  }

  /**
   * Fetch restaurants by a cuisine type with proper error handling.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper
    .fetchRestaurants()
    .then(restaurants => {
      // Filter restaurants to have only given cuisine type
      const results = restaurants.filter(r => r.cuisine_type == cuisine);
      callback(null, results);})
    .catch(error => callback(null, error));
  }

  /**
   * Fetch restaurants by a neighborhood with proper error handling.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper
    .fetchRestaurants()
    .then(restaurants => {
      // Filter restaurants to have only given neighborhood
      const results = restaurants.filter(r => r.neighborhood == neighborhood);
      callback(null, results);})
    .catch(error => callback(null, error));
  }

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper
    .fetchRestaurants()
    .then(restaurants => {
      let results = restaurants;
      if (cuisine != 'all') results = results.filter(r => r.cuisine_type == cuisine); // filter by cuisine
      if (neighborhood != 'all') results = results.filter(r => r.neighborhood == neighborhood); // filter by neighborhood
      callback(results, null);})
    .catch(error => callback(null, error));
  }

  /**
   * Fetch restaurant reviews
   */
  static getRestaurantReviews(id, callback) {
    DBHelper
    .fetchRestaurantReviews(id)
    .then(reviews => callback(null, reviews))
    .catch(error => callback(error, null));
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper
    .fetchRestaurants()
    .then(restaurants => { // Get all neighborhoods from all restaurants
      const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
      // Remove duplicates from neighborhoods
      const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
      callback(null, uniqueNeighborhoods);})
    .catch(error => callback(null, error));
  }

  /**
   * Fetch all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper
    .fetchRestaurants()
    .then(restaurants => {
      // Get all cuisines from all restaurants
      const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
      // Remove duplicates from cuisines
      const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
      callback(null, uniqueCuisines);})
    .catch(error => callback(null, error));
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    if(restaurant.photograph)
      return (`./img/${restaurant.photograph}.jpg`);
    else
      return ('./img/default_icon.jpg');
  }

  /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP}
    );
    return marker;
  }

}
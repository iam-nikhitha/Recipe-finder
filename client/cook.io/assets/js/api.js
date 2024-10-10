/**
<<<<<<< HEAD
 * @copyright 2024 Unt_Group19
 * @author Rohit,Nikitha,Yasaswini,Keerthan,Anuraag <Recipefinderwebapplicationunt@gmail.com>
=======
 * @copyright 2024 UNT_Group19
 * @author Rohit,yasaswini,Nikitha,Anuraag,Keerthan <Recipefinderwebapplicationunt@gmail.com>
>>>>>>> 896ebb5b398c0e74c50b3bf79c5c0f933c4bd780
 */

"use strict";


window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "c86fceb2";
const /** {String} */ API_KEY = "3d77d764967acc9844bfbfc32c05bc4f";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const /** {String} */ query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

  const /** {Object} */ response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
}

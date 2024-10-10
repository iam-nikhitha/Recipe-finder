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


/**
 * @param {Number} minute Cooking time
 * @returns {String}
 */

export const getTime = minute => {
  const /** {Number} */ hour = Math.floor(minute / 60);
  const /** {Number} */ day = Math.floor(hour / 24);

  const /** {Number} */ time = day || hour || minute;
  const /** {Number} */ unitIndex = [day, hour, minute].lastIndexOf(time);
  const /** {String} */ timeUnit = ["days", "hours", "minutes"][unitIndex];

  return { time, timeUnit };
}

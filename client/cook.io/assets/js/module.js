/**
 * @copyright 2024 Unt_Group19
 * @author Rohit,Nikitha,Yasaswini,Keerthan,Anuraag <Recipefinderwebapplicationunt@gmail.com>
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
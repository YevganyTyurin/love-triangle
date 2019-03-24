/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let massive = [];
  for (let i = 1; i <= preferences.length; i++) {
    massive[i-1] = i;  
    }
  let triangle = 0;
  let first;
  let second;
  let third;

  for (let j = 0; j < preferences.length; j++) {
    first = preferences[j];
    if (first != 999) {
      second = preferences[first-1];
      if ( (second != 999) && (first != second)) {
        third = preferences[second-1];
        if ((third != 999) && (second != third) && (third != first) && (third == massive[j]))  {
          triangle++;
          preferences[first-1] = 999;
          preferences[second-1] = 999;
          preferences[third-1] = 999;
        }
      }
    }
  }
  return triangle;
};
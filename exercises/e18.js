/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let mostFrequent = 1;
  let frequentYear;
  
  data.asteroids.map((i_asteroid) => {
    let currentYear = 0;
    data.asteroids.map((j_asteroid) => {
      if(i_asteroid.discoveryYear == j_asteroid.discoveryYear) {
        currentYear++;
      }
      
      if(currentYear > mostFrequent) {
        mostFrequent = currentYear;
        frequentYear = i_asteroid.discoveryYear;
      }
    })
  })
  return frequentYear
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

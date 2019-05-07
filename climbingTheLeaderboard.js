// Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. The game uses Dense Ranking, so its leaderboard works like this:

//     The player with the highest score is ranked number

//     on the leaderboard.
//     Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

// For example, the four players on the leaderboard have high scores of
// , , , and . Those players will have ranks , , , and , respectively. If Alice's scores are , and , her rankings after each game are , and

// .

// Function Description

// Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element
// represents Alice's rank after the

// game.

// climbingLeaderboard has the following parameter(s):

//     scores: an array of integers that represent leaderboard scores
//     alice: an array of integers that represent Alice's scores

// Input Format

// The first line contains an integer
// , the number of players on the leaderboard.
// The next line contains space-separated integers , the leaderboard scores in decreasing order.
// The next line contains an integer, , denoting the number games Alice plays.
// The last line contains space-separated integers

// , the game scores.

// Constraints

// for for The existing leaderboard,
// , is in descending order.
// Alice's scores,

//     , are in ascending order.

// Subtask

// For

// of the maximum score:

// Output Format

// Print
// integers. The integer should indicate Alice's rank after playing the game.

function climbingLeaderboard(scores, alice) {
  let sortedScores = [...new Set(scores)];
  let answer = [];
  let k = sortedScores.length;

  //     for (let i = 0; i < alice.length; i++) {
  //         let number = sortedScores.filter(element => element > alice[i]).length;
  //         let temp = sortedScoresLenth - (sortedScoresLenth - number) + 1;
  //         answer.push(temp);
  //     }

  //     return answer;
  // }

  for (let i = 0; i < alice.length; i++) {
    for (k; k >= 0; k--) {
      if (sortedScores[k] - alice[i] > 0) {
        let temp = k + 2;
        answer.push(temp);
        break;
      }
      if (sortedScores[k] - alice[i] === 0) {
        let temp = k + 1;
        answer.push(temp);

        break;
      }

      if (k === 0 && sortedScores[k] - alice[i] < 0) {
        let temp = 1;
        answer.push(temp);
        break;
      }
    }
  }
  return answer;
}

const scores = [100, 90, 90, 80, 75, 60];

const alice = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(scores, alice));

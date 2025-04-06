// data.js
export const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    points: Math.floor(Math.random() * 5000),
    rank: i + 1,
  }));
  
  // Sort by points (descending)
  users.sort((a, b) => b.points - a.points);
  users.forEach((user, index) => (user.rank = index + 1));

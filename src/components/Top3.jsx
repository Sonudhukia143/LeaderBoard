import { CardContent, Typography, Avatar, Box } from '@mui/material';
import { users } from '../utils/player.js'; // Importing user data

export const TopPlayers = () => {
  const top3 = users.slice(0, 3);

  return (
    <div className="top-players">
      {top3.map((player) => (
        <div key={player.id} rank={player.rank} className="player-card">
          <div rank={player.rank} className="rank-badge">#{player.rank}</div>
          <CardContent sx={{ display: 'flex', alignItems: 'center', pt: 4 }}>
            <Avatar 
              sx={{ 
                width: 80, 
                height: 80, 
                mr: 3,
                border: `3px solid ${
                  player.rank === 1 ? 'gold' : 
                  player.rank === 2 ? 'silver' : 
                  '#cd7f32'
                }`
              }}
              src={`https://i.pravatar.cc/150?img=${player.id}`} // Random avatar
              alt={player.name}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {player.name}
              </Typography>
              <Typography color="text.secondary">
                Points: {player.points.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {player.rank === 1 ? '🏆 Champion' : 
                 player.rank === 2 ? '🥈 Runner-up' : 
                 '🥉 Third Place'}
              </Typography>
            </Box>
          </CardContent>
        </div>
      ))}
    </div>
  );
};
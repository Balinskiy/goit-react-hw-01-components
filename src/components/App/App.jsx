import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data.json';

export const App = () => {
  return (
    <>
      <h1>Task 1</h1>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <h1>Task 2</h1>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};

import { UserCart } from "./UserCart/UserCart";
import { StatisticTable } from './Statistics/Statistics'
import { FriendsList } from './Friends/Friends'

import user from 'components/user.json';
import stats from 'components/data.json';
import friends from 'components/friends.json';

// console.log(user);

export const App = () => {
  return (
    <div>
      <UserCart {...user} />
      <StatisticTable>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatisticTable>
      <FriendsList>
  {friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className="item" style={{ backgroundColor: isOnline ? 'green' : 'tomato' }}>
      <span className="status">{isOnline}</span>
      <img className="avatar1" src={avatar} alt={name} width="48px" />
      <p className="name">{name}</p>
    </li>
  ))}
      </FriendsList>
    </div>
  );
};


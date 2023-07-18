import { UserCart } from "./UserCart/UserCart";
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './Friends/Friends'
import { Transactions } from './Transactions/Transactions'

import user from 'json/user.json';
import stats from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

// console.log(user);

export const App = () => {
  return (
    <div>
      <UserCart {...user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};


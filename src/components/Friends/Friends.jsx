export const FriendsList = ({ friends }) => {
  return (
    <section className="friends">
      <h2 className="title">Friends</h2>

      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className="item">
            <span className="status" style={{ height: 50, borderRadius: '50%', backgroundColor: isOnline ? 'green' : 'tomato' }}>{isOnline}</span>
            <img className="avatar1" src={avatar} alt={name} width="48px" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
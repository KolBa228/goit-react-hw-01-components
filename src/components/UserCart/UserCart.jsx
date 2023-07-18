import PropTypes from 'prop-types';
export const UserCart = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
              <p className="location">{location}</p>
                    <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
      </div>
    </section>
  );
};

UserCart.propTypes = {
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string,
avatar: PropTypes.string.isRequired,
stats: PropTypes.shape({
followers: PropTypes.number.isRequired,
views: PropTypes.number.isRequired,
likes: PropTypes.number.isRequired,
}).isRequired,
};
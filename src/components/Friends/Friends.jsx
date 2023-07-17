export const FriendsList = ({ children }) => {
    return (
        <section className="friends">
      <h2 className="title">Friends</h2>

    <ul className="friend-list">
        {children}
    </ul>
    </section>
    )
}
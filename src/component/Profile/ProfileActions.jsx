export default function ProfileActions({ isFollowing, onToggle }) {
  return (
    <button onClick={onToggle} className={isFollowing ? "btn following" : "btn"}>
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}


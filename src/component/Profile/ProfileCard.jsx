import { useToggle } from "../../hooks/useToggle";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";
import "./ProfileCard.css";

export default function ProfileCard({ profile }) {
  const [isFollowing, toggleFollow] = useToggle(false);

  return (
    <article className="profile-card">
      <ProfileInfo {...profile} />
      <ProfileActions
        isFollowing={isFollowing}
        onToggle={toggleFollow}
      />
    </article>
  );
}




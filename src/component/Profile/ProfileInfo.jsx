export default function ProfileInfo({ name, role, description }) {
  return (
    <div className="profile-info">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
}

import "./style.scss";

export function ProfileCard({ profile }) {
  return (
    <div className="profile-card ">
      <div className="profile-img">
        <img src={profile.image} alt="doctor" />
      </div>
      <div>
        <div className="title">{profile.name}</div>
        <div className="subtitle">{profile.occupation}</div>
      </div>
    </div>
  );
}

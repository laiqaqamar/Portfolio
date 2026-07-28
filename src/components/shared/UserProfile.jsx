export default function UserProfile({ name, role, experience }) {
  return (
    <div className="user-card">

      <div className="user-avatar">
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </div>

      <div className="user-body">
        <h3>{name}</h3>
        <p className="card-meta">{role}</p>
        <p className="user-experience">{experience} experience</p>
      </div>

    </div>
  );
}

import UserProfile from "../shared/UserProfile";

const teamMembers = [
  { name: "Laiqa Qamar", role: "Frontend Developer", experience: "1 year" },
  { name: "Aisha Khan", role: "Backend Developer", experience: "2 years" },
  { name: "sibal  sardar", role: "UI/UX Designer", experience: "3 years" },
];

export default function Team() {
  return (
    <section id="team" className="section team">
      <h2 className="section-title">Team Profiles</h2>

      <p className="section-subtitle">
        Reusable profile cards rendered dynamically from props.
      </p>

      <div className="card-grid">
        {teamMembers.map((member) => (
          <UserProfile
            key={member.name}
            name={member.name}
            role={member.role}
            experience={member.experience}
          />
        ))}
      </div>
    </section>
  );
}

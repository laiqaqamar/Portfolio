export default function ProjectCard({
  title,
  tech,
  description,
  image
}) {
  return (
    <div className="project-card">

      <div className="img-placeholder card-photo1">
        <img
          src={image}
          alt={title}
          className="card-photo"
        />
      </div>

      <div className="card-body">
        <h3>{title}</h3>

        <p className="card-meta">{tech}</p>

        <p>{description}</p>
      </div>

    </div>
  );
}
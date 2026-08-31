function Cast({ name, role, number }) {
  return (
    <article className="cast-card">
      <span className="cast-number">{number}</span>
      <span className="cast-orbit" aria-hidden="true" />
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}

export default Cast;

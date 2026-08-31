function Cast({ Title, Inf }) {
  return (
    <article className="w-[100%] bg-gray-800 p-2 font-extrabold rounded-2xl">
      <h1>{Title}</h1>
      <p>{Inf}</p>
    </article>
  );
}

export default Cast;

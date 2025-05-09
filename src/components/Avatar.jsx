export default function Avatar(props) {
  const { person, size } = props;
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.imageId}</p>
      <p>{size}</p>
    </div>
  );
}

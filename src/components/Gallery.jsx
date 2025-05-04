import Profile from "./Profile";

export function Admin() {
  return <h2>Admin section</h2>;
}

export function Button() {
  return <h3>Button on click</h3>;
}

export default function Gallery() {
  return (
    <>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}

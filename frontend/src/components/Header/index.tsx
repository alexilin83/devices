import Navigation from "../Navigation";

export default function Header() {

  return (
    <header className="relative flex items-center h-24 px-10 shadow-md z-10">
      <h1>IoT</h1>
      <Navigation />
    </header>
  );
}

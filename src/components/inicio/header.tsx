import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">FullFit System</h1>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-green-400">Dashboard</Link>
        <Link to="/classes" className="hover:text-green-400">Classes</Link>
        <Link to="/trainers" className="hover:text-green-400">Trainers</Link>
        <Link to="/profile" className="hover:text-green-400">Profile</Link>
        <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
      </nav>
    </header>
  );
}
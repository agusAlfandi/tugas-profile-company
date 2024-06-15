import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer mt-7 flex justify-around bg-neutral p-10 text-neutral-content">
      <aside>
        <div className="btn btn-ghost text-xl text-green-500">TECH.</div>
        <p>© 2024 TECH. All Rights Reserved</p>
      </aside>
      <nav>
        <h1 className="footer-title text-white">Social</h1>
        <div className="grid grid-flow-col gap-4">
          <FaLinkedin size={35} />
          <FaGithub size={35} />
          <FaTwitter size={35} />
        </div>
      </nav>
    </footer>
  );
}

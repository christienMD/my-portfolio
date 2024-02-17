import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between gap-7">
        <Link
          href="/"
          className="text-3xl md:text-3xl text-white font-semibold tracking-tight"
        >
          <span className="tracking-tighter">MD</span>
          <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Christien
          </span>
        </Link>
        <p className="text-slate-600 ">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

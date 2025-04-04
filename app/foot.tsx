import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-black p-4">
      <Link className="text-xl mr-4" href="/imprint">
        Imprint
      </Link>
      <Link className="text-xl" href="/privacy">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;

import Button from "./Button";
import Navitem from "./NavItem";

export default function Header() {
  return (
    <div className="h-32 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <a href="/" className="inline-block">
          <img src="logo.svg" alt="Logo" width="100" height="80" />
        </a>
      </div>

      <nav className="flex justify-between space-x-8">
        <Navitem link={"/"} title={"Home"} />
        <Navitem link={"/about"} title={"About"} />
        <Navitem link={"/work"} title={"Works"} />
        <Navitem link={"/Contact"} title={"Contact"} />
      </nav>
      <div className=" w-32">
        <Button label={"Let's Talk"} />
      </div>
    </div>
  );
}

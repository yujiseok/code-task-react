import logo from "../../public/logo.png";

const Logo = () => {
  return (
    <div className="w-full max-w-7xl px-6">
      <h1 className="pb-12 pt-4">
        <img src={logo} alt="code logo" />
      </h1>
    </div>
  );
};
export default Logo;

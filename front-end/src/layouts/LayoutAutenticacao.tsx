import Logo from "/public/logo.jpg";

export default function LayoutAutenticacao({ children }: any) {
  return (
    <>
      <div className="h-full w-full grid place-content-center bg-zinc-200">
        <div className="bg-black text-white w-80 h-auto flex flex-col items-center rounded-2xl out-none px-7 py-16">
          <img src={Logo} alt="Logo" className="w-48" />
          {children}
        </div>
      </div>
    </>
  );
}

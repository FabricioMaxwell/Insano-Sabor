import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email "
          className="border-2 border-transparent outline-none border-b-[#eca257] px-3 py-3 rounded-lg  
         placeholder:text-white placeholder:font-semibold placeholder:text-sm 
         hover:border-[#eca257]  
         focus:border-2 focus:border-amber-500"
        />
      </div>

      <div className="w-full">
        <label htmlFor="senha">Senha</label>
        <div
          className="w-full border-2 border-transparent outline-none border-b-[#eca257] px-3 py-3 rounded-lg  
         placeholder:text-white placeholder:font-semibold placeholder:text-sm 
         hover:border-[#eca257]  
         focus-within:border-2 focus-within:border-amber-500 flex items-center justify-between"
        >
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            className="outline-none w-full bg-transparent placeholder:text-white placeholder:font-semibold"
          />
          {/* {mostrarSenha ? <GiPadlock /> : <GiPadlockOpen />} */}
        </div>
      </div>

      <button className="border-2 border-zinc-500 px-2 py-2 rounded-lg cursor-pointer  font-bold hover:border-amber-400">
        Entrar
      </button>
    </form>
  );
}

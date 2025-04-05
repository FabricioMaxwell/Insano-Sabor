<template>
  <div class="w-full xl:w-[500px] xl:justify-center flex flex-col gap-1">
    <form
      className="flex flex-col gap-5 font-bold bg-white px-6 py-12 rounded-[50px] "
    >
      <h1 class="mx-auto font-bold text-xl xl:text-[40px]">
        Entre na sua conta
      </h1>
      <div className="flex flex-col gap-2 xl:text-[32px]">
        <label htmlFor="email">Endereço de email :</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email "
          className=" text-white w-full border-2 rounded-[50px] hover:border-black transition-all duration-200 placeholder:text-white placeholder:text-sm bg-[#FF5757] px-6 py-2 xl:placeholder:text-2xl"
        />
      </div>

      <div className="w-full grid gap-2 xl:text-[32px]">
        <label htmlFor="senha">Senha :</label>
        <div
          className="w-full border-2 border-transparent rounded-[50px] hover:border-2 hover:border-black transition-all duration-200  bg-[#FF5757] px-6 py-2 flex items-center justify-between xl:h-[67.2px]"
        >
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            className=" text-white outline-none w-full placeholder:font-bold placeholder:text-white placeholder:text-sm xl:placeholder:text-2xl"
          />
        </div>
      </div>
    </form>
    <div
      class="flex items-center justify-between text-[11px] text-white mt-6 px-3"
    >
      <p class="hover:underline cursor-pointer xl:text-2xl">
        Não tem uma conta <br />Registre-se agora!
      </p>
      <button
        className="w-30 rounded-[50px] bg-white text-black px-2 py-2 cursor-pointer font-bold uppercase outline-none xl:text-3xl xl:w-44 "
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script setup></script>

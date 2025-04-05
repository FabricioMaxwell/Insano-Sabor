<template>
  <section
    className="h-full w-full bg-[#EC4E50] px-12 pb-9 flex flex-col items-center gap-3 z-40 relative overflow-hidden xl:flex-row xl:justify-between xl:p-0"
  >
    <div
      class="w-[300px] flex items-end justify-center rounded-b-[200px] bg-[#F1904C] xl:w-[700px] xl:rounded-b-none xl:rounded-tr-[500px] xl:items-end xl:h-full"
    >
      <img :src="logo" alt="logo" class="w-40 h-48 xl:w-[600px] xl:h-[auto]" />
    </div>
    <div className=" text-black flex flex-col w-80 rounded-[45px] xl:w-[800px]">
      <slot />
    </div>
    <div class="absolute top-0 left-2 -z-10 rotate-6 xl:left-180">
      <img :src="colher" alt="" class="w-14 xl:w-20" />
    </div>
    <div class="absolute top-2 right-0 -z-10 -rotate-45 xl:right-50 xl:top-32">
      <img :src="colher" alt="" class="w-10 xl:w-20" />
    </div>
    <div class="absolute bottom-2 -z-10 xl:left-230">
      <img :src="colher" alt="" class="w-16" />
    </div>
    <div
      class="absolute bottom-50 -left-1 -z-10 rotate-90 xl:left-260 xl:z-50 xl:bottom-36"
    >
      <img :src="colher" alt="" class="w-12 xl:w-16" />
    </div>
    <div class="absolute top-40 left-8 -z-10 xl:z-50 xl:left-250 xl:top-50">
      <img :src="colher" alt="" class="w-14" />
    </div>
    <div class="absolute top-50 right-0 -z-10 xl:-right-4 xl:top-0">
      <img :src="colher" alt="" class="w-10 xl:w-16" />
    </div>
    <div class="absolute top-96 right-0 -z-10 xl:right-20 xl:top-130">
      <img :src="colher" alt="" class="w-14" />
    </div>
    <div class="absolute -bottom-8 right-0 -z-10">
      <img :src="colher" alt="" class="w-14" />
    </div>
    <div class="absolute -bottom-8 left-0 -z-10 -rotate-12">
      <img :src="colher" alt="" class="w-14" />
    </div>
  </section>
</template>

<script setup>
import logo from "/public/logo.png";
import colher from "/public/colher.png";
</script>

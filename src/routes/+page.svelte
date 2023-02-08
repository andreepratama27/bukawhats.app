<script lang="ts">
  let phoneNumber: string;

  function forwardWhatsapp() {
    const link = document.createElement('a')
    phoneNumber = phoneNumber.toString().slice(0, phoneNumber.toString().length);

    link.href = `https://api.whatsapp.com/send?phone=62${parseInt(phoneNumber, 10)}`
    link.target = '_blank'

    link.click()
  };
</script>

<section id="app">
  <div class="header  h-56 flex flex-col justify-center leading-6 relative bg-green-500 z-10">
    <div class="max-w-2xl w-full mx-auto px-4 py-8 lg:py-8">
      <p class="text-white pb-1 font-bold text-xl">Kirim <span class="bg-green-800 px-2 py">Whatsapp</span> tanpa perlu simpan nomor <span class="text-3xl">📱</span></p>
      <p class="text-white font-light text-lg">Cepat, mudah, gratis sampe <span class="text-xl text-yellow-300 font-bold border-b-2 border-dashed border-yellow-300">Kiamat</span> <span class="text-3xl">🤯</span></p>

      <div class="overlay w-full h-full absolute top-0 left-0 z-0 opacity-20"></div>
    </div>
  </div>

  <div class="py-8 px-4 lg:py-8 max-w-2xl mx-auto">
    <p class="font-bold">Nomor Whatsapp</p>
    <div class="w-28 mt-2 mb-4 h-1 border-gray-500 border-b-2 border-dashed"></div>

    <div class="input-wrapper py-4">
      <input type="number" class="w-full bg-white p-4 border-2 rounded-none outline-none border-black" placeholder="Masukkan nomor Whatsapp" bind:value={phoneNumber} required>
    </div>
    
    <button class='w-full border-2 mt-2 shadow-skew border-black p-4 bg-white disabled:bg-gray-200' disabled={!phoneNumber} on:click={forwardWhatsapp}>
      Kirim
    </button>
  </div>
</section>

<footer class='absolute bottom-0 h-14 bg-white border-t w-full items-center justify-center flex'>
  <p class='text-gray-500 text-xs'>&copy; 2023 Andre - <a href="https://github.com/andreepratama27" target="_blank" rel="noreferrer">github.com/andreepratama27</a></p>
</footer>

<style type="postcss">
  :global(html) {
    @apply bg-white;
  }

  .overlay {
    background-image: url('/whatsapp.jpeg');
  }
</style>
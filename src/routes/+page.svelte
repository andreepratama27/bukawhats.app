<script lang="ts">
  let phoneNumber: number;

  function forwardWhatsapp() {
    const link = document.createElement('a')
    link.href = `https://web.whatsapp.com/send?phone=${phoneNumber}`
    link.target = '_blank'

    link.click()
  };
</script>

<section id="app">
  <div class="header p-4 px-8 h-56 flex flex-col justify-center leading-6 relative bg-green-500 z-10">
    <p class="text-white font-bold pb-1">Kirim whatsapp tanpa perlu simpan nomor</p>
    <p class="text-white font-light">Cepat, mudah, gratis!</p>

    <div class="h-1 bg-gray-800 w-32 mt-2"></div>

    <div class="overlay w-full h-full absolute top-0 left-0 z-0 opacity-20"></div>
  </div>

  <div class="p-8">
    <p>Nomor Whatsapp</p>

    <div class="input-wrapper py-4">
      <input type="number" class="w-full bg-white p-4 border-2 rounded-none outline-none border-black" placeholder="Masukkan nomor Whatsapp" bind:value={phoneNumber}>
    </div>
    
    <button class='w-full border-2 mt-4 shadow-skew border-black p-4 bg-white disabled:bg-gray-200' disabled={!phoneNumber} on:click={forwardWhatsapp}>
      Kirim
    </button>
  </div>
</section>

<footer class='absolute bottom-0 h-14 bg-white border-t w-full items-center justify-center flex'>
  <p class='text-gray-500 text-xs'>&copy; 2023 Andre - <a href='#'>github.com/andreepratama27</a></p>
</footer>

<style type="postcss">
  :global(html) {
    @apply bg-white;
  }

  .overlay {
    background-image: url('/whatsapp.jpeg');
  }
</style>
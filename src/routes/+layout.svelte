<script>
  import "../app.css";
  import "@fontsource/poppins";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

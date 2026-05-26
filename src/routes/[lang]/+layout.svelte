<script lang="ts">
  import i18n from '$lib/i18n';
  import { page } from '$app/stores';
  import { setContext } from 'svelte';
  import "../../app.css";

  let { children } = $props();

  let ready = $state(false);
  let lang = $derived($page.params.lang);

  $effect(() => {
    i18n.changeLanguage(lang).then(() => {
      ready = true;
    });
  });

  let t = $derived((key: string) => i18n.t(key));
  setContext('t', () => t);
</script>

<p>ready: {ready} | lang: {lang}</p>

{#if ready}
  {@render children()}
{:else}
  <p>Chargement...</p>
{/if}
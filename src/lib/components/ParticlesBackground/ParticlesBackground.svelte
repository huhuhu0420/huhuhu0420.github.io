<script lang="ts">
  import { onMount } from "svelte";
  import { particlesInit } from "@tsparticles/svelte";
  import { loadSlim } from "@tsparticles/slim";
  import { theme } from "$lib/stores/theme";

  let ParticlesComponent: any;

  const getParticlesConfig = (isDark: boolean) => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: isDark ? "#ffffff" : "#000000" },
      links: {
        color: isDark ? "#ffffff" : "#000000",
        distance: 150,
        enable: true,
        opacity: isDark ? 0.3 : 0.2,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 1
      },
      number: { density: { enable: true, width: 1920, height: 1080 }, value: 80 },
      opacity: { value: isDark ? 0.5 : 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  });

  // call once per app
  void particlesInit(async (engine) => {
    await loadSlim(engine);
  });

  onMount(async () => {
    const mod = await import("@tsparticles/svelte");
    ParticlesComponent = mod.default;
  });
</script>

{#if ParticlesComponent}
  <svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    class="particles-container"
    options={getParticlesConfig($theme)}
  />
{/if}


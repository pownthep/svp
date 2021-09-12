<script lang="ts">
  import TitlebarButton from './TitlebarButton.svelte';
  import MaximizeIcon from '../assets/maximize.svelte';
  import MinimizeIcon from '../assets/minimize.svelte';
  import { invoke } from '../utils/electron';

  let isMaximize: boolean = false;

  async function onClick() {
    invoke('window-toggle-maximize');
    isMaximize = !isMaximize;
  }
</script>

<TitlebarButton handleClick={onClick} hoverColor="grey">
  {#if isMaximize}
    <MinimizeIcon />
  {:else}
    <MaximizeIcon />
  {/if}
</TitlebarButton>

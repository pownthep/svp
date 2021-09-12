<script lang="ts">
  import TitlebarButton from './TitlebarButton.svelte';
  import HideIcon from '../assets/hide.svelte';
  import { invoke } from '../utils/electron';
  const handleClick = () => invoke('window-minimize');
</script>

<TitlebarButton {handleClick} hoverColor="grey">
  <!-- <img src={hideIcon} alt="hide" height="12" width="12" /> -->
  <HideIcon />
</TitlebarButton>

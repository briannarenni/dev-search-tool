<script>
  import { Sun, Moon } from 'lucide-svelte';
  import { currentTheme, updateUserTheme } from '../../scripts/stores/theme-store';

  let toggleSwitch;
  let isChecked = $currentTheme === 'dark';
  $: isChecked = $currentTheme === 'dark';

  const handleThemeToggle = () => {
    let newTheme = $currentTheme === 'light' ? 'dark' : 'light';
    updateUserTheme(newTheme);
  };
</script>

<div class="toggle-switch">
  <Sun class="light-mode-icon" />
  <label class="switch">
    <input
      bind:this={toggleSwitch}
      bind:checked={isChecked}
      on:click={handleThemeToggle}
      type="checkbox"
      role="switch"
      aria-checked={isChecked}
      aria-label="Toggle dark mode"
    />
    <span class="slider round" />
  </label>
  <Moon class="icon dark-mode-icon" />
</div>

<style>
  .toggle-switch {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
    margin: 0 10px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--null-text);
    transition: 0.5s;
    border-radius: 28px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.5s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }
</style>

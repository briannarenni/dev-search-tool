<script>
  import { Sun, Moon } from 'lucide-svelte';
  import { currentTheme, updateUserTheme } from '../../scripts/themeStore';

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
    transform: scale(0.9);
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
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
    background-color: var(--null-color);
    transition: 0.5s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.5s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  @media (max-width: 768px) {
    .toggle-switch {
      transform: scale(0.8);
    }
  }
</style>

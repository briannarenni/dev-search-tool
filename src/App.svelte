<script>
  import { Header, Main, Footer } from './lib/layout/index';
</script>

<div class="app-container">
  <Header />
  <Main />
  <Footer />
</div>

<style>
  .app-container {
    margin-block: var(--gap-lg);
    padding-inline: var(--gap-lg);
  }

  /* Queries */
  @media (min-width: 768px) {
    .app-container {
      margin-inline: calc(var(--gap-lg) * 2);
      padding-inline: var(--gap-xl);
    }
  }

  @media (min-width: 992px) {
    .app-container {
      margin-inline: calc(var(--gap-xl) * 2.5);
    }
  }

  @media (min-width: 1200px) {
    .app-container {
      margin-block: var(--gap-xl);
    }
  }

  @media (min-width: 1440px) {
    .app-container {
      margin-block: var(--gap-xl);
    }
  }
</style>

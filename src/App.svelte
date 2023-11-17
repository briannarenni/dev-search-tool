<script>
  import { Header, Search, Card, Footer } from './lib/layout/index';
</script>

<div class="app-container">
  <Header />

  <main class="main-container">
    <Search />
    <Card />
  </main>

  <Footer />
</div>

<!-- TODO: FINISH -->
<style>
  .app-container {
    margin: var(--gap-sm);
    padding: var(--gap-xs);
  }

  @media (min-width: 768px) {
    .app-container {
      margin-block: var(--gap-md);
      margin-inline: var(--gap-md);
      padding: var(--gap-sm);
    }
  }

  @media (min-width: 992px) {
    .app-container {

      margin-inline: var(--gap-lg);
      padding: var(--gap-md);
    }
  }
</style>

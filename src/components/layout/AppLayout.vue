<template>
  <div class="app-layout">
    <app-header />
    <main class="content">
      <app-container>
        <slot></slot>
      </app-container>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default {
  name: "app-layout",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
  },
};
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
}

.app-layout .content {
  flex-grow: 1;
  min-height: calc(100vh - 100px);
}
</style>

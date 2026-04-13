<script setup lang="ts">
import { cn } from './lib/utils'
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div :class="cn('teste', 'aaaa')"></div>
  </UApp>
</template>

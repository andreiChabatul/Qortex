<template>
  <router-view />
</template>

<script setup lang="ts">
import FakeDb from './fakeDB/FakeDb';

defineOptions({
  name: 'App'
});
FakeDb.initDB();
</script>

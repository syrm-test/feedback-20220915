<script lang="ts" setup>

import TestSlotComponent from '@/components/TestSlotComponent.vue'
</script>

<template>

<TestSlotComponent>

    <template v-slot:title>
        <span>标题</span>
    </template>

    <template v-slot:body>
        <span>主体</span>
    </template>

    <template v-slot:233333333333>
        <h2>
            嗷呜~
        </h2>
    </template>

</TestSlotComponent>

</template>

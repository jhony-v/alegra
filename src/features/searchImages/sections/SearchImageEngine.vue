<script lang="ts" setup>
import OverviewBox from "@/shared/components/ui/OverviewBox.vue";
import SearchEngine from "@/shared/components/ui/SearchEngine.vue";
import useTranslation from "@/shared/composables/useTranslation";
import useSearchImages from "../composables/useSearchImages";
const { search, term } = useSearchImages();
const t = useTranslation();
</script>
<template>
  <OverviewBox :title="t('searchNav.title')">
    <div class="md:absolute -mt-4 md:max-w-4xl left-0 right-0 mx-auto">
      <SearchEngine
        @search="search"
        v-model="term"
        :placeholder="t('searchNav.placeholder')"
      />
    </div>
  </OverviewBox>
</template>

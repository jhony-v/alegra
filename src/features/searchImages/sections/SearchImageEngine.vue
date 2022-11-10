<script lang="ts" setup>
import ChangeLanguage from "@/features/application/sections/ChangeLanguage.vue";
import OverviewBox from "@/shared/components/ui/OverviewBox.vue";
import SearchEngine from "@/shared/components/ui/SearchEngine.vue";
import useTranslation from "@/shared/composables/useTranslation";
import useSearchImages from "../composables/useSearchImages";

const { search, term, isInvalidTerm } = useSearchImages();
const t = useTranslation();
</script>
<template>
  <OverviewBox :title="t('searchNav.title')">
    <template #background>
      <div class="absolute right-2 top-2">
        <ChangeLanguage />
      </div>
    </template>
    <div class="engine-box">
      <SearchEngine
        @search="search"
        v-model="term"
        :invalid="isInvalidTerm"
        :invalid-message="t('invalidTermLength')"
        :placeholder="t('searchNav.placeholder')"
      />
    </div>
  </OverviewBox>
</template>
<style lang="scss" scoped>
.engine-box {
  @apply md:absolute -mt-4 xl:mt-8 md:max-w-4xl left-0 right-0 mx-auto;
}
</style>

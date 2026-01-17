import { AVERY_5160_MAX_NUMBER_OF_LABELS_PER_PAGE } from '@repo/utils/averyLabels';

export function getShouldDisableGenerateSpineLabelsButton(numberOfSelectedBooks: number) {
  const enableGenerateSpineLabelsButton =
    numberOfSelectedBooks > 0 && numberOfSelectedBooks <= AVERY_5160_MAX_NUMBER_OF_LABELS_PER_PAGE;
  return !enableGenerateSpineLabelsButton;
}

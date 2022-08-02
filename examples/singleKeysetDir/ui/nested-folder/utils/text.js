import i18n, { i18nCODEMODE } from "~/utils/i18n";

export const notTransformedText = i18n("example.keyset", "key");
export const pluralTextTransform = ({ count }) =>
  i18nCODEMODE(
    "example.keyset",
    "count",
    ["Один огурчик", "Пару огурчиков", "Много огурчиков {count}"],
    { count }
  );

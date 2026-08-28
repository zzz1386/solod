import type { LessonContent } from "@/lib/types";
import { lesson20Content } from "@/content/lessons/belgiyskie-eli";
import { lesson15Content } from "@/content/lessons/bitter-pale-ale";
import { lesson13Content } from "@/content/lessons/bok";
import { lesson1Content } from "@/content/lessons/chto-takoe-pivo";
import { lesson3Content } from "@/content/lessons/degustatsiya";
import { lesson9Content } from "@/content/lessons/el-i-lager";
import { lesson4Content } from "@/content/lessons/etiketka";
import { lesson16Content } from "@/content/lessons/ipa";
import { lesson5Content } from "@/content/lessons/istoriya-mira";
import { lesson2Content } from "@/content/lessons/kak-varyat-pivo";
import { lesson10Content } from "@/content/lessons/karta-stiley";
import { lesson22Content } from "@/content/lessons/kisloe-pivo";
import { lesson21Content } from "@/content/lessons/kolsch-alt-gose";
import { lesson14Content } from "@/content/lessons/massovyy-lager";
import { lesson12Content } from "@/content/lessons/nemetskie-lagery";
import { lesson8Content } from "@/content/lessons/ot-lagera-k-kraftu";
import { lesson11Content } from "@/content/lessons/pilsner";
import { lesson6Content } from "@/content/lessons/pivo-na-rusi";
import { lesson24Content } from "@/content/lessons/pivo-i-eda";
import { lesson17Content } from "@/content/lessons/porter-stout";
import { lesson19Content } from "@/content/lessons/pshenichnoe";
import { lesson18Content } from "@/content/lessons/russkiy-imperskiy-stout";
import { lesson23Content } from "@/content/lessons/sovremennyy-kraft";
import { lesson7Content } from "@/content/lessons/sovetskie-sorta";

export const lessonContentBySlug: Record<string, LessonContent> = {
  "chto-takoe-pivo": lesson1Content,
  "kak-varyat-pivo": lesson2Content,
  degustatsiya: lesson3Content,
  etiketka: lesson4Content,
  "istoriya-mira": lesson5Content,
  "pivo-na-rusi": lesson6Content,
  "sovetskie-sorta": lesson7Content,
  "ot-lagera-k-kraftu": lesson8Content,
  "el-i-lager": lesson9Content,
  "karta-stiley": lesson10Content,
  pilsner: lesson11Content,
  "nemetskie-lagery": lesson12Content,
  bok: lesson13Content,
  "massovyy-lager": lesson14Content,
  "bitter-pale-ale": lesson15Content,
  ipa: lesson16Content,
  "porter-stout": lesson17Content,
  "russkiy-imperskiy-stout": lesson18Content,
  pshenichnoe: lesson19Content,
  "belgiyskie-eli": lesson20Content,
  "kolsch-alt-gose": lesson21Content,
  "kisloe-pivo": lesson22Content,
  "sovremennyy-kraft": lesson23Content,
  "pivo-i-eda": lesson24Content,
};

export function getLessonContent(slug: string) {
  return lessonContentBySlug[slug];
}

import requiredMask from "../assets/images/required-mask.png";
import recommendedMask from "../assets/images/recommended-mask.png";
import requiredTowel from "../assets/images/required-towel.png";
import recommendedTowel from "../assets/images/recommended-towel.png";
import partialFountain from "../assets/images/partial-fountain.png";
import forbiddenFountain from "../assets/images/forbidden-fountain.png";
import requiredLockerroom from "../assets/images/required-lockerroom.png";
import partialLockerroom from "../assets/images/partial-lockerroom.png";
import forbiddenLockerroom from "../assets/images/forbidden-lockerroom.png";

interface LegendsImage {
  url: string;
  alt: string;
  description: string;
}

interface Legend {
  description: string;
  images: LegendsImage[];
}

export const LEGEND: Legend[] = [
  {
    description: "Máscara",
    images: [
      {
        url: requiredMask,
        alt: "required-mask",
        description: "Obrigatório",
      },
      {
        url: recommendedMask,
        alt: "recommended-mask",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: requiredTowel,
        alt: "required-towel",
        description: "Obrigatório",
      },
      {
        url: recommendedTowel,
        alt: "recommended-towel",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: partialFountain,
        alt: "partial-fountain",
        description: "Parcial",
      },
      {
        url: forbiddenFountain,
        alt: "forbidden-fountain",
        description: "Proibido",
      },
    ],
  },
  {
    description: "Vestiários",
    images: [
      {
        url: requiredLockerroom,
        alt: "required-lockerroom",
        description: "Liberado",
      },
      {
        url: partialLockerroom,
        alt: "partial-lockerroom",
        description: "Parcial",
      },
      {
        url: forbiddenLockerroom,
        alt: "forbidden-lockerroom",
        description: "Proibido",
      },
    ],
  },
];

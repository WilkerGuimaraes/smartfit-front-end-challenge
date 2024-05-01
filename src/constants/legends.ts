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
        url: "/required-mask.png",
        alt: "required-mask",
        description: "Obrigatório",
      },
      {
        url: "/recommended-mask.png",
        alt: "recommended-mask",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: "/required-towel.png",
        alt: "required-towel",
        description: "Obrigatório",
      },
      {
        url: "/recommended-towel.png",
        alt: "recommended-towel",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: "/partial-fountain.png",
        alt: "partial-fountain",
        description: "Parcial",
      },
      {
        url: "/not_allowed-fountain.png",
        alt: "forbidden-fountain",
        description: "Proibido",
      },
    ],
  },
  {
    description: "Vestiários",
    images: [
      {
        url: "/allowed-lockerroom.png",
        alt: "required-lockerroom",
        description: "Liberado",
      },
      {
        url: "/partial-lockerroom.png",
        alt: "partial-lockerroom",
        description: "Parcial",
      },
      {
        url: "/closed-lockerroom.png",
        alt: "forbidden-lockerroom",
        description: "Proibido",
      },
    ],
  },
];

export interface ArticleCategoryElement {
    id:   number;
    name: ArticleCategoryName;
}

export enum ArticleCategoryName {
    Alimentación = "Alimentación",
    Animales = "Animales",
    Ciencia = "Ciencia",
    Consumo = "Consumo",
    DesastresMedioambientales = "Desastres medioambientales",
    Género = "Género",
    Legislación = "Legislación",
    MigraciónRacismo = "Migración / Racismo",
    Personajes = "Personajes",
    Política = "Política",
    Religión = "Religión",
    Salud = "Salud",
    Sexualidad = "Sexualidad",
    Social = "Social",
    Terrorismo = "Terrorismo",
    Trabajo = "Trabajo",
    Tráfico = "Tráfico"
}

export interface DebunkedURL {
    id:        number;
    url:       string;
    corrected: boolean;
}

export enum PublishingType {
    All = "all",
    Fb = "fb",
    Maldita = "maldita",
    Web = "web",
}

export enum WebCategoryName {
    WebBulera = "Web bulera",
    WebConBulos = "Web con bulos",
    WebDeHumorODeCreaciónDeBulos = "Web de “humor” o de creación de bulos",
    WebImpostora = "Web impostora",
    WebSatírica = "Web satírica",
}
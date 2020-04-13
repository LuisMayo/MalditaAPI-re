import { DebunkedURL, ArticleCategoryElement, PublishingType, WebCategoryName } from "./general-interfaces";

export interface WebsiteCategoriesResponse {
    id:       number;
    url:      string;
    name:     string;
    category: WebsiteCategory;
    debunks:  Debunk[];
}

/* Algunas de las interfaces pueden estar duplicadas en distintas respuestas, no obstante no se mueven al fichero de "generales" porque
son ligeramente diferentes en los atributos que devuelven (aunque a bajo nivel sean el mismo objeto) */
interface WebsiteCategory {
    id:                 number;
    public_name:        WebCategoryName;
    public_description: string;
    color:              string;
    icon:               string;
}

interface Debunk {
    title:           string;
    content:         string;
    keywords:        string[] | { [key: string]: string };
    created_at:      Date;
    slug:            string;
    id:              number;
    urls?:           string[];
    debunk_image?:   string;
    categories:      ArticleCategoryElement[];
    featured:        boolean;
    show_in_web:     boolean;
    debunked_urls:   DebunkedURL[];
    eu_debunk:       boolean;
    publishing_type: PublishingType;
}



import { WebCategoryName } from "./general-interfaces";

export interface WebsiteResponse {
    id:       number;
    url:      string;
    name:     string;
    category: Category;
    debunks:  Debunk[];
}

/* Algunas de las interfaces pueden estar duplicadas en distintas respuestas, no obstante no se mueven al fichero de "generales" porque
son ligeramente diferentes en los atributos que devuelven (aunque a bajo nivel sean el mismo objeto) */
interface Category {
    id:                 number;
    public_name:        WebCategoryName;
    public_description: string;
}

interface Debunk {
    slug:        string;
    id:          number;
    featured:    boolean;
    show_in_web: boolean;
}

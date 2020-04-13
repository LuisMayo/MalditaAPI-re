export interface URLResponse {
    id:        number;
    url:       string;
    debunk:    Debunk;
    corrected: boolean;
}

/* Algunas de las interfaces pueden estar duplicadas en distintas respuestas, no obstante no se mueven al fichero de "generales" porque
son ligeramente diferentes en los atributos que devuelven (aunque a bajo nivel sean el mismo objeto) */
interface Debunk {
    id: number;
}

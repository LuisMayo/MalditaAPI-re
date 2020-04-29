export interface Report {
    "mb-title":   string;
    "mb-content": string; // Al final del contenido y tras un doble salto de línea (\n\n) vendrá la URL reportada
}

export interface ReportResponse {
    slug: string; // Nombre generado por el servidor para el report, suele incluir algo del titulo y números si no es único
}
import { ArticleCategoryElement, DebunkedURL, PublishingType } from "./general-interfaces";

export interface DebunksResponse {
    title:           string;
    content:         string;
    keywords:        string[] | { [key: string]: string };
    created_at:      Date;
    slug:            string;
    id:              number;
    urls?:           string[] | { [key: string]: string };
    debunk_image?:   string;
    categories:      ArticleCategoryElement[];
    featured:        boolean;
    show_in_web:     boolean;
    debunked_urls:   DebunkedURL[];
    eu_debunk:       boolean;
    publishing_type: PublishingType;
}
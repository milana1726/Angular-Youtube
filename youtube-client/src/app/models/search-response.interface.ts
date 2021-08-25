import { ISearchItem } from "./search-item.interface";

export interface ISearchResponse {
    kind: string;
    etag: string;
    pageIngo: IPageInfo;
    items: ISearchItem[];
}

interface IPageInfo {
    totalResults: number;
    resultsPerPage: number;
}

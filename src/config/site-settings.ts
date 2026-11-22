export interface SiteSettings {
    readonly name: string;
    readonly shortName: string;
    readonly url: string;
    readonly description: string;
    readonly locale: string;
    readonly firstPublished: number;
    readonly author: string;
    readonly authorUrl: string;
    readonly companyName: string;
    readonly companyUrl: string;
    readonly companyTagline: string;
    readonly repositoryUrl: string;
}

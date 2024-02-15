export type AwardCategories = Record<string, AwardCategory>

export interface AwardCategory {
    full_name: string,
    nominees: string[],
}
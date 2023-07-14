import { OriginalCategoryResponseDTO } from "./originalCategoriey";

export interface ChildCategoryResponseDTO {
    childCategoryName : string,
    logoUrl : string,
    originalCategories : Array<OriginalCategoryResponseDTO>
}
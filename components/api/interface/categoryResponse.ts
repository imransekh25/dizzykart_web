
import { ChildCategoryResponseDTO } from "./childCategory"

export  interface CategoryResponse {
    parentCategoryName : string,
    logoUrl : string,
    childCategoryResponseDTO : Array<ChildCategoryResponseDTO>

}
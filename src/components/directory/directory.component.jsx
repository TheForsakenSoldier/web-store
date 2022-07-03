import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'
const Directory = ({categories})=>{
    return(categories.map((category)=>{
       return (
       <CategoryItem key={category.id} category={category}/>
       )
    }))

}
export default Directory
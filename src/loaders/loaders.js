const categorydata=async()=>{
    const loadedCategory = await fetch('category.josn');
    const category = await loadedCategory.json();
return category;
}
export {categorydata};
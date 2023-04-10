const jobDetailsData = async (params) => {

    const loadedProducts = await fetch('Featured.json');
    const products = await loadedProducts?.json();
    const findProduct = products.jobs?.map(product => product)
    const matchJob = findProduct?.find(product => product.id === Number.parseInt(params))
    return matchJob;
}
export default jobDetailsData;
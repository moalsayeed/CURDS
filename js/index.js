productNameInput = document.getElementById('productName');
productPrizeInput = document.getElementById('productPrize');
productDesInput = document.getElementById('productDes');
productCatogeryInput = document.getElementById('productCatogery');
SearchInput=document.getElementById("search");

var productContainer = [];

if(localStorage.getItem('Products')!=null)
    {
productContainer = JSON.parse(localStorage.getItem('Products'));
display(productContainer)
    }
// to  add product btn ;
function addProduct() {
    var Product = {
        name: productNameInput.value,
        price: productPrizeInput.value,
        catogery: productCatogeryInput.value,
        description: productDesInput.value
    }
    productContainer.push(Product);
    alert("Add is sucsses ")
  localStorage.setItem('Products',JSON.stringify(productContainer));
    clear();
    display(productContainer);
}
// to clear input ;
function clear() {
    productCatogeryInput.value = "";
    productDesInput.value = "";
    productPrizeInput.value = "";
    productNameInput.value = "";
}
// to display element ;
function display(productContainer) {
    var cartona = ``;
    for (let index = 0; index < productContainer.length; index++) {
        cartona +=
            `
        <tr>
                <td id="Name">${productContainer[index].name}</td>
                <td id="Prize">${productContainer[index].price}</td>
                <td id="Catogery">${productContainer[index].catogery}</td>
                <td id="Descrbtion">${productContainer[index].description}</td>
                <td><button onclick="Update(${index})" class="btn btn-outline-warning" id="updateElement">Update</button></td>
                <td><button id="delete" onclick="Delete(${index})" class="btn btn-outline-danger">Delete</button></td>
        </tr>
                `
    }
    document.getElementById("tableBody").innerHTML = cartona;
}
// to delete element
function Delete(noOfindex) {
    productContainer.splice(noOfindex, 1);
    display(productContainer);
    localStorage.setItem('Products',JSON.stringify(productContainer));

}
function Update(noOfindex) {
    productCatogeryInput.value = productContainer[noOfindex].catogery;
    productDesInput.value = productContainer[noOfindex].description;
    productPrizeInput.value = productContainer[noOfindex].price;
    productNameInput.value = productContainer[noOfindex].name;
    Delete(noOfindex);
    display(productContainer);
    localStorage.setItem('Products',JSON.stringify(productContainer));

}
function search(){
    var arraySearch=[];
    for (let index = 0; index < productContainer.length; index++) {
        if (productContainer[index].name.toLowerCase().includes(SearchInput.value.toLowerCase())) {
            // console.log(index);
            arraySearch.push(productContainer[index]);
        
    }
    display(arraySearch);
}   
}




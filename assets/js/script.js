var data = {

"Products" : [

    {
    "ProductTitle" : "Bic Plain Lighter",
    "MoreInfo" : "50 / Pieces Per Box <br/> $50/ Per Box <br/><br/> A lighter is a portable device which generates a flame, and can be used to ignite a variety of items."
    },
    {"ProductTitle" : "Bic Sports Lighter",
    "MoreInfo" : "32 / Pierces Per Box <br/> $96/ Per Box <br/><br/> A lighter is a portable device which generates a flame, and can be used to ignite a variety of items."
    },
    {"ProductTitle" : "Clipper Black Lighter",
    "MoreInfo" : "32 / Per Box <br/> $96/ Per Box <br/><br/> A lighter is a portable device which generates a flame, and can be used to ignite a variety of items."
    }   
]

    
}


// console.log(data);

function getData() {
    var productList = data.Products;

    productList.forEach(function(val) {
    
        var ProductTitle = val.ProductTitle;
        console.log(ProductTitle);

        var MoreInfo = val.MoreInfo;
        console.log(MoreInfo);

        getElementById('.grid').append();

    });

}



getData();








/*

function getData() {
    var productList = data.Products;

    productList.forEach(function(key, val) {
    
        var ProductTitle = val.ProductTitle

        console.log(ProductTitle);
    });

}



getData();





 */
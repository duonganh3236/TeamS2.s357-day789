// script.js
function showContent(contentId) {
    var contentElements = document.querySelectorAll('[id$="Content"]');
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = 'none';
    }

    var selectedContent = document.getElementById(contentId + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}



// Thêm hàm để hiển thị nội dung của Sản phẩm
function showProductsContent() {
    var contentElements = document.querySelectorAll('[id$="Content"]');
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = 'none';
    }

    var productsContent = document.getElementById('productsContent');
    if (productsContent) {
        productsContent.style.display = 'block';
    }
}


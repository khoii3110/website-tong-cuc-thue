document.addEventListener("DOMContentLoaded", function () {
    var listContainer = document.getElementById('list-container');
    var showMoreBtn = document.getElementById('show-more-btn');

    var maxItemsToShow = 3;

    for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
        listContainer.children[i].classList.add('d-none');
    }

    showMoreBtn.addEventListener('click', function () {
        for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
            listContainer.children[i].classList.remove('d-none');
        }
        showMoreBtn.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var listContainer = document.getElementById('list-container-2');
    var showMoreBtn = document.getElementById('show-more-btn-2');

    var maxItemsToShow = 3;

    for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
        listContainer.children[i].classList.add('d-none');
    }

    showMoreBtn.addEventListener('click', function () {
        for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
            listContainer.children[i].classList.remove('d-none');
        }
        showMoreBtn.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var listContainer = document.getElementById('list-container-3');
    var showMoreBtn = document.getElementById('show-more-btn-3');

    var maxItemsToShow = 3;

    for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
        listContainer.children[i].classList.add('d-none');
    }

    showMoreBtn.addEventListener('click', function () {
        for (var i = maxItemsToShow; i < listContainer.children.length; i++) {
            listContainer.children[i].classList.remove('d-none');
        }
        showMoreBtn.style.display = 'none';
    });
});

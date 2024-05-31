const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');

galleryTabs.forEach((currTab) => {
    currTab.addEventListener('click', (e) => {
        e.target.parentElement.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        let filterValue = e.target.getAttribute('data-filter');

        galleryItems.forEach((currItem) => {
            if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
                currItem.classList.remove('hide');
                currItem.classList.add('show');
            }
            else {
                currItem.classList.remove('show');
                currItem.classList.add('hide');
            }
        });

    });
});
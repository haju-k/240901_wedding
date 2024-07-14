
    $(document).ready(function() {
    let slideIndex = 0;
    const $slides = $('.column img');
    const $modal = $('#modal');
    const $modalImg = $('#modal-img');
    const $closeModal = $('.close');

    $slides.on('click', function() {
        const index = $slides.index(this);
        openModal();
        currentSlide(index);
    });

    $closeModal.on('click', function() {
        closeModal();
    });

    $('.prev').on('click', function() {
        changeSlide(-1);
    });

    $('.next').on('click', function() {
        changeSlide(1);
    });

    function openModal() {
        $modal.css('display', 'block');
    }

    function closeModal() {
        $modal.css('display', 'none');
    }

    function currentSlide(index) {
        slideIndex = index;
        showSlides(slideIndex);
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(index) {
        if (index >= $slides.length) {
            slideIndex = 0;
        }
        if (index < 0) {
            slideIndex = $slides.length - 1;
        }
        $modalImg.attr('src', $slides.eq(slideIndex).attr('src'));
    }
});

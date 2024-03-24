$(document).ready(function() {
    const emailInput = $('#email');

    function updateErrorMessage() {
        const error = $('.error-message');
        if (emailInput[0].validity.valid) {
            error.remove();
        } else {
            if (!error.length) {
                error = $('<p class="error-message">Incorrect email type</p>').insertAfter(emailInput);
            }
        }
    }

    emailInput.on('input invalid', updateErrorMessage);

    $('.asked__question').on('click', function() {
        const answer = $(this).next('.asked__answer');
        const svg = $(this).find('svg');
        const isOpen = $(this).hasClass('active');
        
        $('.asked__answer').hide();
        $('.asked__question').removeClass('active').find('svg').css('transform', 'rotate(0deg)');

        if (!isOpen) {
            answer.show();
            $(this).addClass('active');
            svg.css('transform', 'rotate(45deg)');
        }
    });

    $('.menu-btn').on('click', function() {
        const menu = $('.menu');
        const isOpen = menu.hasClass('menu--active');

        if(isOpen) {
            menu.removeClass('menu--active');
        } else {
            menu.addClass('menu--active');
        }
    })

    const contentBlocks = $('.invest__content');
    let activeContent = 0;

    function updateContent(direction) {
        contentBlocks.eq(activeContent).hide();

        activeContent += direction;
        if (activeContent >= contentBlocks.length) {
            activeContent = 0;
        } else if (activeContent < 0) {
            activeContent = contentBlocks.length - 1;
        }

        contentBlocks.eq(activeContent).show();
        $('#contentCounter').text((activeContent + 1) + '/' + contentBlocks.length);
    }

    $('.invest__arrow-left').on('click', function() {
        updateContent(-1);
    });
    $('.invest__arrow-right').on('click', function() {
        updateContent(1);
    });

    contentBlocks.eq(0).show();
    $('#contentCounter').text('1/' + contentBlocks.length);
});

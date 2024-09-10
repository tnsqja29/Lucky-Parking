$(function() {
    // 체크박스
    var selectAll = $("#all-select"); //전체 선택박스 
    var checkBoxes = $('.check-item input[type="checkbox"]'); //tbody의 체크박스들
    selectAll.on('change', function () {
        checkBoxes.prop('checked', $(this).prop('checked'));
        //첫 번째 .prop - 체크박스 속성 설정을 의미
        //두 번째 .prop - 체크박스의 현재 선택 상태를 가져오는 것을 의미 
        //SelectAll과 동기화

    });
    checkBoxes.on('change', function () {
        if (!$(this).prop('checked')) {
            selectAll.prop('checked', false);
        }
    });

    
    //전체 선택된 체크박스들 선택해제
    selectAll.prop('checked', false);

    //체크박스 리스트 다시 선택
    checkBoxes = $('.check-item input[type="checkbox"]');

    $('.signUp-box').on('click', function() {
        $('.signUp-popup-container').addClass('active')
    })
    $('.close-btn').on('click', function() {
        $('.signUp-popup-container').removeClass('active')
    })
})
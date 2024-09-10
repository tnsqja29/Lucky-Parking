$(function () {
   $('.info-item').on('click', function () {
      $(this).siblings('.info-item').find('.info-link').removeClass('active');
      $(this).find('.info-link').addClass('active')
   })

   $('.info-item.car').on('click', function() {
      $('.car-info-cont').addClass('active')
      $('.info-cont').removeClass('active')
      $('.history-cont').removeClass('active')
      $('.card-info').removeClass('active')
   })
   $('.info-item.card').on('click', function() {
      $('.car-info-cont').removeClass('active')
      $('.card-info').addClass('active')
      $('.info-cont').removeClass('active')
      $('.history-cont').removeClass('active')
   })
   $('.info-item.history').on('click', function() {
      $('.car-info-cont').removeClass('active')
      $('.info-cont').removeClass('active')
      $('.history-cont').addClass('active')
      $('.card-info').removeClass('active')
   })
   $('.info-item.price').on('click', function() {
      $('.car-info-cont').removeClass('active')
      $('.info-cont').addClass('active')
      $('.history-cont').removeClass('active')
      $('.card-info').removeClass('active')
   })

   function getCurrentDateTime() {
      var now = new Date(); // 현재 날짜와 시간을 포함하는 Date 객체 생성
      var year = now.getFullYear(); // 연도를 가져옵니다 (예: 2024)
      var month = String(now.getMonth() + 1).padStart(2, '0'); // 월을 가져오고 2자리 문자열로 변환 (예: 09)
      var day = String(now.getDate()).padStart(2, '0'); // 일을 가져오고 2자리 문자열로 변환 (예: 04)
      var hours = String(now.getHours()).padStart(2, '0'); // 시간을 가져오고 2자리 문자열로 변환 (예: 13)
      var minutes = String(now.getMinutes()).padStart(2, '0'); // 분을 가져오고 2자리 문자열로 변환 (예: 05)

      return {
         date: `${year}-${month}-${day}`, // "YYYY-MM-DD" 형식으로 날짜 반환
         time: `${hours}:${minutes}` // "HH:MM" 형식으로 시간 반환
      };
   }

   $('#searchForm').on('submit', function (event) {
      event.preventDefault(); // 폼 제출의 기본 동작을 막아줍니다 (페이지 리로드 방지)

      // 사용자가 입력한 검색어를 가져옵니다.
      var searchQuery = $('.search-text').val().trim(); // 검색 입력란의 값을 가져와서 앞뒤 공백 제거

      // 현재 날짜와 시간을 가져옴
      var currentDateTime = getCurrentDateTime(); // 위에서 정의한 함수 호출
      var currentDate = currentDateTime.date; // 현재 날짜 (예: "2024-09-04")
      var currentTime = currentDateTime.time; // 현재 시간 (예: "13:05")

      // 실제 상황에서는 서버나 데이터베이스에서 검색 결과를 가져옴
      var results = [{
            number: searchQuery, // 사용자가 입력한 차량 번호
            location: 'A-123', // 주차 장소
            entryTime: `${currentDate} ${currentTime}`, // 주차 시작 시간 (현재 날짜와 시간)
            exitTime: `${currentDate} ${currentTime}`, // 주차 종료 시간 (현재 날짜와 시간, 예시로 동일한 시간)
            unpaidFee: '10,000원', // 미납 주차료
            additionalFee: '2,000원', // 가산금
            totalAmount: '12,000원' // 미납 총액 
         }
         // 실제 검색 결과 배열
      ];

      // 결과 테이블의 tbody 요소를 선택
      var $tbody = $('.search-list tbody'); // 검색 결과를 표시할 테이블의 tbody 부분 선택

      // tbody의 내용을 모두 비움
      $tbody.empty(); // 기존의 모든 행을 제거하여 새로운 검색 결과를 표시할 준비

      // 검색어에 맞는 결과만 필터링
      var filteredResults = results.filter(function (result) {
         return result.number === searchQuery; // 입력한 검색어와 일치하는 차량 번호만 필터링
      });

      // 검색 결과가 없으면 '등록된 정보가 없습니다.' 문구를 표시
      if (filteredResults.length === 0) {
         $tbody.append('<tr><td colspan="7">등록된 정보가 없습니다.</td></tr>'); // 검색 결과가 없을 경우, 테이블에 메시지 추가
      } else {
         // 검색 결과를 테이블에 추가합니다.
         $.each(filteredResults, function (index, result) {
            var row = `
               <tr>
                   <td>${result.number}</td>
                   <td>${result.location}</td>
                   <td>${result.entryTime}</td>
                   <td>${result.exitTime}</td>
                   <td>${result.unpaidFee}</td>
                   <td>${result.additionalFee}</td>
                   <td>${result.totalAmount}</td>
               </tr>
           `;
            $tbody.append(row); // 필터링된 결과를 테이블의 tbody에 추가
         });
      }
   });

   $('.date-item').on('click',function() {
      $(this).addClass('active')
      $(this).siblings('.date-item').removeClass('active')
   })
})

// 차량정보 - 등록 버튼 활성화
   // 모든 필드를 가져오기
   const brandSelect = document.getElementById('brand');
   const modelSelect = document.getElementById('model');
   const yearSelect = document.getElementById('year');
   const carNumberInput = document.getElementById('car-number-box');
   const submitBtn = document.getElementById('submitBtn');
   const form = document.getElementById('car-info-form');

   // 유효성 검사를 수행하는 함수
   function validateForm() {
         if (brandSelect.value && modelSelect.value && yearSelect.value && carNumberInput.value) {
            submitBtn.disabled = false;  // 모든 필드가 채워지면 버튼 활성화
         } else {
            submitBtn.disabled = true;  // 하나라도 비어 있으면 비활성화
         }
   }

   // 입력이 발생할 때마다 유효성 검사 실행
   brandSelect.addEventListener('input', validateForm);
   modelSelect.addEventListener('input', validateForm);
   yearSelect.addEventListener('input', validateForm);
   carNumberInput.addEventListener('input', validateForm);

   // 폼 제출 후 초기화
   form.addEventListener('submit', function(event) {
         event.preventDefault();  // 폼 기본 제출 동작 방지
         form.reset();  // 폼 내용 초기화
         submitBtn.disabled = true;  // 초기화 후 다시 버튼 비활성화
   });
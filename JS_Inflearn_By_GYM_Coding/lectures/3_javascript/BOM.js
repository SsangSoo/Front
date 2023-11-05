// window - 모든 객체가 소속된 객체, 브라우저 창을 의미

// document - 현재 문서에 대한 정보를 갖고 있는 객체.

// history - 현재의 브라우저가 접근했던 URL history를 제어할 수 있음.
// history.back() : 뒤로가기
// history.forward() : 앞으로 가기


// location - 문서의 주소와 관련된 객체로 window 객체의 프로퍼티인 동시에 document의 프로퍼티.
    // 객체를 이용하여 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있다.
// location.host : 현재 브라우저 URL을 알 수 있다.
// location.href : 담기는 URL 주소로 이동한다.

// screen - 사용자의 디스플레이 화면에 대한 다양한 정보를 갖고있는 객체
// console.dir(screen) ===>> 스크린 객체의 정보를 보여줌.

// navigator - 실행 중인 애플리케이션(브라우저)에 대한 정보를 알 수 있다.
    // 크로스 브라우징 이슈를 해결할 때 사용할 수 있다.(예 - Chrome - addEventListener, IE - attachEvent)
// navigator.geolocation.getCurrentPosition() : 현재 애플리케이션에 대한 위치 정보
// navigator.appName : 앱(브라우저) 이름을 반환한다.
// navigator.appVersion : 앱(브라우저)에 대한 버전 정보를 변환한다.
// navigator.userAgent : 서버에 대한 요청할 앱(브라우저)에 대한 정보이다.

// ------------------------

// window 전역 객체
    //
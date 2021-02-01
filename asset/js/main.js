// DDP 메인페이지 JS - main.js //

$(function(){//////////////////////////jQB///////////////////////
    
    console.log("로딩완료");
    
/////////////////// 자동슬라이드 /////////////////////
    // 인터발 변수
    let autoI;
        
    // 이미지 순번
    let iseq = 0;
    
    // 이미지 넘김 함수
    let chgImg = function(){
        
        // 순번증가
        iseq++;
        if(iseq === 4) iseq = 0; // 한계수
        
        // 변경대상: .slider li
        $(".slider li").eq(iseq).addClass("on")
        .siblings().removeClass("on");
        // 변경대상: .slider li
        $(".indic li").eq(iseq).addClass("on")
        .siblings().removeClass("on");
        
        
    };/////////////////chgImg/////////////////
    
    autoI = setInterval(chgImg, 3000);
    
    // setInterval(함수, 시간)
/////////////////// 자동슬라이드 /////////////////////    
/////////////////// 블릿이동하기 /////////////////////    
    // 클릭이벤트 대상: .indic li
    // 변경대상: .slider li
    $(".indic li").click(function(e){
        e.preventDefault();
        // 자동넘김 지우기
        clearAuto();
        
        // 1. 클릭된 a요소의 부모 li 순번 구하기
        let idx = $(this).index();
        console.log("클릭된 순번: "+idx);
        
        // 2. 블릿 순번과 동일한 순번의 배너슬라이드에 클래스 "on"넣기
        $(".slider li").eq(idx).addClass("on")
        .siblings().removeClass("on");
        
        // 3. 블릿 변경하기
        $(this).addClass("on").siblings().removeClass("on");
        
        // 4. 블릿 순번을 슬라이드 순번과 일치시키기
        iseq = idx;
        
    });///////click///////
    
    // 자동넘김 지우기 함수
    let autoT;
    
    let clearAuto = function(){
        
        clearInterval(autoI);
        
        clearTimeout(autoT);
        
        autoT = setTimeout(function(){
            autoI = setInterval(chgImg, 3000);
        }, 1000);
        
    };/////////////// clearAuto/////////////////
    
});//////////////////////////jQB/////////////////////////////////
// DDP 메인페이지 JS - main.js //

$(function(){//////////////////////////jQB///////////////////////
    
    console.log("로딩완료");
//////////////////// 배너영역//////////////////////////////////////
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
    
    //////////////////// 슬라이드 멈춤/재생 ////////////
    // 1. 멈춤/재생 이미지 변경
    // 변경대상: .act
    let resetBtn = function(){
        $(".act li.onclick").click(function(e){
            e.preventDefault();

          $(this).removeClass("onclick").siblings().addClass("onclick");

        });////////////click/////////////
    };
    
    resetBtn();
    
    // 2. 멈춤 / 재생 기능 부여
    // 2-1. 멈춤
    // 변경대상: .actoff
    $(".actoff").click(function(e){
        e.preventDefault();
                
        clearInterval(autoI);
        
        resetBtn();
        
    });///////////click///////////////
    
    // 광클금지변수
    let prot = 0; //0-허용,1-불허용

    // 2-2. 재생
    // 변경대상: .acton
    $(".acton").click(function(e){
        e.preventDefault();
      
        clearInterval(autoI);
        
        /// 광클금지 /////////////////////////
        if (prot) return false; //1이면 돌아가
        prot = 1; //1로만들어 잠금!
        setTimeout(function () {
            prot = 0;
        }, 1000); //0.4초후에 해제!
        
        
        resetBtn();
        
        autoI = setInterval(chgImg, 1000);
        
    });//////////click////////
    
    
    
    
///////////////////////////////////////////////////////////////////
    
    // 컨텐츠영역 기준 바꾸기 (주제별 <-> 기간별)
    // 변경대상: #wrap_tag li
    
    $("#wrap_tag li:first").click(function(e){
        e.preventDefault();
        
        // 1. 컨텐츠 영역기준 변경
        $(this).addClass("on").siblings().removeClass("on");
        
        
        // 2. 컨텐츠 영역 변경
        $(".cbtn1").addClass("on").siblings().removeClass("on");
        
        
    });////////////click//////////////////
    
    $("#wrap_tag li:last").click(function(e){
        e.preventDefault();
        
        // 1. 컨텐츠 영역기준 변경
        $(this).addClass("on").siblings().removeClass("on");
        
        
        // 2. 컨텐츠 영역 변경
        $(".cbtn2").addClass("on").siblings().removeClass("on");
        
        
    });////////////click//////////////////
    
    // 컨텐츠 선택
    // 변경대상: .cbtn
    $(".cbtn1 li").click(function(e){
        e.preventDefault();
        
        // 1. 컨텐츠 영역기준 변경
        $(this).addClass("on").siblings().removeClass("on");
    });////////////click//////////////////
    
    $(".cbtn2 li").click(function(e){
        e.preventDefault();
        
        // 1. 컨텐츠 영역기준 변경
        $(this).addClass("on").siblings().removeClass("on");
            
    });////////////click//////////////////
    
    ///////////////////////메뉴보드 아이콘/////////////////////////
    // 마우스 오버시 아이콘 바꾸기
    // 변경대상: .img
        
    $(".img1 a").hover(
        function(){// 마우스 오버시
            $(".img1").css({
                background:"url(images/icons/fnb_list1_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list1.png) no-repeat",
            });///////css//////////
    });
    $(".img2 a").hover(
        function(){// 마우스 오버시
            $(".img2").css({
                background:"url(images/icons/fnb_list2_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list2.png) no-repeat",
            });///////css//////////
    });
    $(".img3 a").hover(
        function(){// 마우스 오버시
            $(".img3").css({
                background:"url(images/icons/fnb_list3_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list3.png) no-repeat",
            });///////css//////////
    });
    $(".img4 a").hover(
        function(){// 마우스 오버시
            $(".img4").css({
                background:"url(images/icons/fnb_list4_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list4.png) no-repeat",
            });///////css//////////
    });
    $(".img5 a").hover(
        function(){// 마우스 오버시
            $(".img5").css({
                background:"url(images/icons/fnb_list5_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list5.png) no-repeat",
            });///////css//////////
    });
    
    $(".img6 a").hover(
        function(){// 마우스 오버시
            $(".img6").css({
                background:"url(images/icons/fnb_list6_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list6.png) no-repeat",
            });///////css//////////
    });
    
    $(".img7 a").hover(
        function(){// 마우스 오버시
            $(".img7").css({
                background:"url(images/icons/fnb_list7_on.png) no-repeat",
            });///////css//////////
    },function(){// 마우스 아웃시
        $(this).parent().css({
                background:"url(images/icons/fnb_list7.png) no-repeat",
            });///////css//////////
    });
    ///////////////////////////////////////////////////////////////////////
    
});//////////////////////////jQB/////////////////////////////////
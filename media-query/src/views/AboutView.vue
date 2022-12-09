<template>

  <section class="headerWrap sm-hidden">
    <div class="logo-section">
      <img src="../assets/img/common/RENCE.svg" alt="logo" class="logo-mku">
    </div>
    <div class="searchBar-section">
      <div class="searchBar-wrap">
        <div id="type" class="sb_1 type">
          <span>타입</span>
        </div>
        <div id="location" class="sb_1">
          <span id="location_val">장소</span>
        </div>
        <div class="sb_2">
          <input type="text" placeholder="검색어를 입력하세요." id="input_searchBar" />
        </div>
        <div class="searchBar-btnWrap">
          <img src="../assets/img/header/Search_Button.svg" alt="searchBar-btn" class="searchBar-btn" />
        </div>
        <!-- CUSTOM SELECT -->
        <section>
          <!-- START TYPE SELECT -->
          <div id="custom-type-select" class="type-select-wrap blind">
            <ul class="type-select">
              <li id="type-list-desk" class="type-select-list" val="desk">데스크</li>
              <li id="type-list-metting-room" class="type-select-list" val="meeting_room">회의실</li>
              <li id="type-list-office" class="type-select-list" val="office">오피스</li>
            </ul>
          </div>
          <!-- END TYPE SELECT -->
          <!-- START Location SELECT -->
          <div id="custom-location-select" class="location-select-wrap blind">
            <ul id="location-city" class="location-select">
              <li class="location-select-list sample blind">데스크</li>
            </ul>
            <ul id="location-town" class="location-select blind">
              <li class="location-select-list sample blind">데스크</li>
            </ul>
          </div>
          <!-- END TYPE SELECT -->
        </section>
      </div>
    </div>
    <div class="userMenu-section ">
      <!-- 로그인 전 유저 메뉴 -->
      <section id="before_login" class="">
        <div id="before_userMenu" class="userMenu">
          <img src="../assets/img/header/user_menu.svg" alt="user_menu_img" class="user_menu_img" />
          <img src="../assets/img/header/bx_user-circle.png" alt="user_profile_img" class="user_profile_img" />
        </div>
        <!-- CUSTOM SELECT -->
        <div class="custom-select-user blind">
          <ul class="user-select-wrap">
            <li id="go-login" class="user-select-list">로그인</li>
            <li id="go-join" class="user-select-list">회원가입</li>
            <li id="go-backOffice" class="user-select-list">공간등록신청</li>
          </ul>
        </div>
      </section>
    </div>
  </section>

  <!-- MOBILE HEADER -->
  <section class="headerWrap sm-only">
    <div class="mobileHeaderWrap">
      <div class="logo-section">
        <img src="../assets/img/common/RENCE.svg" alt="logo" class="logo-mku">
      </div>

      <div class="userMenu-section ">
        <!-- 로그인 전 유저 메뉴 -->
        <section id="before_login" class="">
          <div id="before_userMenu" class="userMenu">
            <img src="../assets/img/header/user_menu.svg" alt="user_menu_img" class="user_menu_img" />
            <img src="../assets/img/header/bx_user-circle.png" alt="user_profile_img" class="user_profile_img" />
          </div>
          <!-- CUSTOM SELECT -->
          <div class="custom-select-user blind">
            <ul class="user-select-wrap">
              <li id="go-login" class="user-select-list">로그인</li>
              <li id="go-join" class="user-select-list">회원가입</li>
              <li id="go-backOffice" class="user-select-list">공간등록신청</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </section>

  <div class="searchBar-section sm-only">
    <div class="searchBar-wrap">
      <div id="type" class="sb_1 type">
        <span>타입</span>
      </div>
      <div id="location" class="sb_1">
        <span id="location_val">장소</span>
      </div>
      <div class="sb_2">
        <input type="text" placeholder="검색어를 입력하세요." id="input_searchBar" />
      </div>
      <!-- CUSTOM SELECT -->
      <section>
        <!-- START TYPE SELECT -->
        <div id="custom-type-select" class="type-select-wrap blind">
          <ul class="type-select">
            <li id="type-list-desk" class="type-select-list" val="desk">데스크</li>
            <li id="type-list-metting-room" class="type-select-list" val="meeting_room">회의실</li>
            <li id="type-list-office" class="type-select-list" val="office">오피스</li>
          </ul>
        </div>
        <!-- END TYPE SELECT -->
        <!-- START Location SELECT -->
        <div id="custom-location-select" class="location-select-wrap blind">
          <ul id="location-city" class="location-select">
            <li class="location-select-list sample blind">데스크</li>
          </ul>
          <ul id="location-town" class="location-select blind">
            <li class="location-select-list sample blind">데스크</li>
          </ul>
        </div>
        <!-- END TYPE SELECT -->
      </section>
    </div>
  </div>

  <div class="homeWrap">
    <div class="homeTitle-wrap">
      <span class="homeTitle">어떤 공간을 찾으시나요?</span>
    </div>
    <div class="type-list-wrap">
      <div class="type-list type-desk">
        <section class="type-img-section">
          <img src="../assets/img/desk.svg" alt="type-desk-img" class="type-img" />
        </section>
        <div class="mobile-type-contents">
        <section class="type-title-section">
          <span>데스크</span>
        </section>
        <section class="type-txt-section">
          <p class="type-txt">
            혼자 무언가를 할 곳이 필요하신가요?
          </p>
        </section>
        </div>
      </div>
      <div class="type-list type-meeting-room">
        <section class="type-img-section">
          <img src="../assets/img/meeting-room.svg" alt="type-metting-room-img" class="type-img" />
        </section>
        <div class="mobile-type-contents">
        <section class="type-title-section">
          <span>회의실</span>
        </section>
        <section class="type-txt-section">
          <p class="type-txt">
            &nbsp;여러 사람과 함께 할<br>
            장소를 찾고 계신가요?
          </p>
        </section>
        </div>
      </div>
      <div class="type-list type-office">
        <section class="type-img-section">
          <img src="../assets/img/office-building.svg" alt="type-office-img" class="type-img" />
        </section>
        <div class="mobile-type-contents">
        <section class="type-title-section">
          <span>오피스</span>
        </section>
        <section class="type-txt-section">
          <p class="type-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            장기간 많은 사람과<br>
            일을 할 공간을 찾아보세요
          </p>
        </section>
        </div>
      </div>
    </div>
  </div>

  <section id="footerWrap">
    <h5>© Golfzon Tech Academy, Inc. All rights reserved.</h5>
  </section>
  
</template>

<!-- <script src="../assets/js/header.js"></script> -->

<style scoped>
@import "@/assets/css/common.css";
@import "@/assets/css/header.css";
@import "@/assets/css/footer.css";
@import "@/assets/css/home.css";
</style>

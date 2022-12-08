<template>
  <div class="homeWrap" th:fragment="content">
    <div class="homeTitle-wrap">
      <span class="homeTitle">어떤 공간을 찾으시나요?</span>
    </div>
    <div class="type-list-wrap">
      <div class="type-list type-desk">
        <section class="type-img-section">
          <img src="/static/IMG/home/desk.svg" alt="type-desk-img" class="type-img" />
        </section>
        <section class="type-title-section">
          <span>데스크</span>
        </section>
        <section class="type-txt-section">
          <p class="type-txt">
            혼자 무언가를 할 곳이 필요하신가요?
          </p>
        </section>
      </div>

      <div class="type-list type-meeting-room">
        <section class="type-img-section">
          <img src="/static/IMG/home/meeting-room.svg" alt="type-metting-room-img" class="type-img" />
        </section>
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

      <div class="type-list type-office">
        <section class="type-img-section">
          <img src="/static/IMG/home/office-building.svg" alt="type-office-img" class="type-img" />
        </section>
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
</template>

<style>
.homeWrap {
  width: 100%;
  height: calc(100vh - 95px - 76px);

  display: flex;
  flex-direction: column;
}

.homeWrap * {
  font-family: 'OTWelcome';
}

.homeTitle-wrap {
  width: 73%;

  margin-top: 60px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.homeTitle {
  font-size: 25px;
  font-weight: bold;
}

.type-list-wrap {
  display: flex;
  justify-content: space-between;

  width: 73%;
  height: 72%;

  margin-left: auto;
  margin-right: auto;
}

.type-list {
  width: 32%;
  height: 100%;

  box-shadow: 1.8px 1.7px 5px 2px #e4e4e4;
  border-radius: 20px;
  cursor: pointer;
}

.type-img-section {
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.type-title-section {
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bolder;
  font-size: 22px;
}

.type-txt-section {
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding-bottom: 25px;

  font-weight: bolder;
}
</style>
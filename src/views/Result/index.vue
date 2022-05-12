<template>
  <div class="result">
    <div class="time">
      <div class="date">
        {{ date }}
      </div>
      <div class="current-time">
        {{ time }}
      </div>
    </div>
    <div class="name">
      <span class="content">{{ fakeShow ? fakeName : name }}</span>
      <span class="switch-btn" @click="handleSwitchName">{{ fakeShow ? '显示' : '隐藏' }}</span>
    </div>
    <div class="location">
      <span>{{ location }}</span>
    </div>
    <img :src="imgUrl.DEFAULT_SIZE" alt="test-img"/>
  </div>
</template>

<script>
import imgUrl from "@/assets/img";

export default {
  name: 'ResultPager',
  props: {
    name: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      imgUrl,
      date: '',
      time: '',
      // location: '',
      // name: '',
      fakeName: '',
      fakeShow: true,
    }
  },
  mounted() {
    this.getTime()
    this.updateTime()
    this.switchNameStatus()
    // const {name = '', location = ''} = this.$route.query
    // if (this.name && this.location) {
    //   this.getTime()
    //   this.updateTime()
    //   this.visible = false
    //   this.switchNameStatus()
    // } else {
    //   this.$router.go(-1)
    // }
  },
  methods: {
    getDate() {
      const month = new Date().getMonth() + 1
      const day = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
      this.date = month + '月' + day + '日'
    },
    addZero(num) {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    },
    getCurrentTime() {
      const hour = this.addZero(new Date().getHours())
      const minute = this.addZero(new Date().getMinutes())
      const second = this.addZero(new Date().getSeconds())
      this.time = hour + ':' + minute + ':' + second
    },
    getTime() {
      this.getDate()
      this.getCurrentTime()
    },
    updateTime() {
      setInterval(() => {
        this.getCurrentTime()
      }, 1000)
    },
    switchNameStatus() {
      if (this.name.length && this.name) {
        this.fakeName = this.name[0] + '*' + this.name[this.name.length - 1]
      }
    },
    handleSwitchName() {
      this.fakeShow = !this.fakeShow
    }
  },
}
</script>

<style lang="scss" scoped>
.result {
  width: 100%;

  .time {
    position: absolute;
    top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .date {
      font-size: 40px;
      font-weight: bold;
      color: #54a86a;
    }

    .current-time {
      font-size: 56px;
      font-weight: bold;
      color: #54a86a;
    }
  }

  .name {
    position: absolute;
    top: 200px;
    padding-left: 36px;

    .content {
      font-size: 16px;
      color: #000;
      margin-right: 12px;
      font-weight: 700;
    }

    .switch-btn {
      font-size: 14px;
      color: #1890ff;
      font-weight: 400;
    }
  }

  .location {
    position: absolute;
    top: 230px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }


  img {
    width: 100%;
  }
}
</style>

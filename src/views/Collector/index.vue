<template>
  <div class="info-collector">
    <h2>填写相关信息</h2>
    <van-form @submit="submitInfo">
      <van-cell-group inset>
        <van-field
            v-model="name"
            type="name"
            name="name"
            label="姓名"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
            v-model="location"
            is-link
            readonly
            name="picker"
            label="选择器"
            placeholder="点击选择城市"
            @click="showLocPicker = true"
        />
        <van-popup v-model:show="showLocPicker" position="bottom" round>
          <van-picker
              :columns="locationList"
              @confirm="confirmLoc"
              @cancel="showLocPicker = false"
          >
          </van-picker>

        </van-popup>
      </van-cell-group>
      <van-row justify="space-between" style="margin: 16px" @click="quitApp">
        <van-col :span="10">
          <van-button block round type="default" size="normal">
            退出
          </van-button>
        </van-col>
        <van-col :span="10">
          <van-button block round type="primary" native-type="submit" size="normal">
            提交
          </van-button>
        </van-col>
      </van-row>
    </van-form>
    <van-dialog title="新增地点" :show="showLocDialog" show-cancel-button @confirm="addLocConfirm" @cancel="showLocDialog = false">
      <van-field
          v-model="location"
          type="location"
          name="location"
          label="新地点"
          placeholder="请输入要新增的地点"
          :rules="[{ required: true, message: '请填写新地点' }]"
      />
    </van-dialog>
  </div>
</template>

<script>
import { Form, Field, CellGroup, Button, Picker, Popup, Dialog, Notify, Row, Col } from 'vant';

export default {
  name: 'InfoCollector',
  components: {
    'van-form': Form,
    'van-field': Field,
    'van-cell-group': CellGroup,
    'van-button': Button,
    'van-picker': Picker,
    'van-popup': Popup,
    // 'van-dialog': Dialog.component,
    [Dialog.Component.name]: Dialog.Component,
    'van-row': Row,
    'van-col': Col,
  },
  data() {
    return {
      visible: true,
      location: '',
      name: '',
      locationList: ['本地新增一个选项', '瓜山未来社区', '拱宸桥东站', '浙大紫金港站', '丰潭路站', '大悦城', '万象城', '大运河站', '三深国际中心', '桥西历史文化街区'],
      showLocPicker: false,
      showLocDialog: false
    }
  },
  created() {
    let list = window.localStorage.getItem('test-demo-location-list')
    let name = window.localStorage.getItem('test-demo-name')
    if (list !== undefined && list !== null) {
      this.locationList = JSON.parse(list)
    }
    if (name !== undefined && name !== null) {
      this.name = name
    }
  },
  methods: {
    submitInfo() {
      if (!this.name || !this.location) {
        return
      }
      window.localStorage.setItem('test-demo-name', this.name)
      window.localStorage.setItem('test-demo-location-list', JSON.stringify(this.locationList))


      this.$router.push({
        path: '/result',
        query: {
          name: this.name,
          location: this.location
        }
      })
    },
    confirmLoc(value) {
      if (value === '本地新增一个选项') {
        this.showLocDialog = true
        this.showLocPicker = false
        this.location = ''
        return false
      }
      this.location = value
      this.showLocPicker = false
    },
    addLocConfirm() {
      this.location = this.location.trim()
      if (this.location === '' || this.location.length === 0) {
        Notify({ type: 'warning', message: '请输入新地点' });
        return
      }
      if (this.locationList.includes(this.location)) {
        Notify({ type: 'warning', message: '地点已存在' });
        return
      }

      this.locationList.push(this.location)
      this.showLocDialog = false
    },
    quitApp() {
      console.log(this)
    }
  },
}
</script>

<style lang="scss" scoped>
.info-collector {
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //position: relative;
  //top: -100px;

  h2 {
    color: #646566;
    font-size: 18px;
  }
}
</style>

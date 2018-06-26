<template>
    <el-row>
        <el-col :offset="4" :span="16">
            <el-card class="box-card">
                <el-row>
                    <el-col :span="12">
                        <img class="grid-content bg-purple"
                             :src="data.imgUrl[0]"
                             alt=""
                             style="width: 400px;height: 250px;">
                    </el-col>
                    <el-col :offset="1" :span="10" style="line-height:35px">
                        <div style="font-size: 16px;">
                            名称：{{data.typeName}}
                        </div>
                        <div style="font-size: 16px">
                            价格：￥{{data.price}}
                        </div>
                        <div style="font-size: 16px">
                            卖家： {{data.seller}}
                        </div>
                        <div style="font-size: 16px">
                            卖家地址：{{data.address}}
                        </div>
                        <div style="font-size: 16px">
                            发布时间：{{data.publishTime}}
                        </div>
                        <div style="font-size: 16px">
                            交易方式：微信or支付宝or面议
                        </div>
                        <el-button  @click="maijia"
                                style="color:black;margin-top:20px;background:mediumspringgreen;font-size:18px;font-weight:600;">
                            联系卖家
                        </el-button>
                        <el-button   @click="shoucang"
                                style="color:black;margin-top:20px;background:pink;font-size:18px;font-weight:600;">
                            我要收藏
                        </el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
                            <el-form-item label="我要评论" prop="desc">
                                <el-input :rows="6" style="width: 600px;" type="textarea"
                                          v-model="ruleForm.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">立即发言</el-button>
                                <span>0/100</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">用户留言:
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="用户"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="comment"
                                    label="留言">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                data: [],
                ruleForm: {},
                rules: {},
                tableData: []
            }
        },
        created() {
            this.clickInit()
        },
        methods: {
            maijia(){
              alert(`
                            卖家联系方式:
                            手机号码：15577668899
                            QQ帐号：77668899
                            微信号码：77668899

              `)
            },
            shoucang(){
                alert('您好，已收藏完毕')
            },
            getNowFormatDate() {
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
                return currentdate;
            },
            submitForm() {
                var data = {
                    name:'测试编号001',
                    date: this.getNowFormatDate(),
                    comment:this.ruleForm.desc
                }
                this.tableData = this.tableData.concat(data)
                console.log(this.tableData);
            },
            clickInit() {
                var id = this.$route.params.id
                console.log(id);
                this.$axios.get(`http://127.0.0.1:8090/category/detail/${id}`)
                    .then((res) => {
                        this.data = res.data.data
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
        }
    }
</script>

<style>
    .el-textarea textarea {
        min-height: 200px;
    }
</style>
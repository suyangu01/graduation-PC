<template>
    <div id="main">
        <el-container style=" border: 0;">
            <el-header style="background-color: #67C23A;border-color: #67C23A;">
                <el-row style="background-color: #67C23A;border-color: #67C23A;">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3218546007,1096183668&fm=27&gp=0.jpg"
                         width="62" height="65" style="float: left;margin-left:40px;background-color:#67C23A">
                    <el-col :offset="2" :span="20">
                        <el-menu class="el-menu-demo"
                                 mode="horizontal"
                                 style="background-color:inherit;border:0;color: #ffffff;"> <!--继承 inherit-->

                            <el-menu-item index="2" style="" @click="clickHome()">首页</el-menu-item>
                            <el-menu-item index="3" style="float: right;" @click="clickLogin()">登录</el-menu-item>
                            <el-menu-item index="4" style="float: right;" @click="clickRegister()">注册</el-menu-item>
                            <el-menu-item index="5" style="float: right;">
                                <el-col :span="4" class="userinfo">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link userinfo-inner">
                                            <img src="http://www.xiaoxiangba.com/assets/img/bg01.jpg"
                                                 style="width: 32px;height: 32px;color: #fff;border-radius: 50%"/>做自己</span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>我的消息</el-dropdown-item>
                                            <el-dropdown-item>设置</el-dropdown-item>
                                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </el-col>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>
            <el-header style="background-color: #ffffff;border-color: #ffffff;">
                <el-row style="background-color: #ffffff;border-color: #ffffff;">
                    <el-col :offset="2" :span="20">
                        <el-input style="width: 300px;" placeholder="请输入内容" v-model="result" class="input-with-select">
                            <el-select v-model="select" slot="prepend" placeholder="请选择">
                                <el-option label="手机" value="1"></el-option>
                                <el-option label="电脑" value="2"></el-option>
                                <el-option label="配件" value="3"></el-option>
                                <el-option label="电器" value="4"></el-option>
                                <el-option label="书籍" value="5"></el-option>
                                <el-option label="娱乐" value="6"></el-option>
                                <el-option label="运动" value="7"></el-option>
                                <el-option label="代步" value="7"></el-option>
                            </el-select>
                            <el-button slot="append"
                                       icon="el-icon-search"
                                       @click.native="clickSearch"></el-button>
                        </el-input>
                        <el-button type="success"
                                   @click="clickPublish()"
                                   icon="el-icon-edit"
                                   style="position:relative;right:-700px;">发布二手</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <router-view></router-view>
            <el-footer style="text-align: center;background-color: #ffffff;border-color: #ffffff;">
                <el-row style="background-color: #ffffff;border-color: #ffffff;">
                    <el-col :offset="2" :span="20">
                        CopyRight@ 所有版权由《加油！努力做更好的自己》所有
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                result: '',
                select: '',
                logout:''
            }
        },
        methods: {
            clickSearch(){
                console.log(this.select);
                console.log(this.result);
                this.$axios.get(`http://127.0.0.1:8090/category/${this.result}`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            clickHome() {
                this.$router.push('/home')
            },
            clickPublish() {
                this.$router.push('/publish')
            },
            clickLogin() {
                this.$router.push('/login')
            },
            clickRegister() {
                this.$router.push('/register')
            }
        }
    }
</script>

<style>
/*    !*布局*!
    .el-container {
        border: 0;
    }*/
.el-select .el-input {
    width: 100px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
    .el-header, .el-footer {
        /*margin: -20px -20px 0 -20px;*/
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-main {
        /*margin: 0 -20px 0;*/
    }

    .el-aside {
        color: inherit;
    }

    /*栅格*/
    .el-row {
        margin-bottom: 20px;

        /*&*/
        /*:last-child {*/
        /*margin-bottom: 0;*/
        /*}*/

    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 100px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    /*内容导航条*/
    .el-menu--horizontal > .el-menu-item {
        color: #ffffff;
    }

    /*轮播图*/
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
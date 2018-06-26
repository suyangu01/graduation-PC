<template>
    <div class="login">
        <el-form :model="ruleForm2"
                 :rules="rules2"
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 style="width: 300px;margin: 0 auto;">
            <h3 style="text-align: center;">用户注册</h3>
            <el-form-item prop="account">
                <el-input type="text"
                          v-model="ruleForm2.account"
                          auto-complete="off"
                          placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password"
                          v-model="ruleForm2.checkPass"
                          auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>

            <el-form-item style="width:100%;margin-bottom: 0;">
                <el-button type="primary"
                           style="width:100%;"
                           @click.native.prevent="clickRegister()"
                           :loading="logining">立即注册
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: '123456'
                },
                rules2: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                        //{ validator: validaePass }
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            clickRester() {
                console.log('123');
            },
            clickRegister() {
                var _this = this;
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        //_this.$router.replace('/table');
                        this.logining = true;
                        //NProgress.start();
                        var loginParams = {name: this.ruleForm2.account, password: this.ruleForm2.checkPass};
                        _this.$axios.post('http://127.0.0.1:8090/user/register', loginParams)
                            .then(data => {
                                console.log(data);
                                this.logining = false;
                                if (data.data.success == true) {
                                    _this.$confirm('注册成功, 欢迎登录', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                      /*  type: 'warning'*/
                                    }).then(() => {
                                        _this.$router.push('/login')
                                    }).catch(() => {

                                    })
                                }else {
                                    _this.$confirm('该用户已存在, 请重新注册', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    })
                                }
                            });
                    } else {
                        return false;
                    }
                });
            },
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            }
        }
    }
</script>

<style>
    .login {
        width: auto;
        height: 100%;
        background: #fff;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
    }
</style>

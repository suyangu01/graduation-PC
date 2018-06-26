<template>
    <div id="main">
        <el-container>
            <el-header style="background-color: #67C23A;border-color: #67C23A;">
                <el-row style="background-color: #67C23A;border-color: #67C23A;">
                    <el-col :offset="2" :span="20">
                        <el-menu class="el-menu-demo"
                                 mode="horizontal"
                                 style="background-color: inherit;border: 0;color: #ffffff;">
                           <!-- <el-menu-item index="1" style="">LOGO</el-menu-item>-->
                            <el-menu-item index="2" style=""
                                          @click="clickHome()">首页</el-menu-item>
                            <el-menu-item index="3" style="float: right;"
                                          @click="clickLogin()">登录</el-menu-item>
                            <el-menu-item index="4" style="float: right;"
                                          @click="clickRegister()">注册</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <el-row style="background-color: #fff;border-color: #fff;margin: 0 80px;">
                    <el-col style="font-size: 20px;color: #000;text-align: center;">
                        发布二手基地
                    </el-col>
                </el-row>
                <el-row style="background-color: #fff;border-color: #fff;margin: 0 80px;">
                    <el-col style="font-size: 20px;color: #000;text-align: center;">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <el-form :model="ruleForm"
                                 :rules="rules"
                                 ref="ruleForm"
                                 label-width="100px"
                                 class="demo-ruleForm">
                            <el-form-item label="商品名称" prop="name">
                                <el-input v-model="ruleForm.name"
                                          style="width: 200px;float: left;"></el-input>
                            </el-form-item>
                            <el-form-item label="商品描述" prop="description">
                                <el-input type="textarea"
                                          v-model="ruleForm.description"></el-input>
                            </el-form-item>
                            <el-form-item label="商品分类" prop="description">
                                <el-select v-model="ruleForm.typeName"
                                           placeholder="请选择分类"
                                           style="width: 200px;float: left;">
                                    <el-option label="手机" value="1"></el-option>
                                    <el-option label="电脑" value="2"></el-option>
                                    <el-option label="配件" value="2"></el-option>
                                    <el-option label="电器" value="2"></el-option>
                                    <el-option label="书籍" value="2"></el-option>
                                    <el-option label="娱乐" value="2"></el-option>
                                    <el-option label="运动" value="2"></el-option>
                                    <el-option label="代步" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="商品地址" prop="address">
                                <el-input type="textarea" v-model="ruleForm.address"></el-input>
                            </el-form-item>
                            <el-form-item label="商家名字" prop="seller">
                                <el-input v-model="ruleForm.seller"
                                          style="width: 200px;float: left;"></el-input>
                            </el-form-item>
                            <el-form-item label="商家电话" prop="phone">
                                <el-input v-model="ruleForm.phone"
                                          style="width: 200px;float: left;"></el-input>
                            </el-form-item>
                            <el-form-item label="商品价格" prop="price">
                                <el-input v-model="ruleForm.price"
                                          style="width: 200px;float: left;"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(ruleForm)">立即发布</el-button>
                                <el-button @click="resetForm(ruleForm)">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-main>
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
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                ruleForm: {
                    name: '',
                    description: '',
                    typeName: '',
                    address: '',
                    seller: '',
                    phone: '',
                    price: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请添加商品描述', trigger: 'change'}
                    ],
                    typeName: [
                        {required: true, message: '请选择商品分类', trigger: 'change'}
                    ],
                    address: [
                        { required: true, message: '请输入地址', trigger: 'change'}
                    ],
                    seller: [
                        {required: true, message: '请输入名字', trigger: 'change'}
                    ],
                    phone: [
                        {required: true, message: '请输入电话号码', trigger: 'change'}
                    ],
                    price: [
                        {required: true, message: '请填写商品价格', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            console.log(this.getTime());
        },
        methods: {
            getTime() {
                var date = new Date();
                var y = 1900 + date.getYear();
                var m = "0" + (date.getMonth() + 1);
                var d = "0" + date.getDate();
                return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
            },
            submitForm(ruleForm) {
                ruleForm.publishTime = this.getTime();
                console.log(ruleForm);
                this.$axios.post('http://127.0.0.1:8090/category', ruleForm)
                    .then(res => {
                        console.log(this.dialogImageUrl);
                        //console.log(res);
                        alert('物品发布成功！')
                    })
//                this.$refs[formName].validate((valid) => {
//                    console.log(formName);
//                    if (valid) {
//                        alert('submit!');
//                    } else {
//                        console.log('error submit!!');
//                        return false;
//                    }
//                });
            },
            resetForm(formName) {
//                this.$refs[formName].resetFields();
                this.ruleForm = {}
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
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
    #app {
        background: #f0f0f0;
        margin: -8px;
        color: #fff;
        /*padding: -8px;*/
    }

    /*布局*/
    .el-container {
        border: 0;
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
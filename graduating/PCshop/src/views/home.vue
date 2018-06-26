<template>
    <el-main>
        <el-row>
            <el-col :offset="2" :span="20">
                <el-container>
                    <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
                        <el-menu style="position: fixed;width: inherit;">
                            <el-menu-item v-for="item in categoryName"
                                          index="item"
                                          @click="clickCategroy(item)">
                                <i :class="item.imgPath"></i>
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </el-menu>
                    </el-aside>
                    <el-main style="margin: 0 5px 0;">
                        <!--轮播图-->
                        <el-carousel height="200px" style="margin-bottom: 10px;">
                            <el-carousel-item v-for="item in carouselItem">
                                <img :src="item" :alt="item" style="width: inherit;height: inherit;">
                            </el-carousel-item>
                        </el-carousel>
                        <!--推荐栏-->
                        <el-tabs v-model="activeName" @click.native="handleClick">
                            <el-tab-pane label="推荐" name="1">推荐</el-tab-pane>
                            <el-tab-pane label="最新" name="-1">最新</el-tab-pane>
                        </el-tabs>
                        <!--列表栏-->
                        <el-row :gutter="20">
                            <el-col :span="8" v-for="item in listItem" :key="item._id"
                                    @click.native="clickDetail(item._id)">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img class="grid-content bg-purple" :src="item.imgUrl[0]" alt=""
                                         style="width: 100%;height: 200px;">
                                    <div style="padding:10px">
                                        <div class="bottom clearfix">      <!--clearfix 清除浮动-->
                                            <span style="color:black;font-size:16px">{{item.seller}}
                                            <time style="color: #e00;">￥{{item.price}}</time></span>
                                            <span style="text-align: right;font-size: 12px;float: right;color:black;margin-bottom:10px">
                                                发布于{{item.publishTime}}</span>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                        <!--页码数量-->
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="total"
                                :page-sizes="[9, 18, 27, 36]"
                                :page-size="9"
                                @size-change="clickSize"
                                @next-click="clickNext"
                                @prev-click="clickPrev"
                                @current-change="clickCurrent">
                        </el-pagination>
                    </el-main>
                    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                        <el-collapse style="margin-bottom: 20px;">
                            <div style="width:183px;height:200px;background:white;border:1px solid green;margin:10px">
                                <img width="180" height="170"
                                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=539056218,874708887&fm=27&gp=0.jpg"
                                     alt="">
                                <div style="text-align:center;font-size:15px;font-weight:700">扫一扫登录</div>
                            </div>
                            <div class="pic">
                                <h3 style="text-align: center;font-size:30px;color:black">优惠墙</h3>
                                <div style="margin-top:10px;border:1px solid red">
                                    <img width="198" height="190"
                                         src="http://p3.qhimgs0.com/sdm/280_200_100/t015e02236f7ec1f7aa.jpg" alt="">
                                </div>
                                <div style="margin-top:10px;border:1px solid green;text-align: center">
                                    <img width="198" height="150"
                                         src="https://img.alicdn.com/tfscom/i3/TB1HOrBRXXXXXaDXVXXXXXXXXXX_!!0-item_pic.jpg"
                                         alt="">
                                    <span>游戏机械鼠标有线电竞usb台</span>
                                    <div>￥49.9</div>
                                </div>
                                <div style="margin-top:10px;border:1px solid blue;text-align: center">
                                    <img width="198" height="150"
                                         src="https://img.alicdn.com/tfscom/i4/735580970/TB2N0kpr1uSBuNjy1XcXXcYjFXa_!!735580970-0-item_pic.jpg"
                                         alt="">
                                    <span>游戏机械鼠标有线电竞usb台</span>
                                    <div>￥38</div>
                                </div>
                                <div style="margin-top:10px;border:1px solid orangered;text-align: center">
                                    <img width="198" height="150"
                                         src="https://img.alicdn.com/tfscom/i2/1968951630/TB1JllbdACWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg"
                                         alt="">
                                    <span style="text-align: center">2018新款墨镜女韩版潮太阳镜</span>
                                    <div>￥49</div>
                                </div>
                                <div style="margin-top:10px;border:1px solid indigo;text-align: center">
                                    <img width="198" height="150"
                                         src="https://img.alicdn.com/tfscom/i3/285720660/TB23FdoXjgy_uJjSZK9XXXvlFXa_!!285720660.jpg"
                                         alt="">
                                    <span>步步高原装正品vivo线控耳机</span>
                                    <div>￥39.8</div>
                                </div>
                            </div>
                        </el-collapse>
                    </el-aside>
                </el-container>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
    export default {
        data() {
            return {
                activeName: '1',
                carouselItem: [
                    "http://f.hiphotos.baidu.com/image/h%3D300/sign=4a6f284cb88f8c54fcd3c32f0a282dee/c9fcc3cec3fdfc03777b0d1ad83f8794a4c22615.jpg",
                    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=774913805,2574415053&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2546226485,2179495479&fm=27&gp=0.jpg",
                    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1435922515,2778052438&fm=27&gp=0.jpg",
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2091398264,198183077&fm=27&gp=0.jpg",
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1857518824,463507023&fm=27&gp=0.jpg",
                    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1516936929,3062708064&fm=27&gp=0.jpg"
                ],
                listItem: [],
                categoryName: [
                    {
                        id: 1,
                        name: "手机",
                        imgPath: "el-icon-mobile-phone"
                    },
                    {
                        id: 2,
                        name: "电脑",
                        imgPath: "el-icon-printer"
                    },
                    {
                        id: 3,
                        name: "电器",
                        imgPath: "el-icon-goods"
                    },
                    {
                        id: 4,
                        name: "配件",
                        imgPath: "el-icon-phone"
                    },
                    {
                        id: 5,
                        name: "书籍",
                        imgPath: "el-icon-tickets"
                    },
                    {
                        id: 6,
                        name: "娱乐",
                        imgPath: "el-icon-service"
                    },
                    {
                        id: 7,
                        name: "运动",
                        imgPath: "el-icon-sold-out"
                    },
                    {
                        id: 8,
                        name: "步数",
                        imgPath: "el-icon-bell"
                    }
                ],
                total: 0
            };
        },
        created() {
            this.clickInit()
        },
        watch: {
            activeName(val) {
                this.$axios.get(`http://127.0.0.1:8090/category?limit=1&time=${val}`)
                    .then((res) => {
                        console.log(res);
                        this.total = res.data.count
                        this.listItem = res.data.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        methods: {
            handleClick(test) {

            },
            clickInit() {
                this.$axios.get('http://127.0.0.1:8090/category?limit=1')
                    .then((res) => {
                        this.total = res.data.count
                        this.listItem = res.data.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            clickSize(val) {
                console.log(val);
            },
            clickCurrent(val) {
                this.$axios.get(`http://127.0.0.1:8090/category?page=${val}`)
                    .then((res) => {
                        this.listItem = res.data.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            clickNext(val) {
                console.log(val);
            },
            clickPrev(val) {
                console.log(val);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            clickHome() {
                this.$router.push('/home')
            },
            clickPublish() {
                this.$router.push('/publish')
            },
            clickCategroy(item) {
                this.$router.push(`/categroy_list/${item.id}`)

            },
            clickDetail(id) {
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>
<style>
    #app {
        background: #f0f0f0;
        margin: -8px;
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

<template>
    <div>
        <el-container>
            <el-row>
                <el-col :offset="2" :span="20">
                    <el-main>
                        <!--列表栏-->
                        <el-row :gutter="24">
                            <el-col :span="6" v-for="item in listItem" :key="item._id"
                                    @click.native="clickDetail(item._id)" style="margin-top:20px">
                                <img class="grid-content bg-purple" :src="item.imgUrl" alt=""
                                     style="width: 100%;height: 200px;">
                                <div style="color:blue;font-weight:700;font-size:17px">{{item.seller}}</div>
                                <div style="color:black;text-align:center;">{{item.description}}</div>
                            </el-col>
                        </el-row>
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="total"
                                :page-size="100"
                                @size-change="clickSize"
                                @next-click="clickNext"
                                @prev-click="clickPrev"
                                @current-change="clickCurrent">
                        </el-pagination>
                    </el-main>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                listItem: [],
                total: 0
            }
        },
        created() {
            this.clickInit()
        },
        methods: {
            clickInit() {
                var id = this.$route.params.id
                this.$axios.get(`http://127.0.0.1:8090/category/${id}`)
                    .then((res) => {
                        console.log(res);
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
            clickNext(val) {
                console.log(val);
            },
            clickPrev(val) {
                console.log(val);
            },
            clickCurrent(val) {
                var id = this.$route.params.id
                this.$axios.get(`http://127.0.0.1:8090/category/${id}?page=${val}`)
                    .then((res) => {
                        this.listItem = res.data.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            clickDetail(id) {
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>

<style>

</style>
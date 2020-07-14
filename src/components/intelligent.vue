<template>
    <div class="intelligent">
        <div class="backHeader">
            <div class="feng">
                <img src="../assets/intelligent/presen.png" alt="" style="width:40%;">
                <h3 class="AI">AI智能通行系统</h3>
            </div>
        </div>
        <div class="system">
            <h3>系统概述</h3>
            <div class="biometrics">
                <div class="leftText">
                    <div>生物识别是趋势</div>
                    <div>
                        <div style="margin-top:.12rem;">
                            <span style="color:#000000;font-size:.16rem!important;">以人为本：</span>身份认证更便捷、提供更个性化、 便利化和安全的服务，解放使用者和管理者；</br>
                        </div>
                        <div style="margin-top:.12rem;">
                            <span style="color:#000000;font-size:.16rem!important;">智慧连接：</span>以生物特征成为钥匙，开启人与设备连接、 人与系统连接、人与信息资源连接、人与 服务连接、人与人连接；</br>
                        </div>
                        <div style="margin-top:.12rem;">
                            <span style="color:#000000;font-size:.16rem!important;"> 服务升级：</span>促进管理精细化、服务精益化，以无处不在的智慧感知服务，助力智慧政府、智慧社区、智慧楼宇建设， 提高管理信息化水平。</div>
                    </div>
                </div>
                <div class="rightImg">
                    <img src="../assets/intelligent/man.jpeg" alt="">
                </div>
            </div>
        </div>
        <div class="scenarios">
            <h3>应用场景</h3>
            <div class="ban">
                <div class="faceSwiping">
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img1.jpeg" alt="" style="width:1.38rem;"></div>
                        <div>办公室门禁</div>
                        <div>办公室门禁刷脸进出防止盗窃卡和非法入侵</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img2.jpeg" alt="" style="width:1.38rem;"></div>
                        <div>园区/写字楼进出</div>
                        <div>-电梯出入口或关键区域实现刷脸进出</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img3.jpg" alt="" style="width:1.67rem;"></div>
                        <div> 机场安检</div>
                        <div>乘客身份核验，闸机有序分流，贵宾室会员识别服务</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img4.png" alt="" style="width:1.4rem;"></div>
                        <div>高铁/地铁/客运站</div>
                        <div style="line-height:.24rem;">人脸识别快速通行，安防大数据身份核验</div>
                    </div>
                </div>
                <div class="faceSwiping">
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img5.jpg" alt="" style="width:1.66rem;"></div>
                        <div>景区/博物馆</div>
                        <div>网络预约、电子门票刷脸测温通行</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.25rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img6.jpg" alt="" style="width:1.25rem;"></div>
                        <div style="height:.6rem;">医院、学校分权限差异化通行管理</div>
                        <div>保障有序的就医学习秩序</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.38rem;height:.95rem;overflow: hidden;"><img src="../assets/intelligent/img7.png" alt="" style="width:1.4rem;"></div>
                        <div>视频安全监控</div>
                        <div>-访客身份安全识别、人脸实时跟踪，外卖、快递、推销人员限制区域管理</div>
                    </div>
                    <div class="lary">
                        <div style="width:1.38rem;overflow: hidden;"><img src="../assets/intelligent/img8.png" alt="" style="width:1.4rem;"></div>
                        <div>重点区域权限通行管理</div>
                        <div style="line-height:.24rem;">多级别多角色验证通行非法入侵告警</div>
                    </div>

                </div>
            </div>
        </div>
        <div class="identification">
            <h3>识别流程</h3>
            <div><img src="../assets/intelligent/shibie.png" alt=""></div>
        </div>
        <div class="hardware">
            <ul class="ulst">
                <li v-for="(item,index) in list" :key='index' :class="activeIndex==index?'active':''" class="actives" @click="tab(index)">{{item.item}}</li>
            </ul>
            <div class="intes" v-show="activeIndex==0">
                <div class="intelligents">
                    <div class="leftTexts">
                        <div>
                            <p>公司已经形成一整套工业级的智能控制系统。</p>
                            <p>无论从基础功能线路开发，还是NC\PLC及其他嵌入式控制应用都有着丰富的经验，在各个硬件平台的开发实施中具备综合的开发配套能力</p>

                        </div>
                    </div>
                    <div class="rightImgs">
                        <img src="../assets/intelligent/phone.png" alt="">
                    </div>
                </div>
                <div class="yuan">
                    <ul>
                        <li><img src="../assets/intelligent/tong.png" alt="">
                        </li>
                        <li><img src="../assets/intelligent/jian.png" alt=""></li>
                        <li><img src="../assets/intelligent/kong.png" alt=""></li>
                        <li><img src="../assets/intelligent/bei.png" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="productForm" v-show="activeIndex==1">
                <div> <img src="../assets/intelligent/arrow.png" alt=""></div>
            </div>
            <div class="identifications" v-show="activeIndex==2">
                <div class="leftImg">
                    <img src="../assets/intelligent/girl.png" alt="">
                </div>
                <div class="rightText">
                    <div class="applicable">
                        <span>适用场景：</span>
                        <p style="font-size:.15rem!important;line-height:.24rem;color: #999999;">可用于人脸门禁、人脸闸机控制终端等多场景</p>
                        <span>性能参数：</span>
                        <p style="line-height:.26rem;color: #999999;">
                            <strong style="font-size:.15rem!important;font-weight:500;color:#000000;">CPU：</strong>主控 RK3399 6核1.8GHz； 内置存储器：RAM 4GB/Flash 16GB； 显示屏：8寸, 分辨率800 *1280，五点触摸屏； 操作系统：Android 7.1； 硬件功能：5G全网通/WIFI /蓝牙/补光灯； 摄像头：双目，一个200w，一个100w； 红外人体感应：支持，红外人体感应； NFC（非接触式读卡器）：ISO 14443 A / B 型，Mifare®，符合ISO 18092标准；
                        </p>
                    </div>
                </div>
            </div>
            <div class="buildingGate" v-show="activeIndex==3">
                <div class="leftImgs">
                    <img src="../assets/intelligent/wu.jpeg" alt="">
                    <img src="../assets/intelligent/hua.jpeg" alt="">
                </div>
                <div class="rightTexts">
                    <div class="overlayScene">
                        <div style="font-size:.15rem!important;">
                            <strong style="font-size:.19rem!important;color:#000000;font-weight:500;">覆盖场景：</strong> 楼宇通行管理</div>
                        <div>
                            <strong style="font-size:.19rem!important;color:#000000;font-weight:500;">设备参数：</strong>
                        </div>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">产品尺寸：</strong> 1200*300*1000mm</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 材质：</strong>304#不锈钢。厚度1.2MM</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">通道宽：</strong>550mm</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">电源输入：</strong>AC220V，50Hz</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">驱动电压：</strong>DC24V 5A</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">驱动方式：</strong>直流电机</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;">通行方向：</strong>双向</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 开闸时间：</strong>0.2S</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 通行速度：</strong>35人/分</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 读卡类型:</strong> M1 卡、CPU卡（只能读FM1208-10型号的CPU卡）</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 工作指示：</strong>语音播报、指示灯</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 工作环境：</strong>室内、室外</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 工作温度：</strong>-15℃～60℃</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 通讯方式：</strong>TCP/IP</br>
                        <strong style="font-size:.16rem!important;color:#000000;font-weight:500;"> 可外接设备：</strong>身份证阅读器、扫码枪、LED控制卡、人脸模块、指纹模块（需定制）</br> 亚克力羽翼有大红色, 蓝色 ，透明色可选。软翼材质可定制（需定制）</br>

                    </div>
                </div>
            </div>

        </div>
        <div class="cultures">
            <h3>覆盖场景</h3>
            <div class="juxtapositions">
                <div class="tixt">
                    <div class="enTer">
                        <div>应用一：楼宇闸机</div>
                    </div>
                    <div class="netswork">
                        1.高效效保障办公区域的人员办公时间的进出</br>
                        2.充分掌控人员健康状况便于发生疫情时积极有效联动</br>
                        3.方便与办公OA系统充分对接有效掌控考勤状况</br>
                        4.防止非请自入推销人员影响办公秩序
                    </div>
                </div>
                <div><img src="../assets/intelligent/wu.jpeg" alt="" class="full-img"></div>
            </div>
            <div class="senses">
                <div class="titd">
                    <div class="enterst">
                        <div>应用二:高铁/地铁通行</div>
                    </div>
                    <div class="networkstd">
                        1、方便高速使大流量人群通过，高效进行人员防疫检测</br>
                        2、有效与车票系统形成互相核对互相补充的数据管理系统</br>
                        3、有效跟踪人员流动，为安全、防疫、防控有效对接相关数据</br>
                        4、便于后续大数据统计分析
                    </div>
                </div>
                <div><img src="../assets/intelligent/duo.png" alt="" class="full-img"></div>
            </div>
            <div class="juxtapositions" style=" margin-top: .3rem;">
                <div class="tixt">
                    <div class="enTer">
                        <div>应用三:机场贵宾室</div>
                    </div>
                    <div class="netswork">
                        1、使用设备：人脸识别摄像头</br>
                        2、主要功能：</br>
                        即时掌握VIP要客资料，提供人性化的要客服务</br>
                        一键倒查，随时发现乘客位置，提醒乘客登机信息
                    </div>
                </div>
                <div><img src="../assets/intelligent/zhao.png" alt="" class="full-img"></div>
            </div>

        </div>

    </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    index: 0,
                    item: '智能控制'
                },
                {
                    index: 1,
                    item: '产品形态'
                },
                {
                    index: 2,
                    item: '识别终端'
                },
                {
                    index: 3,
                    item: '楼宇闸机'
                }
            ],
            activeIndex: 0
        }
    },
    methods: {
        tab(index) {
            this.activeIndex = index
        }
    }
}
</script>

<style>
.intelligent {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.backHeader {
    width: 100%;
    height: 2.38rem;
    padding: .1rem;
    background: url(../assets/intelligent/skyblue.jpg);
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.feng {
    width: 100%;
    height: 1.7rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.AI {
    color: white;
    font-size: .24rem!important;
    font-weight: 500;
    padding-top: .3rem;
}

.system {
    width: 100%;
    height: auto;
}

.system h3,
.scenarios h3,
.identification h3 {
    font-weight: normal;
    color: #000000;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .24rem!important;
}

.cultures h3 {
    font-weight: normal;
    color: #000000;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .24rem!important;
    background: #F7F8FA;
}


.leftText {
    width: 95%;
    margin: 0 auto;
}

.leftText>div:nth-child(1) {
    font-size: .18rem!important;
    margin-bottom: .1rem;
    color: #000000;
}

.leftText>div:nth-child(2) {
    color: #999999;
    line-height: .26rem;
}

.leftText>div:nth-child(2) span {
    padding: .6rem 0;
}

.rightImg {
    margin-top: .2rem;
}

.rightImg img {
    width: 100%;
}

.scenarios {
    width: 100%;
    height: auto;
}

.ban {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.rightImgs {
    margin: .3rem 0 .8rem 0;
}

.rightImgs>img {
    width: 100%;
}

.faceSwiping {
    display: flex;
    flex-wrap: wrap;
}

.lary {
    width: 46%;
    height: 2.17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: .08rem .06rem;
    box-shadow: 0px 2px 18px 0px rgba(35, 24, 21, 0.09);
}

.lary>div:nth-child(2) {
    font-size: .14rem!important;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    height: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .04rem;
}

.lary>div:nth-child(3) {
    font-size: .1rem!important;
    width: 80%;
    line-height: .2rem;
    color: #999999;
}

.lary>img {
    width: 80%;
}

.identification {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.identification>div>img {
    width: 100%;
}


.hardware {
    width: 100%;
    height: auto;
}

.ulst {
    width: 100%;
    height: .4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}

.ulst>li {
    list-style: none;
    font-size: 2vw;
    line-height: .4rem;
    font-size: .18rem!important;
}

.actives {
    border-bottom: .016rem solid white;
}

.active {
    color: rgba(26, 156, 252, 1);
    border-bottom: .016rem solid rgba(26, 156, 252, 1)!important;
    z-index: 999;
}

.leftTexts {
    width: 90%;
    margin: .3rem auto 0 auto;
}

.leftTexts>div {
    line-height: .26rem;
    color: #000000;
    font-size: .15rem!important;
}

.intelligents {
    width: 100%;
}

.intes {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dis {
    display: none;
}

.dist {
    display: block;
}

.yuan {
    width: 70%;
    display: flex;
    justify-content: center;
}


.yuan>ul {
    width: 100%;
    display: flex;
    position: relative;
    top: -1rem;
}

.yuan>ul>li {
    width: 40%;
    list-style: none;
    position: absolute;
}

.yuan>ul>li:nth-child(1) {
    margin-left: -.13rem;
}

.yuan>ul>li:nth-child(2) {
    margin-left: .52rem;
}

.yuan>ul>li:nth-child(3) {
    margin-left: 1.16rem;
}

.yuan>ul>li:nth-child(4) {
    margin-left: 1.8rem;
}

.yuan>ul>li>img {
    width: 80%;
}

.productForm {
    width: 100%;
    height: auto;
    margin-top: .4rem;
}

.productForm>div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.productForm>div>img {
    width: 100%;
    height: 100%;
}

.identifications,
.buildingGate {
    margin-top: .3rem;
}

.leftImg {
    width: 60%;
    margin: 0 auto;
}

.leftImg>img {
    width: 100%;
}

.rightText {
    width: 85%;
    margin: 0 auto;
}

.applicable>span {
    display: block;
    font-size: .2rem!important;
    font-weight: 600;
    padding: .1rem 0;
}

.leftImgs {
    width: 100%;
}

.leftImgs>img {
    width: 100%;
}

.rightTexts {
    width: 90%;
    margin: 0 auto;
}

.overlayScene {
    font-size: .14rem!important;
    line-height: .26rem;
    margin-top: .3rem;
    color: #999999;
}

.overlayScene>div:nth-child(2) {
    margin: .05rem 0;
}


.cultures {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.juxtapositions {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 4.83rem;
}

.senses {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    height: 5rem;
    margin-top: .3rem;
}

.tixt {
    width: 92%;
    height: 2.9rem;
    background: #3988FC;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}

.enTer {
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: .6rem;
    margin-top: .3rem;
}

.enTer>div {
    font-size: .18rem!important;
}

.netswork {
    width: 90%;
    font-size: .14rem!important;
    line-height: .25rem;
}






/* .lin {
    width: .44rem;
    height: .01rem;
    border-bottom: .01rem solid #fff;
    margin-top: .1rem;
} */

.titd {
    width: 92%;
    height: 3.2rem;
    background: #3988FC;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}

.enterst {
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: .6rem;
    margin-top: .08rem;
}

.enterst>div {
    font-size: .18rem!important;
}

.networkstd {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: .25rem;
}

.networkstd div {
    width: 95%;
    font-size: .12rem!important;
    line-height: .2rem;
}

.networkst {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.networkst div {
    margin: 0 .1rem 0 .11rem;
    font-size: .12rem!important;
    line-height: .2rem;
}

.el-timeline-item__wrapper {
    padding-left: .24rem!important;
}

.juxtapositions div>img {
    width: 92%;
}

.juxtapositions div:nth-child(2)>img {
    position: absolute;
    top: 2.4rem;
    right: 0;
}

.senses div>img {
    width: 92%;
}

.senses div:nth-child(2)>img {
    position: absolute;
    top: 2.7rem;
    left: 0;
}
</style>

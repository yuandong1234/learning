/**
 * 获取本地数据
 */
function getLocalIndexData() {
  let localIndexData = [{
      "uniquekey": "2d48edd6706e5e0b6b8f513af0e5bf80",
      "title": "全球新冠肺炎COVID-19实时追踪，关注全球疫情动态",
      "date": "2020-04-11 22:26:02",
      "category": "头条",
      "author_name": "健康资讯",
      "url": "https://covid-19.juheapi.com/?s=toutiao",
      "thumbnail_pic_s": "https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/202003/d8376e7e3010cc3f.png",
      "thumbnail_pic_s02": "https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/202003/d8376e7e3010cc3f.png",
      "thumbnail_pic_s03": "https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/202003/d8376e7e3010cc3f.png"
    },
    {
      "uniquekey": "ac0a794197566affb821415072119066",
      "title": "23年前日本挖了千米巨坑，储存5万吨纯净水，背后到底图什么？",
      "date": "2020-04-11 21:42",
      "category": "头条",
      "author_name": "喵姐趣事",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411214256115.html",
      "thumbnail_pic_s": "https://06imgmini.eastday.com/mobile/20200411/20200411214256_ff778dc240d74f020317f706a753264f_4_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://06imgmini.eastday.com/mobile/20200411/20200411214256_ff778dc240d74f020317f706a753264f_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://06imgmini.eastday.com/mobile/20200411/20200411214256_ff778dc240d74f020317f706a753264f_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "02eee32b15d5ad98013a96a3a11c7867",
      "title": "王霜率先归队参加训练",
      "date": "2020-04-11 21:39",
      "category": "头条",
      "author_name": "北京晚报",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411213908320.html",
      "thumbnail_pic_s": "https://01imgmini.eastday.com/mobile/20200411/20200411213908_17f29da10adb9e727c8a09df8b1bbf65_1_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://01imgmini.eastday.com/mobile/20200411/20200411213908_17f29da10adb9e727c8a09df8b1bbf65_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://01imgmini.eastday.com/mobile/20200411/20200411213908_17f29da10adb9e727c8a09df8b1bbf65_3_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "fa4ff9482337f6672683e5663627a52a",
      "title": "5月，眼波流转，微笑蔓延，3星座转角邂逅真爱，你是我今生牵绊",
      "date": "2020-04-11 21:38",
      "category": "头条",
      "author_name": "谈心说理",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411213842717.html",
      "thumbnail_pic_s": "https://03imgmini.eastday.com/mobile/20200411/2020041121_a9bf94ed750646c99d99dc19cb47e2c4_3103_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://03imgmini.eastday.com/mobile/20200411/2020041121_37bf9c589e5c44098fad10a8a2940001_2132_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://03imgmini.eastday.com/mobile/20200411/2020041121_20d4abab5e544a18ab51b654fe46c7d2_1318_cover_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "4344f63d45434a7c4f9658757521cb84",
      "title": "荣耀满配账号值多少钱？酷炫财神看到数字，网友：这么便宜？",
      "date": "2020-04-11 21:34",
      "category": "头条",
      "author_name": "咫尺体坛",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411213449690.html",
      "thumbnail_pic_s": "https://03imgmini.eastday.com/mobile/20200411/20200411213449_1af13c47997b52b756dd732c6093ba67_2_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://03imgmini.eastday.com/mobile/20200411/20200411213449_1af13c47997b52b756dd732c6093ba67_1_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://03imgmini.eastday.com/mobile/20200411/20200411213449_1af13c47997b52b756dd732c6093ba67_4_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "64aa917544bd803bf8369a70c93d8668",
      "title": "KPL春季赛：eStar破掉DYG不败金身，鏖战五局终得胜利",
      "date": "2020-04-11 21:33",
      "category": "头条",
      "author_name": "王者荣耀官网",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411213353506.html",
      "thumbnail_pic_s": "https://08imgmini.eastday.com/mobile/20200411/20200411213353_0fd93035bab298d125591a816d0136e2_14_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://08imgmini.eastday.com/mobile/20200411/20200411213353_0fd93035bab298d125591a816d0136e2_1_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://08imgmini.eastday.com/mobile/20200411/20200411213353_0fd93035bab298d125591a816d0136e2_13_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "6342175e6c281d5c7fcb20279eebf9b7",
      "title": "官翻版 Mac Pro 开售，最高折扣 4000 美元",
      "date": "2020-04-11 21:32",
      "category": "头条",
      "author_name": "麦克叉",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411213239060.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/20200411213239_199d7abe43b90e1e87f069475396ef65_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "8a162d0c65e27704b028ef4f2eb06f1f",
      "title": "再过10天，蓦回首，痴情从未远走，3星座邂逅前任，真爱不可辜",
      "date": "2020-04-11 21:24",
      "category": "头条",
      "author_name": "谈心说理",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411212434484.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/2020041121_7e522cda0ba748f89becd06d646cf38a_7924_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://09imgmini.eastday.com/mobile/20200411/2020041121_d65b0e7973184e5587bb1d421f3d9753_7866_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://09imgmini.eastday.com/mobile/20200411/2020041121_65b641246e8a442c93dbe351d33d7cc2_5729_cover_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "bcd5543deb59c3a75e253be8c9cde303",
      "title": "i5-9600KF全核超频到5.0GHz，酷冷至尊冰神B360水冷散热实测",
      "date": "2020-04-11 21:17",
      "category": "头条",
      "author_name": "搜狐新闻",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411211743582.html",
      "thumbnail_pic_s": "https://06imgmini.eastday.com/mobile/20200411/20200411211743_41086c82f2d189b29cd42328682a7d0c_31_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://06imgmini.eastday.com/mobile/20200411/20200411211743_41086c82f2d189b29cd42328682a7d0c_32_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://06imgmini.eastday.com/mobile/20200411/20200411211743_41086c82f2d189b29cd42328682a7d0c_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "3f528e4415ba749be24419c45a380457",
      "title": "安龙县财政局在帮扶村召开禁毒工作会议",
      "date": "2020-04-11 21:09",
      "category": "头条",
      "author_name": "安龙县禁毒宣传",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210950354.html",
      "thumbnail_pic_s": "https://05imgmini.eastday.com/mobile/20200411/20200411210950_409b9310de6994ad72f9807751445ebb_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "0b1eb1d79019c8fccd251a8e752572f8",
      "title": "led显示屏如何检测维修",
      "date": "2020-04-11 21:06",
      "category": "头条",
      "author_name": "搜狐新闻",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210627713.html",
      "thumbnail_pic_s": "https://02imgmini.eastday.com/mobile/20200411/20200411210627_c7826d21b5b59e27ca3e12e7e9ebc73e_2_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://02imgmini.eastday.com/mobile/20200411/20200411210627_c7826d21b5b59e27ca3e12e7e9ebc73e_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "5188cb84a0f49c9788e12eae7f24cde3",
      "title": "全平台畅享2.4G无线体验，赛睿新品游戏耳机便宜的有点过分",
      "date": "2020-04-11 21:05",
      "category": "头条",
      "author_name": "燕七TB",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210537726.html",
      "thumbnail_pic_s": "https://03imgmini.eastday.com/mobile/20200411/20200411210537_f6a58294c7ccb4e130f9141b31ecd338_18_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://03imgmini.eastday.com/mobile/20200411/20200411210537_f6a58294c7ccb4e130f9141b31ecd338_17_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://03imgmini.eastday.com/mobile/20200411/20200411210537_f6a58294c7ccb4e130f9141b31ecd338_14_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "d987cfae83b46ee78c9b229cfec70aa4",
      "title": "一些新手车主的汽车知识有多差？",
      "date": "2020-04-11 21:05",
      "category": "头条",
      "author_name": "开心聊车",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210527700.html",
      "thumbnail_pic_s": "https://02imgmini.eastday.com/mobile/20200411/20200411210527_21abd9973d75fef3fc09dcf6a38fc7e3_3_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://02imgmini.eastday.com/mobile/20200411/20200411210527_21abd9973d75fef3fc09dcf6a38fc7e3_4_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://02imgmini.eastday.com/mobile/20200411/20200411210527_21abd9973d75fef3fc09dcf6a38fc7e3_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "f88dbd2b3adc77f932b8d47780caa9ef",
      "title": "自动启停到底能不能省油？",
      "date": "2020-04-11 21:05",
      "category": "头条",
      "author_name": "马头人车库TB",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210515814.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/20200411210515_f7bc7fda03f2143d4f5fc1fc957d3d79_1_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://09imgmini.eastday.com/mobile/20200411/20200411210515_f7bc7fda03f2143d4f5fc1fc957d3d79_3_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://09imgmini.eastday.com/mobile/20200411/20200411210515_f7bc7fda03f2143d4f5fc1fc957d3d79_2_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "e860ea069190550d22dbb18e6695e3c4",
      "title": "年轻球员大猜想：新赛季谁能成为耀眼的明星，这四人值得重点关注",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "龙之队球迷",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210252916.html",
      "thumbnail_pic_s": "https://05imgmini.eastday.com/mobile/20200411/20200411210252_6bcecb65916ff043973eaedd34934f8c_4_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://05imgmini.eastday.com/mobile/20200411/20200411210252_6bcecb65916ff043973eaedd34934f8c_1_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://05imgmini.eastday.com/mobile/20200411/20200411210252_6bcecb65916ff043973eaedd34934f8c_2_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "5ca433f0c59bb30424429eec5795c713",
      "title": "乔丹詹皇谁更强？98公牛和18骑士战绩说明一切",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "豪情NBA",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210250194.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/20200411210250_6ba18225a2180ea6784b33e8ea22ff2e_4_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://09imgmini.eastday.com/mobile/20200411/20200411210250_6ba18225a2180ea6784b33e8ea22ff2e_1_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://09imgmini.eastday.com/mobile/20200411/20200411210250_6ba18225a2180ea6784b33e8ea22ff2e_3_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "1e58aa6457a6d8b421d30fb5ec5a8d84",
      "title": "一个人跑高速连续跑1000公里啥感觉？车主亲身体验：一辈子忘不了",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "养车宝典",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210241023.html",
      "thumbnail_pic_s": "https://08imgmini.eastday.com/mobile/20200411/20200411210241_83472487fb4adef4e15de5a5ad14645c_5_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://08imgmini.eastday.com/mobile/20200411/20200411210241_83472487fb4adef4e15de5a5ad14645c_1_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://08imgmini.eastday.com/mobile/20200411/20200411210241_83472487fb4adef4e15de5a5ad14645c_3_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "1c26416cb320f909eebef18dabaa50c6",
      "title": "蒋梦婕脱发都不去植发，知道真相后，网友说：换我也不去",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "医美那些事",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210233337.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/20200411210233_a02ac175d2bfea5daced5c5b5ddb777e_1_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://09imgmini.eastday.com/mobile/20200411/20200411210233_a02ac175d2bfea5daced5c5b5ddb777e_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://09imgmini.eastday.com/mobile/20200411/20200411210233_a02ac175d2bfea5daced5c5b5ddb777e_3_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "131a763665f55c0df5aabaa0fdbda90f",
      "title": "【甘肃省决战决胜脱贫攻坚·人物】万玛才让 新牧村建设的领头雁",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "兰州新闻网",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210230557.html",
      "thumbnail_pic_s": "https://08imgmini.eastday.com/mobile/20200411/20200411210230_b243c1eff64017aa28cc05080e1deb70_2_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://08imgmini.eastday.com/mobile/20200411/20200411210230_b243c1eff64017aa28cc05080e1deb70_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "4df5526cf0fb6d584e8e4f2f110f3ed7",
      "title": "平谷夏各庄镇传播“老味道“西红杮种植经",
      "date": "2020-04-11 21:02",
      "category": "头条",
      "author_name": "北青网",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210205001.html",
      "thumbnail_pic_s": "https://02imgmini.eastday.com/mobile/20200411/20200411210205_dbd773924a2f62c017d221f6e0f40778_1_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://02imgmini.eastday.com/mobile/20200411/20200411210205_dbd773924a2f62c017d221f6e0f40778_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://02imgmini.eastday.com/mobile/20200411/20200411210205_dbd773924a2f62c017d221f6e0f40778_3_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "a2acc8a69132a552d030d0ef28aae14b",
      "title": "大众爆发了！新款上市12个月卖出25万+，价格8万起",
      "date": "2020-04-11 21:01",
      "category": "头条",
      "author_name": "大米说车",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210118787.html",
      "thumbnail_pic_s": "https://04imgmini.eastday.com/mobile/20200411/2020041120_37a1b81b9c74460c92ab68dae821e8bc_2674_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://04imgmini.eastday.com/mobile/20200411/2020041120_0ca80508365a4170a294dc988f9215ed_5370_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://04imgmini.eastday.com/mobile/20200411/2020041120_f1f1f3aa2bf24b388d17ed6f8ec29c37_9688_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "1ef2dd500dd84e95bd45969baecbcc28",
      "title": "世界上最迷你的肯德基：取餐时要趴在地上，炸鸡比手指还要小",
      "date": "2020-04-11 21:01",
      "category": "头条",
      "author_name": "侃侃儿谈",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210115698.html",
      "thumbnail_pic_s": "https://06imgmini.eastday.com/mobile/20200411/2020041121_3ef63d60b6f942d4b017ba3707987c69_9794_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://06imgmini.eastday.com/mobile/20200411/2020041121_263e7bd6af414580b29bac6f0fdf13dc_7136_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://06imgmini.eastday.com/mobile/20200411/2020041121_709fd6333d52405688245841a64fbb08_7785_cover_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "0c63905855d47d3239823b74bc1cb1df",
      "title": "患了肾结石除了多喝水，还可以采用这两种方法治疗结石",
      "date": "2020-04-11 21:00",
      "category": "头条",
      "author_name": "爱心陪护君",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411210043518.html",
      "thumbnail_pic_s": "https://00imgmini.eastday.com/mobile/20200411/20200411210043_2629213aad21836d941b4d9a5828d6af_3_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://00imgmini.eastday.com/mobile/20200411/20200411210043_2629213aad21836d941b4d9a5828d6af_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://00imgmini.eastday.com/mobile/20200411/20200411210043_2629213aad21836d941b4d9a5828d6af_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "a5920edd7a40a953b7c7d05218d751d5",
      "title": "詹姆斯近10年8次总决赛对手阵容对比，孰强孰弱",
      "date": "2020-04-11 20:58",
      "category": "头条",
      "author_name": "煮酒论篮球",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411205824378.html",
      "thumbnail_pic_s": "https://08imgmini.eastday.com/mobile/20200411/20200411205824_cff9c3d475c82613f264b44a3cc0cd68_2_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://08imgmini.eastday.com/mobile/20200411/20200411205824_cff9c3d475c82613f264b44a3cc0cd68_3_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://08imgmini.eastday.com/mobile/20200411/20200411205824_cff9c3d475c82613f264b44a3cc0cd68_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "5637dfd13019aba64cfe321034ba6d24",
      "title": "做完眼袋多久恢复，眼袋割了还会长吗？现在还原真相",
      "date": "2020-04-11 20:56",
      "category": "头条",
      "author_name": "薄荷健康",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411205654124.html",
      "thumbnail_pic_s": "https://07imgmini.eastday.com/mobile/20200411/2020041120_30605b4a88cc4f9e85fe63bd24ab5331_8220_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://07imgmini.eastday.com/mobile/20200411/2020041120_1f50e3b088a64d2190bad7628320d04d_0360_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://07imgmini.eastday.com/mobile/20200411/2020041120_5718df8d380744abbe7dc4a9d3ea4644_9809_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "a685fb69aac0c9da9ec7952ed5b620c8",
      "title": "世界上工资最高的工作：潜入南极水下一次百万，但几乎没有人愿做",
      "date": "2020-04-11 20:49",
      "category": "头条",
      "author_name": "侃侃儿谈",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411204957425.html",
      "thumbnail_pic_s": "https://07imgmini.eastday.com/mobile/20200411/2020041120_4699e44ee0e8435185c5fb29c2146e7c_1348_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://07imgmini.eastday.com/mobile/20200411/2020041120_e0e8f4eb81cc4c56afe92bfbd0a029ef_2100_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://07imgmini.eastday.com/mobile/20200411/2020041120_2ae07ffedd044f698bc07ddaeb9bf0f7_8988_cover_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "7773e0ea7f281a11fc995167d8c85fef",
      "title": "杨坤diss《惊雷》“恶心”，原唱回怼：比你任何一首歌都火！",
      "date": "2020-04-11 20:49",
      "category": "头条",
      "author_name": "电影天堂",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411204948448.html",
      "thumbnail_pic_s": "https://02imgmini.eastday.com/mobile/20200411/2020041120_069b4c67aac5425ba3f9a322ba24f8ea_2977_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://02imgmini.eastday.com/mobile/20200411/2020041120_9ddfacd8dd50465eaebeb02732f90751_7992_cover_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://02imgmini.eastday.com/mobile/20200411/2020041120_2c57f513a3f946d990eccfe175017049_8026_cover_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "ec0cd354963aedcdcbaa6c6d0d4b2248",
      "title": "2.47亿元信贷资金！“硬核”支持灵丘县企业复工复产",
      "date": "2020-04-11 20:47",
      "category": "头条",
      "author_name": "大同新闻网",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411204717433.html",
      "thumbnail_pic_s": "https://09imgmini.eastday.com/mobile/20200411/20200411204717_79b6949ef92ce5b9be66b1f944d03bf6_3_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://09imgmini.eastday.com/mobile/20200411/20200411204717_79b6949ef92ce5b9be66b1f944d03bf6_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://09imgmini.eastday.com/mobile/20200411/20200411204717_79b6949ef92ce5b9be66b1f944d03bf6_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "350410ecc418c9aa37dafaeb164a4ded",
      "title": "乌克兰总统：从中国运来的设备将大幅提升我们口罩生产速度",
      "date": "2020-04-11 20:46",
      "category": "头条",
      "author_name": "环球网",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411204606752.html",
      "thumbnail_pic_s": "https://04imgmini.eastday.com/mobile/20200411/20200411204606_8f9822f259e856d215e3cff4e00a0b44_1_mwpm_03200403.jpg"
    },
    {
      "uniquekey": "983a7ddaefe3c8337b60b05ae43b9d7b",
      "title": "没有传说皮肤放主页？这几款免费皮肤也能让人羡慕，每款都是经典",
      "date": "2020-04-11 20:46",
      "category": "头条",
      "author_name": "大视角",
      "url": "https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200411204601557.html",
      "thumbnail_pic_s": "https://02imgmini.eastday.com/mobile/20200411/20200411204601_5cae35679fb609cd749d9037ac886ddf_1_mwpm_03200403.jpg",
      "thumbnail_pic_s02": "http://02imgmini.eastday.com/mobile/20200411/20200411204601_5cae35679fb609cd749d9037ac886ddf_2_mwpm_03200403.jpg",
      "thumbnail_pic_s03": "http://02imgmini.eastday.com/mobile/20200411/20200411204601_5cae35679fb609cd749d9037ac886ddf_3_mwpm_03200403.jpg"
    }
  ]
  return localIndexData;
}
/**
 * 网络请求数据
 */
function rquestIndexData(onSuccess, onComplete) {
  wx.request({
    url: 'https://v.juhe.cn/toutiao/index',
    method: "GET",
    data: {
      key: 'aa47561558f285fee99f1943c7b844fb',
      type: 'top'
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data);
      onSuccess(res.data);
    },
    complete: function () {
      onComplete();
    }
  })
}

module.exports = {
  getLocalIndexData: getLocalIndexData,
  rquestIndexData: rquestIndexData
}
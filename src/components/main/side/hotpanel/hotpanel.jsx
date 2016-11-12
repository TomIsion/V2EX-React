import React, { PropTypes } from 'react'

import './hotpanel.scss'

// https://www.v2ex.com/api/topics/hot.json

const propTypes = {
  arrHot: PropTypes.array.isRequired,
}
const defaultProps = {
  arrHot: [
    {
      "id": 315367,
      "title": "只有我觉得小米 MIX 好看吗然后这是一段测试数据所以我写的很多真棒hhh",
      "url": "http://www.v2ex.com/t/315367",
      "content": "难道我是直男审美",
      "content_rendered": "<p>难道我是直男审美</p>\n",
      "replies": 192,
      "member": {
        "id": 176215,
        "username": "akiossdev",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/7500/f6fe/176215_mini.png?m=1476940843",
        "avatar_normal": "//cdn.v2ex.co/avatar/7500/f6fe/176215_normal.png?m=1476940843",
        "avatar_large": "//cdn.v2ex.co/avatar/7500/f6fe/176215_large.png?m=1476940843"
      },
      "node": {
        "id": 834,
        "name": "xiaomi",
        "title": "小米",
        "title_alternative": "Xiaomi",
        "url": "http://www.v2ex.com/go/xiaomi",
        "topics": 144,
        "avatar_mini": "//cdn.v2ex.co/navatar/301a/d0e3/834_mini.png?m=1422448760",
        "avatar_normal": "//cdn.v2ex.co/navatar/301a/d0e3/834_normal.png?m=1422448760",
        "avatar_large": "//cdn.v2ex.co/navatar/301a/d0e3/834_large.png?m=1422448760"
      },
      "created": 1477384629,
      "last_modified": 1477460771,
      "last_touched": 1477463193
    },
    {
      "id": 315503,
      "title": "程序猿下班坐公交地铁回家时，在上面坐着会想什么？好奇！",
      "url": "http://www.v2ex.com/t/315503",
      "content": "",
      "content_rendered": "",
      "replies": 89,
      "member": {
        "id": 138649,
        "username": "LCINA",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/eb70/e805/138649_mini.png?m=1454742311",
        "avatar_normal": "//cdn.v2ex.co/avatar/eb70/e805/138649_normal.png?m=1454742311",
        "avatar_large": "//cdn.v2ex.co/avatar/eb70/e805/138649_large.png?m=1454742311"
      },
      "node": {
        "id": 12,
        "name": "qna",
        "title": "问与答",
        "title_alternative": "Questions and Answers",
        "url": "http://www.v2ex.com/go/qna",
        "topics": 77767,
        "avatar_mini": "//cdn.v2ex.co/navatar/c20a/d4d7/12_mini.png?m=1477462211",
        "avatar_normal": "//cdn.v2ex.co/navatar/c20a/d4d7/12_normal.png?m=1477462211",
        "avatar_large": "//cdn.v2ex.co/navatar/c20a/d4d7/12_large.png?m=1477462211"
      },
      "created": 1477443632,
      "last_modified": 1477443632,
      "last_touched": 1477463994
    },
    {
      "id": 315492,
      "title": "新 Macbook Pro 外观就是这样了",
      "url": "http://www.v2ex.com/t/315492",
      "content": "http://www.macrumors.com/2016/10/25/images-of-new-macbook-pro-leaked\r\n\r\nmacOS Sierra 10.12.1里隐藏Apple Pay图片提前泄露出新Macbook Pro 的外观，带OLED Magic Toolbar和Touch ID。",
      "content_rendered": "<a target=\"_blank\" href=\"http://www.macrumors.com/2016/10/25/images-of-new-macbook-pro-leaked\" rel=\"nofollow\">http://www.macrumors.com/2016/10/25/images-of-new-macbook-pro-leaked</a>\r<br />\r<br />macOS Sierra 10.12.1里隐藏Apple Pay图片提前泄露出新Macbook Pro 的外观，带OLED Magic Toolbar和Touch ID。",
      "replies": 86,
      "member": {
        "id": 47942,
        "username": "drackzy",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/gravatar/3b795a1c8ea71279914dbb335fa1b007?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/3b795a1c8ea71279914dbb335fa1b007?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/3b795a1c8ea71279914dbb335fa1b007?s=73&d=retro"
      },
      "node": {
        "id": 10,
        "name": "mbp",
        "title": "MacBook Pro",
        "title_alternative": "MacBook Pro",
        "url": "http://www.v2ex.com/go/mbp",
        "topics": 2381,
        "avatar_mini": "//cdn.v2ex.co/navatar/d3d9/4468/10_mini.png?m=1469591623",
        "avatar_normal": "//cdn.v2ex.co/navatar/d3d9/4468/10_normal.png?m=1469591623",
        "avatar_large": "//cdn.v2ex.co/navatar/d3d9/4468/10_large.png?m=1469591623"
      },
      "created": 1477424836,
      "last_modified": 1477425071,
      "last_touched": 1477461424
    },
    {
      "id": 315456,
      "title": "为什么很多高校老师喜欢用邮箱传文件",
      "url": "http://www.v2ex.com/t/315456",
      "content": "我们学校的很多老师都喜欢用邮箱收文件，包括做的视频类作业，文件很大的时候有的是。用邮箱附件传文件实在太慢，但是老师们就是很喜欢用。很不理解，不说网盘了，用 QQ 也行啊，很不理解，求解",
      "content_rendered": "<p>我们学校的很多老师都喜欢用邮箱收文件，包括做的视频类作业，文件很大的时候有的是。用邮箱附件传文件实在太慢，但是老师们就是很喜欢用。很不理解，不说网盘了，用 QQ 也行啊，很不理解，求解</p>\n",
      "replies": 81,
      "member": {
        "id": 137111,
        "username": "Liwendian",
        "tagline": "不忘初心，方得始终。",
        "avatar_mini": "//cdn.v2ex.co/avatar/14e5/8489/137111_mini.png?m=1463292200",
        "avatar_normal": "//cdn.v2ex.co/avatar/14e5/8489/137111_normal.png?m=1463292200",
        "avatar_large": "//cdn.v2ex.co/avatar/14e5/8489/137111_large.png?m=1463292200"
      },
      "node": {
        "id": 557,
        "name": "life",
        "title": "生活",
        "title_alternative": "Life",
        "url": "http://www.v2ex.com/go/life",
        "topics": 326,
        "avatar_mini": "//cdn.v2ex.co/navatar/6e27/13a6/557_mini.png?m=1473710080",
        "avatar_normal": "//cdn.v2ex.co/navatar/6e27/13a6/557_normal.png?m=1473710080",
        "avatar_large": "//cdn.v2ex.co/navatar/6e27/13a6/557_large.png?m=1473710080"
      },
      "created": 1477405645,
      "last_modified": 1477405645,
      "last_touched": 1477463645
    },
    {
      "id": 315401,
      "title": "分享一下站着办公",
      "url": "http://www.v2ex.com/t/315401",
      "content": "我是做软件开发的，最近工作太久了，坐太久了，坐骨神经有点痛，医生叫我多走动。但事情真的太多了，那怎办呢？\r\n\r\n我想了一会，为什么软件开发一定有坐着呢\r\n\r\n然后我就去淘宝买了个架子，放我那 mac 和 27 寸大屏。\r\n\r\n刚刚今天收到了架子，花了我 30 分钟安装，然后感觉特别好！桌子也整齐了！\r\n\r\n<img src=\"http://ww1.sinaimg.cn/mw1024/006ByT3qgw1f94olm1hbrj30rs0ku7b5.jpg\" >\r\n\r\n我 1.83 高，架子的高度还可以。而且架子的高度还可以调整，有时候站着，有时候坐着。太爽了！\r\n\r\n<img src=\"http://ww1.sinaimg.cn/mw1024/006ByT3qgw1f94oln2rvzj30zk0k0tbl.jpg\" >",
      "content_rendered": "<p>我是做软件开发的，最近工作太久了，坐太久了，坐骨神经有点痛，医生叫我多走动。但事情真的太多了，那怎办呢？</p>\n<p>我想了一会，为什么软件开发一定有坐着呢</p>\n<p>然后我就去淘宝买了个架子，放我那 mac 和 27 寸大屏。</p>\n<p>刚刚今天收到了架子，花了我 30 分钟安装，然后感觉特别好！桌子也整齐了！</p>\n<img src=\"http://ww1.sinaimg.cn/mw1024/006ByT3qgw1f94olm1hbrj30rs0ku7b5.jpg\">\n<p>我 1.83 高，架子的高度还可以。而且架子的高度还可以调整，有时候站着，有时候坐着。太爽了！</p>\n<img src=\"http://ww1.sinaimg.cn/mw1024/006ByT3qgw1f94oln2rvzj30zk0k0tbl.jpg\">\n",
      "replies": 78,
      "member": {
        "id": 197922,
        "username": "hkalexyeung",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/282c/d03e/197922_mini.png?m=1477324481",
        "avatar_normal": "//cdn.v2ex.co/avatar/282c/d03e/197922_normal.png?m=1477324481",
        "avatar_large": "//cdn.v2ex.co/avatar/282c/d03e/197922_large.png?m=1477324481"
      },
      "node": {
        "id": 300,
        "name": "programmer",
        "title": "程序员",
        "title_alternative": "Programmer",
        "url": "http://www.v2ex.com/go/programmer",
        "topics": 13644,
        "avatar_mini": "//cdn.v2ex.co/navatar/94f6/d7e0/300_mini.png?m=1477462342",
        "avatar_normal": "//cdn.v2ex.co/navatar/94f6/d7e0/300_normal.png?m=1477462342",
        "avatar_large": "//cdn.v2ex.co/navatar/94f6/d7e0/300_large.png?m=1477462342"
      },
      "created": 1477391576,
      "last_modified": 1477391576,
      "last_touched": 1477461981
    },
    {
      "id": 315587,
      "title": "从 iDev 苹果开发者大会，看 iOS 界的颓势？",
      "url": "http://www.v2ex.com/t/315587",
      "content": "有点标题党了，其实是想听听大家的建议。\r\n\r\n去年开始跟高春辉、鸟哥等一干人，筹建了一个开发者社区，名叫 DevLink 。做了很多年开发，码的代码少说也有十多万行了，但是每次带团队干活时，都感到开发者的个人成长是个很大的问题。把自学能力超级强的大牛抛开不提，绝大多数开发者其实很难在工作中埋头干活的同时，抬头看看新的技术，实践就更别提了。所以我们希望通过我们的工作，把开发者和技术大牛们组织起来，希望可以找到一个效率更高的方法，帮助有想法的开发者持续成长，让他们的视角和经验不仅仅局限在当下的工作当中，而是能在高手的引领下看的更远、懂的更多。\r\n\r\n这个事情开始没有想特别多，也没有打算赚钱，毕竟几个筹办者都有自己的工作，也不太缺钱，纯属是看到一个可能的机会，来尝试下能不能帮助到更多人而已。所以门票之类的价格定的都不高，刨除会场、舞台搭建、讲师路费之类的开销，基本就不剩下什么了。\r\n\r\n前年和去年，我们的线下活动基本都是集中在 PHP 和后端领域，搞的效果还不错，活动的门票基本上是秒杀的状态，由于议题设计的比较用心，会后反馈也相当正面。[比如这里]( https://www.zhihu.com/question/46467811)\r\n\r\n当然了，参加线下分享不一定是成长和学习必须的路径。但对于大多数开发者，在内容、分享质量靠谱的前提下，还是能起到很大的帮助作用的，而 DevLink 要做的事情也不仅仅限于开会，只是在现阶段，我们觉得这种形式应该是我们最容易做到的。\r\n\r\n今年希望在横向能够涉及到更多语言和方向，所以试着搞了个苹果开发者的线下活动，但是似乎遇到了与之前会议不同的情况——貌似大家对这个形式都不太认同，到今天还有 10 天开会，但居然才卖出 8 成的票，还有不到 200 张票没有卖出去，放在之前的会议上，今天应该已经停止售票了。\r\n\r\n问了一些开发者，大家都觉得可能是今年 iOS 的形势非常差，怕是没有开发者有心情、有财力来参加这样的技术分享，甚至有很多开发者连工作都难保了。我不太确定这种说法是否靠谱，毕竟移动端开发还是一个互联网公司必不可少的项目，即便行情不太好，也不至于如此之差。\r\n\r\n还有一些开发者觉得可能是 iOS 开发者没有太多参加线下会议的习惯，而有些会议的质量确实太差，让大家有了不信任的感觉，但在我们已经公布讲师和议程的情况下，感觉也不会有这样差的反馈。\r\n\r\n所以，想听听各位 iOS 开发者的想法，希望大家帮我们理清思路，以便我们调整策略，更好的准备接下来的活动（或者干脆就不办 iOS 方向的会了？）\r\n\r\n* 你觉得本次活动 719 元（现在是 8 折 569 元）的票价是否过高？如果过高，你觉得多少钱是合理的？\r\n* 你对这次分享活动的议程是否感兴趣？\r\n* 你觉得今年的 iOS 开发是不是热度降低了？\r\n* 还有没有别的槽要吐？\r\n\r\n最后，附上这次活动门票收支情况，以免让大家觉得我们是在赚钱：\r\n\r\n![Alt text]( http://cdn.devlink.cn/images/list1026.png)\r\n\r\n当然了，有一些赞助商的赞助费，是作为收入计入的，这里并未列出，但门票方面确实不像其他会议一样，动辄几千元的票价，我们基本都是按办会成本来反推票价的。\r\n\r\n回复的朋友，我尽量拿出一些折扣票给大家，以示感谢如何？",
      "content_rendered": "<p>有点标题党了，其实是想听听大家的建议。</p>\n<p>去年开始跟高春辉、鸟哥等一干人，筹建了一个开发者社区，名叫 DevLink 。做了很多年开发，码的代码少说也有十多万行了，但是每次带团队干活时，都感到开发者的个人成长是个很大的问题。把自学能力超级强的大牛抛开不提，绝大多数开发者其实很难在工作中埋头干活的同时，抬头看看新的技术，实践就更别提了。所以我们希望通过我们的工作，把开发者和技术大牛们组织起来，希望可以找到一个效率更高的方法，帮助有想法的开发者持续成长，让他们的视角和经验不仅仅局限在当下的工作当中，而是能在高手的引领下看的更远、懂的更多。</p>\n<p>这个事情开始没有想特别多，也没有打算赚钱，毕竟几个筹办者都有自己的工作，也不太缺钱，纯属是看到一个可能的机会，来尝试下能不能帮助到更多人而已。所以门票之类的价格定的都不高，刨除会场、舞台搭建、讲师路费之类的开销，基本就不剩下什么了。</p>\n<p>前年和去年，我们的线下活动基本都是集中在 PHP 和后端领域，搞的效果还不错，活动的门票基本上是秒杀的状态，由于议题设计的比较用心，会后反馈也相当正面。<a href=\"https://www.zhihu.com/question/46467811\" rel=\"nofollow\">比如这里</a></p>\n<p>当然了，参加线下分享不一定是成长和学习必须的路径。但对于大多数开发者，在内容、分享质量靠谱的前提下，还是能起到很大的帮助作用的，而 DevLink 要做的事情也不仅仅限于开会，只是在现阶段，我们觉得这种形式应该是我们最容易做到的。</p>\n<p>今年希望在横向能够涉及到更多语言和方向，所以试着搞了个苹果开发者的线下活动，但是似乎遇到了与之前会议不同的情况——貌似大家对这个形式都不太认同，到今天还有 10 天开会，但居然才卖出 8 成的票，还有不到 200 张票没有卖出去，放在之前的会议上，今天应该已经停止售票了。</p>\n<p>问了一些开发者，大家都觉得可能是今年 iOS 的形势非常差，怕是没有开发者有心情、有财力来参加这样的技术分享，甚至有很多开发者连工作都难保了。我不太确定这种说法是否靠谱，毕竟移动端开发还是一个互联网公司必不可少的项目，即便行情不太好，也不至于如此之差。</p>\n<p>还有一些开发者觉得可能是 iOS 开发者没有太多参加线下会议的习惯，而有些会议的质量确实太差，让大家有了不信任的感觉，但在我们已经公布讲师和议程的情况下，感觉也不会有这样差的反馈。</p>\n<p>所以，想听听各位 iOS 开发者的想法，希望大家帮我们理清思路，以便我们调整策略，更好的准备接下来的活动（或者干脆就不办 iOS 方向的会了？）</p>\n<ul>\n<li>你觉得本次活动 719 元（现在是 8 折 569 元）的票价是否过高？如果过高，你觉得多少钱是合理的？</li>\n<li>你对这次分享活动的议程是否感兴趣？</li>\n<li>你觉得今年的 iOS 开发是不是热度降低了？</li>\n<li>还有没有别的槽要吐？</li>\n</ul>\n<p>最后，附上这次活动门票收支情况，以免让大家觉得我们是在赚钱：</p>\n<p><img alt=\"Alt text\" src=\"http://cdn.devlink.cn/images/list1026.png\"></p>\n<p>当然了，有一些赞助商的赞助费，是作为收入计入的，这里并未列出，但门票方面确实不像其他会议一样，动辄几千元的票价，我们基本都是按办会成本来反推票价的。</p>\n<p>回复的朋友，我尽量拿出一些折扣票给大家，以示感谢如何？</p>\n",
      "replies": 54,
      "member": {
        "id": 728,
        "username": "zhufengme",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/d4c2/e4a3/728_mini.png?m=1333906534",
        "avatar_normal": "//cdn.v2ex.co/avatar/d4c2/e4a3/728_normal.png?m=1333906534",
        "avatar_large": "//cdn.v2ex.co/avatar/d4c2/e4a3/728_large.png?m=1333906534"
      },
      "node": {
        "id": 13,
        "name": "idev",
        "title": "iDev",
        "title_alternative": "iDev",
        "url": "http://www.v2ex.com/go/idev",
        "topics": 2970,
        "avatar_mini": "//cdn.v2ex.co/navatar/c51c/e410/13_mini.png?m=1477368401",
        "avatar_normal": "//cdn.v2ex.co/navatar/c51c/e410/13_normal.png?m=1477368401",
        "avatar_large": "//cdn.v2ex.co/navatar/c51c/e410/13_large.png?m=1477368401"
      },
      "created": 1477458422,
      "last_modified": 1477458422,
      "last_touched": 1477463857
    },
    {
      "id": 315392,
      "title": "15 寸的低配 MacBook Pro 是一种什么体验？",
      "url": "http://www.v2ex.com/t/315392",
      "content": "不差钱，屏幕和胸一样都喜欢大的。那么问题来了，对不玩游戏的人独显用处大嘛，低配用来开发够不够用？",
      "content_rendered": "不差钱，屏幕和胸一样都喜欢大的。那么问题来了，对不玩游戏的人独显用处大嘛，低配用来开发够不够用？",
      "replies": 51,
      "member": {
        "id": 115964,
        "username": "2shou",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/gravatar/5103a7b8fffad9a371818619ce8ba842?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/5103a7b8fffad9a371818619ce8ba842?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/5103a7b8fffad9a371818619ce8ba842?s=73&d=retro"
      },
      "node": {
        "id": 10,
        "name": "mbp",
        "title": "MacBook Pro",
        "title_alternative": "MacBook Pro",
        "url": "http://www.v2ex.com/go/mbp",
        "topics": 2381,
        "avatar_mini": "//cdn.v2ex.co/navatar/d3d9/4468/10_mini.png?m=1469591623",
        "avatar_normal": "//cdn.v2ex.co/navatar/d3d9/4468/10_normal.png?m=1469591623",
        "avatar_large": "//cdn.v2ex.co/navatar/d3d9/4468/10_large.png?m=1469591623"
      },
      "created": 1477390667,
      "last_modified": 1477391261,
      "last_touched": 1477460586
    },
    {
      "id": 315515,
      "title": "帮学妹官网订的 7，还没送，反悔了...退货能退全款吗",
      "url": "http://www.v2ex.com/t/315515",
      "content": "一说 14 天退\r\n一说要 300 退货费\r\n...\r\n究竟",
      "content_rendered": "<p>一说 14 天退\n一说要 300 退货费\n...\n究竟</p>\n",
      "replies": 50,
      "member": {
        "id": 190222,
        "username": "Chaos11",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/ac80/093a/190222_mini.png?m=1472894851",
        "avatar_normal": "//cdn.v2ex.co/avatar/ac80/093a/190222_normal.png?m=1472894851",
        "avatar_large": "//cdn.v2ex.co/avatar/ac80/093a/190222_large.png?m=1472894851"
      },
      "node": {
        "id": 184,
        "name": "apple",
        "title": "Apple",
        "title_alternative": "Apple",
        "url": "http://www.v2ex.com/go/apple",
        "topics": 2841,
        "avatar_mini": "//cdn.v2ex.co/navatar/6cdd/60ea/184_mini.png?m=1438057435",
        "avatar_normal": "//cdn.v2ex.co/navatar/6cdd/60ea/184_normal.png?m=1438057435",
        "avatar_large": "//cdn.v2ex.co/navatar/6cdd/60ea/184_large.png?m=1438057435"
      },
      "created": 1477445843,
      "last_modified": 1477445843,
      "last_touched": 1477462946
    },
    {
      "id": 315438,
      "title": "有些 APP 是不是故意挑战用户的耐心？",
      "url": "http://www.v2ex.com/t/315438",
      "content": "像滴滴这种工具类应用，感觉应该是有一个选项，只推送必要的业务相关内容。\r\n\r\n结果是开了推送，它乱推。\r\n\r\n对于偶尔用一次滴滴的人，真是只能关了了事，但是又影响使用。\r\n\r\n现在是手机开一整天，然后统一整理乱推送的，关推送。",
      "content_rendered": "像滴滴这种工具类应用，感觉应该是有一个选项，只推送必要的业务相关内容。\r<br />\r<br />结果是开了推送，它乱推。\r<br />\r<br />对于偶尔用一次滴滴的人，真是只能关了了事，但是又影响使用。\r<br />\r<br />现在是手机开一整天，然后统一整理乱推送的，关推送。",
      "replies": 39,
      "member": {
        "id": 30426,
        "username": "P99LrYZVkZkg",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/fe29/797f/30426_mini.png?m=1461393878",
        "avatar_normal": "//cdn.v2ex.co/avatar/fe29/797f/30426_normal.png?m=1461393878",
        "avatar_large": "//cdn.v2ex.co/avatar/fe29/797f/30426_large.png?m=1461393878"
      },
      "node": {
        "id": 12,
        "name": "qna",
        "title": "问与答",
        "title_alternative": "Questions and Answers",
        "url": "http://www.v2ex.com/go/qna",
        "topics": 77767,
        "avatar_mini": "//cdn.v2ex.co/navatar/c20a/d4d7/12_mini.png?m=1477462211",
        "avatar_normal": "//cdn.v2ex.co/navatar/c20a/d4d7/12_normal.png?m=1477462211",
        "avatar_large": "//cdn.v2ex.co/navatar/c20a/d4d7/12_large.png?m=1477462211"
      },
      "created": 1477401078,
      "last_modified": 1477401078,
      "last_touched": 1477458197
    }
  ]
}

class HotPanel extends React.Component {
  render() {
    return (
      <dl className="hot-panel">
        <dt>
          今日热议主题
        </dt>
        <dd>
          <ul>
            {
              this.props.arrHot.map((ele, index) =>
                <li key={index}>
                  <a href="" className="user-avatar-wrap">
                    <img src={ele.member.avatar_mini} alt="" />
                  </a>
                  <a href="" className="title-wrap">
                    <p>{ele.title}</p>
                  </a>
                </li>
              )
            }
          </ul>
        </dd>
      </dl>
    )
  }
}

HotPanel.PropTypes = propTypes
HotPanel.defaultProps = defaultProps

export default HotPanel

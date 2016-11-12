import React from 'react'

import ListItem from './listitem/listitem'

// import './listview.scss'

// https://www.v2ex.com/api/topics/show.json?node_name=python

const propTypes = {}
const defaultProps = {
  arr: [
    {
      "id": 315316,
      "title": "python input()使用疑问",
      "url": "http://www.v2ex.com/t/315316",
      "content": "运行环境 虚拟机 ubuntu12.04 python3.5.1\r\n\r\n用 input() python3 运行失败\r\n用 raw_input()， python2 运行成功\r\n\r\n\r\n```python\r\n#!/usr/bin/env python3\r\n# -*- coding: utf-8 -*-\r\n\r\nimport os\r\nimport time\r\n\r\np = os.pipe()\r\nchildpid = os.fork()\r\n\r\nif (childpid==0):\r\n    os.close(p[1])\r\n    while True:\r\n        time.sleep(3)\r\n        print('reading')\r\n        msg = os.read(p[0],1024)\r\n        print(msg)\r\n        if msg == '':\r\n            print('can not read anything')\r\n            break\r\n        if (msg == 'q'):\r\n            os.close(p[0])#关闭管道\r\n            break\r\nelse:\r\n    os.close(p[0])\r\n    while True:\r\n        \r\n        #python3.5 中运行出错\r\n        str1 = input()\r\n\t\t#python2.7 中运行正确\r\n        #str1 = raw_input('input anything:')\r\n        os.write(p[1],str1)\r\n        if(str1 == 'q'):\r\n            os.close(p[1])#关闭管道\r\n            os.wait()\r\n            break\r\n\r\n```\r\n\r\n出错信息如图：\r\n\r\nhttp://a3.topitme.com/b/09/bb/11773765731b5bb09bl.jpg",
      "content_rendered": "<p>运行环境 虚拟机 ubuntu12.04 python3.5.1</p>\n<p>用 input() python3 运行失败\n用 raw_input()， python2 运行成功</p>\n<pre><code>#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport os\nimport time\n\np = os.pipe()\nchildpid = os.fork()\n\nif (childpid==0):\n    os.close(p[1])\n    while True:\n        time.sleep(3)\n        print('reading')\n        msg = os.read(p[0],1024)\n        print(msg)\n        if msg == '':\n            print('can not read anything')\n            break\n        if (msg == 'q'):\n            os.close(p[0])#关闭管道\n            break\nelse:\n    os.close(p[0])\n    while True:\n        \n        #python3.5 中运行出错\n        str1 = input()\n\t\t#python2.7 中运行正确\n        #str1 = raw_input('input anything:')\n        os.write(p[1],str1)\n        if(str1 == 'q'):\n            os.close(p[1])#关闭管道\n            os.wait()\n            break\n\n</code></pre>\n<p>出错信息如图：</p>\n<p><a href=\"http://a3.topitme.com/b/09/bb/11773765731b5bb09bl.jpg\" rel=\"nofollow\">http://a3.topitme.com/b/09/bb/11773765731b5bb09bl.jpg</a></p>\n",
      "replies": 0,
      "member": {
        "id": 56037,
        "username": "wisefree",
        "tagline": "None",
        "avatar_mini": "//cdn.v2ex.co/gravatar/571164c14e657491d364b909f9589ce7?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/571164c14e657491d364b909f9589ce7?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/571164c14e657491d364b909f9589ce7?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477378261,
      "last_modified": 1477378261,
      "last_touched": 1477378081
    },
    {
      "id": 315282,
      "title": "[ [ [开源] ] ] 必应好壁纸 3.0，希望大家多多支持！",
      "url": "http://www.v2ex.com/t/315282",
      "content": "![enter image description here]( https://static.oschina.net/uploads/space/2016/1004/212258_zbyp_2308616.jpg)\r\n\r\n每天盯着相同的桌面壁纸总让人感到疲倦和乏味，何不让桌面壁纸自动更换呢？\r\n\r\n必应好壁纸 3.0 将为你的桌面注入新的活力，它每天都会为你更新来自微软必应搜索的高品质壁纸！\r\n\r\n可以运行在 Windows 和 Linux 上面\r\n\r\nhttp://mathjoy.lofter.com/post/42208d_7cabcf7",
      "content_rendered": "<p><img alt=\"enter image description here\" src=\"https://static.oschina.net/uploads/space/2016/1004/212258_zbyp_2308616.jpg\"></p>\n<p>每天盯着相同的桌面壁纸总让人感到疲倦和乏味，何不让桌面壁纸自动更换呢？</p>\n<p>必应好壁纸 3.0 将为你的桌面注入新的活力，它每天都会为你更新来自微软必应搜索的高品质壁纸！</p>\n<p>可以运行在 Windows 和 Linux 上面</p>\n<p><a href=\"http://mathjoy.lofter.com/post/42208d_7cabcf7\" rel=\"nofollow\">http://mathjoy.lofter.com/post/42208d_7cabcf7</a></p>\n",
      "replies": 2,
      "member": {
        "id": 177901,
        "username": "iMath",
        "tagline": "None",
        "avatar_mini": "//cdn.v2ex.co/gravatar/956bd4c63825dbaf950af9d72e077828?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/956bd4c63825dbaf950af9d72e077828?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/956bd4c63825dbaf950af9d72e077828?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477369182,
      "last_modified": 1477369452,
      "last_touched": 1477377551
    },
    {
      "id": 315186,
      "title": "multiprocessing 的 debug 问题 ？",
      "url": "http://www.v2ex.com/t/315186",
      "content": "multiprocessing 的子进程错误完全没有错误提示，要怎样才能 debug 呢 ？\r\n\r\n环境是 windows python 2.7\r\n\r\n例如下面这段带码\r\n<pre>\r\n#-*-coding:utf-8-*-\r\nimport multiprocessing\r\nfrom multiprocessing import Pool,Process,Queue\r\nimport time\r\nimport pdb\r\n\r\ndef add(i,item,queue):\r\n    item[\"i\"] = i\r\n    queue.put(item)\r\n\r\ndef store(queue):\r\n    time.sleep(1)\r\n    while True:\r\n        print queue.get()\r\n\r\nif __name__ == \"__main__\":\r\n    item = {}\r\n    manager = multiprocessing.Manager()\r\n    queue = manager.Queue()\r\n    pool = Pool()\r\n    pool.apply_async(store,args = (queue,))\r\n    try:\r\n        for i in range(10):\r\n            pool.apply_async( add, args = (i,item,queue,\"这里多了个参数但没任何错误提示\"))\r\n            #pool.apply_async( add, args = (i,item,queue)) #这样可以正常运行\r\n    except Exception,e:\r\n        print Exception,\":\",e\r\n    time.sleep(2)\r\n    pool.terminate()\r\n    pool.join()\r\n</pre>",
      "content_rendered": "<p>multiprocessing 的子进程错误完全没有错误提示，要怎样才能 debug 呢 ？</p>\n<p>环境是 windows python 2.7</p>\n<p>例如下面这段带码</p>\n<pre>#-*-coding:utf-8-*-\nimport multiprocessing\nfrom multiprocessing import Pool,Process,Queue\nimport time\nimport pdb\n\ndef add(i,item,queue):\n    item[\"i\"] = i\n    queue.put(item)\n\ndef store(queue):\n    time.sleep(1)\n    while True:\n        print queue.get()\n\nif __name__ == \"__main__\":\n    item = {}\n    manager = multiprocessing.Manager()\n    queue = manager.Queue()\n    pool = Pool()\n    pool.apply_async(store,args = (queue,))\n    try:\n        for i in range(10):\n            pool.apply_async( add, args = (i,item,queue,\"这里多了个参数但没任何错误提示\"))\n            #pool.apply_async( add, args = (i,item,queue)) #这样可以正常运行\n    except Exception,e:\n        print Exception,\":\",e\n    time.sleep(2)\n    pool.terminate()\n    pool.join()\n</pre>\n",
      "replies": 0,
      "member": {
        "id": 111545,
        "username": "fengxiang",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/gravatar/9e20dfe0803423ab2b1d9acc54005c82?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/9e20dfe0803423ab2b1d9acc54005c82?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/9e20dfe0803423ab2b1d9acc54005c82?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477339510,
      "last_modified": 1477339934,
      "last_touched": 1477339330
    },
    {
      "id": 315180,
      "title": "BeautifulSoup 怎样才可以 find_all 再次 find_all 结果",
      "url": "http://www.v2ex.com/t/315180",
      "content": "就是我之前用 find_all 定位了一个标签，然后我想再次用 find_all 查询第一次 find_all 的结果，可是却失败了",
      "content_rendered": "就是我之前用 find_all 定位了一个标签，然后我想再次用 find_all 查询第一次 find_all 的结果，可是却失败了",
      "replies": 14,
      "member": {
        "id": 166505,
        "username": "771456556",
        "tagline": "None",
        "avatar_mini": "//cdn.v2ex.co/gravatar/42704b1da9eecaaab38f9cb7ad27de4d?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/42704b1da9eecaaab38f9cb7ad27de4d?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/42704b1da9eecaaab38f9cb7ad27de4d?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477328494,
      "last_modified": 1477328494,
      "last_touched": 1477370947
    },
    {
      "id": 315140,
      "title": "想用 selenium 登陆网站，但是无法获取弹出的验证码 frame 的名称，无法切换 frame 无法控制是的这也是一段很长的测试数据",
      "url": "http://www.v2ex.com/t/315140",
      "content": "http://wuxia.qq.com/cp/a20160920tmfl/ 天涯明月刀的网站，想自动领取奖励，登陆这块就遇到问题\r\n\r\n打开网站后，点击登陆，切换到 loginIframe 登陆 frame 输入用户名密码正确，但是登陆后无法控制验证码所在的 frame ，看不出名字，没法切换也就无法控制\r\n\r\n代码如下:\r\n\r\n```\r\ntyurl = \"http://wuxia.qq.com/cp/a20160920tmfl/\"\r\n\r\nusername = \"123456\"\r\npwd  = \"1234561\"\r\n\r\nbinary = FirefoxBinary(\"z:\\\\firefox\\\\firefox.exe\")\r\n\r\ndriver = webdriver.Firefox(firefox_binary=binary,executable_path = \"z:\\geckodrive\\geckodriver.exe\")\r\n\r\ndriver.get(tyurl)\r\n\r\n\r\ndriver.find_element_by_id(\"dologin\").click()\r\ndriver.switch_to_frame(\"loginIframe\")\r\n\r\n# 等待账号密码登录窗口出现，点击账号密码登\r\nWebDriverWait(driver, 10,1).until(EC.presence_of_element_located((By.ID,\"switcher_plogin\")))\r\ndriver.find_element_by_id(\"switcher_plogin\").click()\r\n\r\n# 输入账号密码\r\nWebDriverWait(driver, 30,1).until(EC.presence_of_element_located((By.ID,\"login_button\")))\r\n\r\nfor i in range(1,20):\r\n\ttry:\r\n\t\tdriver.find_element_by_id(\"u\").click()\r\n\t\tdriver.find_element_by_id(\"u\").send_keys(username)\r\n\t\tdriver.find_element_by_id(\"p\").click()\r\n\t\tdriver.find_element_by_id(\"p\").send_keys(pwd)\r\n\t\tbreak\r\n\texcept Exception, e:\r\n\t\tpass\r\n\r\n\r\n# 输入密码点击确定后无法定位验证码窗口\r\ntry:\r\n\tWebDriverWait(driver, 5,1).until(EC.presence_of_element_located((By.ID,\"capImg\")))\r\nexcept Exception, e:\r\n\tpass\r\n\r\n\r\n# 找不到当前验证码窗口里的 ID capImg\r\nprint(driver.find_element_by_id(\"capImg\").src)\r\n```",
      "content_rendered": "<p><a href=\"http://wuxia.qq.com/cp/a20160920tmfl/\" rel=\"nofollow\">http://wuxia.qq.com/cp/a20160920tmfl/</a> 天涯明月刀的网站，想自动领取奖励，登陆这块就遇到问题</p>\n<p>打开网站后，点击登陆，切换到 loginIframe 登陆 frame 输入用户名密码正确，但是登陆后无法控制验证码所在的 frame ，看不出名字，没法切换也就无法控制</p>\n<p>代码如下:</p>\n<pre><code>tyurl = \"http://wuxia.qq.com/cp/a20160920tmfl/\"\n\nusername = \"123456\"\npwd  = \"1234561\"\n\nbinary = FirefoxBinary(\"z:\\\\firefox\\\\firefox.exe\")\n\ndriver = webdriver.Firefox(firefox_binary=binary,executable_path = \"z:\\geckodrive\\geckodriver.exe\")\n\ndriver.get(tyurl)\n\n\ndriver.find_element_by_id(\"dologin\").click()\ndriver.switch_to_frame(\"loginIframe\")\n\n# 等待账号密码登录窗口出现，点击账号密码登\nWebDriverWait(driver, 10,1).until(EC.presence_of_element_located((By.ID,\"switcher_plogin\")))\ndriver.find_element_by_id(\"switcher_plogin\").click()\n\n# 输入账号密码\nWebDriverWait(driver, 30,1).until(EC.presence_of_element_located((By.ID,\"login_button\")))\n\nfor i in range(1,20):\n\ttry:\n\t\tdriver.find_element_by_id(\"u\").click()\n\t\tdriver.find_element_by_id(\"u\").send_keys(username)\n\t\tdriver.find_element_by_id(\"p\").click()\n\t\tdriver.find_element_by_id(\"p\").send_keys(pwd)\n\t\tbreak\n\texcept Exception, e:\n\t\tpass\n\n\n# 输入密码点击确定后无法定位验证码窗口\ntry:\n\tWebDriverWait(driver, 5,1).until(EC.presence_of_element_located((By.ID,\"capImg\")))\nexcept Exception, e:\n\tpass\n\n\n# 找不到当前验证码窗口里的 ID capImg\nprint(driver.find_element_by_id(\"capImg\").src)\n</code></pre>\n",
      "replies": 4,
      "member": {
        "id": 110522,
        "username": "bbxiong",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/gravatar/9bc5e10e6df3a4deab35355e5d70fde5?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/9bc5e10e6df3a4deab35355e5d70fde5?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/9bc5e10e6df3a4deab35355e5d70fde5?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477317868,
      "last_modified": 1477317868,
      "last_touched": 1477329747
    },
    {
      "id": 315075,
      "title": "Pixiv 的插图小爬虫(￣ y▽￣)╭ Ohohoho.....",
      "url": "http://www.v2ex.com/t/315075",
      "content": "1. python main.py\r\n2. 输入用户名，密码，和保存的文件夹\r\n3. 选择要下载哪个排行榜的插图\r\n\r\n今天的排行榜还真是多福利(●ˇ∀ˇ●)\r\n\r\ngithub: https://github.com/pwcong/PixivCrawler\r\n\r\n如果你喜欢这个小爬虫，请尽情给我个 Start 哈",
      "content_rendered": "<ol>\n<li>python <a href=\"http://main.py\" rel=\"nofollow\">main.py</a></li>\n<li>输入用户名，密码，和保存的文件夹</li>\n<li>选择要下载哪个排行榜的插图</li>\n</ol>\n<p>今天的排行榜还真是多福利(●ˇ∀ˇ●)</p>\n<p>github: <a href=\"https://github.com/pwcong/PixivCrawler\" rel=\"nofollow\">https://github.com/pwcong/PixivCrawler</a></p>\n<p>如果你喜欢这个小爬虫，请尽情给我个 Start 哈</p>\n",
      "replies": 2,
      "member": {
        "id": 197829,
        "username": "pwcong",
        "tagline": "我开始了新的生活。",
        "avatar_mini": "//cdn.v2ex.co/avatar/d5f6/66ee/197829_mini.png?m=1477225458",
        "avatar_normal": "//cdn.v2ex.co/avatar/d5f6/66ee/197829_normal.png?m=1477225458",
        "avatar_large": "//cdn.v2ex.co/avatar/d5f6/66ee/197829_large.png?m=1477225458"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477299837,
      "last_modified": 1477300067,
      "last_touched": 1477241055
    },
    {
      "id": 315060,
      "title": "部署 Tornado 和 Django 有什么比较好的方案？",
      "url": "http://www.v2ex.com/t/315060",
      "content": "",
      "content_rendered": "",
      "replies": 0,
      "member": {
        "id": 196683,
        "username": "ansheng",
        "tagline": "Great time!",
        "avatar_mini": "//cdn.v2ex.co/avatar/b0d5/74ca/196683_mini.png?m=1476856136",
        "avatar_normal": "//cdn.v2ex.co/avatar/b0d5/74ca/196683_normal.png?m=1476856136",
        "avatar_large": "//cdn.v2ex.co/avatar/b0d5/74ca/196683_large.png?m=1476856136"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477297475,
      "last_modified": 1477297475,
      "last_touched": 1477283075
    },
    {
      "id": 315048,
      "title": "PyCharm 不能 debug 是什么情况？",
      "url": "http://www.v2ex.com/t/315048",
      "content": "之前一直 debug 好好的。今天突然就不行了。\r\n```\r\nC:\\Python27\\python.exe \"C:\\Program Files (x86)\\JetBrains\\PyCharm 2016.2.3\\helpers\\pydev\\pydevd.py\" --multiproc --qt-support --client 127.0.0.1 --port 52873 --file D:/cv/main.py\r\npydev debugger: process 11488 is connecting\r\n\r\n\r\nProcess finished with exit code 1\r\n```\r\n貌似 Connect 超时就退出了\r\n\r\nWindows 防火墙上 pycharm 和 python 应该都是允许通信的。\r\n\r\n是不是 Windows 10 更新了什么奇怪的东西？",
      "content_rendered": "<p>之前一直 debug 好好的。今天突然就不行了。</p>\n<pre><code>C:\\Python27\\python.exe \"C:\\Program Files (x86)\\JetBrains\\PyCharm 2016.2.3\\helpers\\pydev\\pydevd.py\" --multiproc --qt-support --client 127.0.0.1 --port 52873 --file D:/cv/main.py\npydev debugger: process 11488 is connecting\n\n\nProcess finished with exit code 1\n</code></pre>\n<p>貌似 Connect 超时就退出了</p>\n<p>Windows 防火墙上 pycharm 和 python 应该都是允许通信的。</p>\n<p>是不是 Windows 10 更新了什么奇怪的东西？</p>\n",
      "replies": 9,
      "member": {
        "id": 102311,
        "username": "lishunan246",
        "tagline": "",
        "avatar_mini": "//cdn.v2ex.co/avatar/5b46/3f1e/102311_mini.png?m=1474707247",
        "avatar_normal": "//cdn.v2ex.co/avatar/5b46/3f1e/102311_normal.png?m=1474707247",
        "avatar_large": "//cdn.v2ex.co/avatar/5b46/3f1e/102311_large.png?m=1474707247"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477295680,
      "last_modified": 1477295680,
      "last_touched": 1477313150
    },
    {
      "id": 314881,
      "title": "python 安装第三方库的时候出现的问题，求助",
      "url": "http://www.v2ex.com/t/314881",
      "content": "UnicodeDecodeError: 'ascii' codec can't decode byte 0xb3 in position 9: ordinal not in range(128)\r\n\r\n\r\n\r\nTry to run this command from the system terminal. Make sure that you use the correct version of 'pip' installed for your Python interpreter located at 'C:\\Python27\\python.exe'.\r\n\r\n\r\n\r\nCollecting pip==8.1.2\r\n\r\nYou are using pip version 7.1.0, however version 8.1.2 is available.\r\nYou should consider upgrading via the 'python -m pip install --upgrade pip' command.\r\nC:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\_vendor\\requests\\packages\\urllib3\\util\\ssl_.py:90: InsecurePlatformWarning: A true SSLContext object is not available. This prevents urllib3 from configuring SSL appropriately and may cause certain SSL connections to fail. For more information, see https://urllib3.readthedocs.org/en/latest/security.html#insecureplatformwarning.\r\n  InsecurePlatformWarning\r\n  The repository located at pypi.douban.com is not a trusted or secure host and is being ignored. If this repository is available via HTTPS it is recommended to use HTTPS instead, otherwise you may silence this warning and allow it anyways with '--trusted-host pypi.douban.com'.\r\nException:\r\nTraceback (most recent call last):\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\basecommand.py\", line 223, in main\r\n    status = self.run(options, args)\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\commands\\install.py\", line 282, in run\r\n    requirement_set.prepare_files(finder)\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py\", line 334, in prepare_files\r\n    functools.partial(self._prepare_file, finder))\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py\", line 321, in _walk_req_to_install\r\n    more_reqs = handler(req_to_install)\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py\", line 491, in _prepare_file\r\n    session=self.session)\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py\", line 825, in unpack_url\r\n    session,\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py\", line 673, in unpack_http_url\r\n    from_path, content_type = _download_http_url(link, session, temp_dir)\r\n  File \"C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py\", line 884, in _download_http_url\r\n    file_path = os.path.join(temp_dir, filename)\r\n  File \"C:\\Python27\\lib\\ntpath.py\", line 108, in join\r\n    path += \"\\\\\" + b\r\nUnicodeDecodeError: 'ascii' codec can't decode byte 0xb3 in position 9: ordinal not in range(128)",
      "content_rendered": "UnicodeDecodeError: 'ascii' codec can't decode byte 0xb3 in position 9: ordinal not in range(128)\r<br />\r<br />\r<br />\r<br />Try to run this command from the system terminal. Make sure that you use the correct version of 'pip' installed for your Python interpreter located at 'C:\\Python27\\python.exe'.\r<br />\r<br />\r<br />\r<br />Collecting pip==8.1.2\r<br />\r<br />You are using pip version 7.1.0, however version 8.1.2 is available.\r<br />You should consider upgrading via the 'python -m pip install --upgrade pip' command.\r<br />C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\_vendor\\requests\\packages\\urllib3\\util\\ssl_.py:90: InsecurePlatformWarning: A true SSLContext object is not available. This prevents urllib3 from configuring SSL appropriately and may cause certain SSL connections to fail. For more information, see <a target=\"_blank\" href=\"https://urllib3.readthedocs.org/en/latest/security.html#insecureplatformwarning\" rel=\"nofollow\">https://urllib3.readthedocs.org/en/latest/security.html#insecureplatformwarning</a>.\r<br />  InsecurePlatformWarning\r<br />  The repository located at <a target=\"_blank\" href=\"http://pypi.douban.com\" rel=\"nofollow\">pypi.douban.com</a> is not a trusted or secure host and is being ignored. If this repository is available via HTTPS it is recommended to use HTTPS instead, otherwise you may silence this warning and allow it anyways with '--trusted-host <a target=\"_blank\" href=\"http://pypi.douban.com\" rel=\"nofollow\">pypi.douban.com</a>'.\r<br />Exception:\r<br />Traceback (most recent call last):\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\basecommand.py&quot;, line 223, in main\r<br />    status = self.run(options, args)\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\commands\\install.py&quot;, line 282, in run\r<br />    requirement_set.prepare_files(finder)\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py&quot;, line 334, in prepare_files\r<br />    functools.partial(self._prepare_file, finder))\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py&quot;, line 321, in _walk_req_to_install\r<br />    more_reqs = handler(req_to_install)\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\req\\req_set.py&quot;, line 491, in _prepare_file\r<br />    session=self.session)\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py&quot;, line 825, in unpack_url\r<br />    session,\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py&quot;, line 673, in unpack_http_url\r<br />    from_path, content_type = _download_http_url(link, session, temp_dir)\r<br />  File &quot;C:\\Python27\\lib\\site-packages\\pip-7.1.0-py2.7.egg\\pip\\download.py&quot;, line 884, in _download_http_url\r<br />    file_path = os.path.join(temp_dir, filename)\r<br />  File &quot;C:\\Python27\\lib\\ntpath.py&quot;, line 108, in join\r<br />    path += &quot;\\\\&quot; + b\r<br />UnicodeDecodeError: 'ascii' codec can't decode byte 0xb3 in position 9: ordinal not in range(128)",
      "replies": 5,
      "member": {
        "id": 193067,
        "username": "chenguoyu",
        "tagline": "None",
        "avatar_mini": "//cdn.v2ex.co/gravatar/a52acd07b65883ce5d695bbc77fb9096?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/a52acd07b65883ce5d695bbc77fb9096?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/a52acd07b65883ce5d695bbc77fb9096?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477238252,
      "last_modified": 1477238252,
      "last_touched": 1477249194
    },
    {
      "id": 314850,
      "title": "我想问一下，如何在 qmainwindow 类里面加入网格布局？",
      "url": "http://www.v2ex.com/t/314850",
      "content": "也就是说我想把几个按钮以网格布局的形式放进 qmainwindow 类里，具体来说就是把这几个按钮以网格布局放进一个类里，然后在 qmainwindow 子类里加入放按钮的那个类。\r\n新手问题，希望帮忙解答下。",
      "content_rendered": "也就是说我想把几个按钮以网格布局的形式放进 qmainwindow 类里，具体来说就是把这几个按钮以网格布局放进一个类里，然后在 qmainwindow 子类里加入放按钮的那个类。\r<br />新手问题，希望帮忙解答下。",
      "replies": 1,
      "member": {
        "id": 162077,
        "username": "xyxc0673",
        "tagline": "None",
        "avatar_mini": "//cdn.v2ex.co/gravatar/f2049ebc7918617c31415f2622794bb5?s=24&d=retro",
        "avatar_normal": "//cdn.v2ex.co/gravatar/f2049ebc7918617c31415f2622794bb5?s=48&d=retro",
        "avatar_large": "//cdn.v2ex.co/gravatar/f2049ebc7918617c31415f2622794bb5?s=73&d=retro"
      },
      "node": {
        "id": 90,
        "name": "python",
        "title": "Python",
        "title_alternative": "Python",
        "url": "http://www.v2ex.com/go/python",
        "topics": 5852,
        "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1477368831",
        "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1477368831",
        "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1477368831"
      },
      "created": 1477228855,
      "last_modified": 1477228855,
      "last_touched": 1477231216
    }
  ]
}

class ListView extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.arr.map((ele, index) => <ListItem key={index} {...ele} />)
        }
      </ul>
    )
  }
}

ListView.defaultProps = defaultProps

export default ListView

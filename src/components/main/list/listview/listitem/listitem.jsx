import React, { PropTypes } from 'react'
import cn from 'classnames'

import './listitem.scss'

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  replies: PropTypes.number.isRequired,
  member: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired,
  created: PropTypes.number.isRequired,
  last_touched: PropTypes.number.isRequired,
}

const defaultProps = {
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
  "last_touched": 1477377551,
}

class ListItem extends React.Component {
  /**
   * calculate the last change time
   * replies > 0 ? last_touched - created -> format time
   * @memberOf ListItem
   */
  getLastReplyTime() {
    let numDiffTime

    if (this.props.replies > 0) {
      numDiffTime = this.props.last_touched - this.props.created

      if (numDiffTime > 0) {
        const numMinute = numDiffTime % 60
        let strShow = ''

        switch (true) {
          case numMinute < 30:
            strShow = `${numMinute} 分钟前`
            break
          case numMinute < 60:
            strShow = '30 分钟前'
            break
          default:
            strShow = '1 小时前'
        }

        return strShow
      }
    }

    return ''
  }

  render() {
    const strTime = this.getLastReplyTime()

    return (
      <li className="list-item">
        <a className="img-wrap">
          <img src={this.props.member.avatar_normal} alt={this.props.member.username} />
        </a>
        <dl>
          <dt>
            <a href="">
              {this.props.title}
            </a>
          </dt>
          <dd>
            <a href="" className="node-name">
              {this.props.node.name}
            </a>
            &nbsp;•&nbsp;
            <a href="" className="user-name">
              {this.props.member.username}
            </a>
            &nbsp;•&nbsp;
            {strTime}
          </dd>
        </dl>
        <a className={cn({ none: !strTime, 'reply-num': true })}>
          {this.props.replies}
        </a>
      </li>
    )
  }
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps

export default ListItem

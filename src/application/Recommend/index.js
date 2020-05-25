import React from 'react'
import Slider from '../../components/slider'
import RecommendList from '../../components/recommendList'

function Recommend(props) {
  const bannerList = [1,2,3,4].map((item, index) => {
    return {
      id:index,
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590397619378&di=62d8f6d047b54329734700cd6e93bd5a&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg"
    }
  })

  const recommendList = [1,2,3,4,5,6].map(item => {
    return {
      id:1,
      picUrl:"https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount:17171122,
      name:"朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  })

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
    </div>
  )
}

export default React.memo(Recommend)
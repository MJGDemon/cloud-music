import styled from 'styled-components'
import style from '../../assets/global-style'

// Props 中的 globalRank 和 tracks.length 均代表是否为全球榜

export const Container = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .offical,.global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${style['font-size-m']};
    color: ${style['font-color-desc']};
  }
`

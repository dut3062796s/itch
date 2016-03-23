
import React, {Component, PropTypes} from 'react'

export class HubItem extends Component {
  render () {
    const {game} = this.props
    const {title, coverUrl} = game

    return <div className='hub-item'>
      <section className='cover' style={{backgroundImage: `url("${coverUrl}")`}}/>

      <section className='undercover'>
        <section className='title'>
          {title}
        </section>

        <section className='actions'>
          <div className='button'>
            <span className='icon icon-checkmark'/>
            <span>Launch</span>
          </div>
          <div className='icon-button'>
          </div>
        </section>
      </section>
    </div>
  }
}

HubItem.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string
  })
}

export default HubItem
import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      frontSpriteShown: true
    }
  }

  flipSprite = ()=>{
    this.setState({
      frontSpriteShown: !this.state.frontSpriteShown
    })
  }

  render() {

    const { name, sprites: { front, back }, stats } = this.props.pokemon 

    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipSprite} >
            { this.state.frontSpriteShown ? <img alt="front of pokemon" src={front} /> : 
              <img alt="back of pokemon" src={back} />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { stats.find(stat => stat.name ==='hp').value || 45 } 
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

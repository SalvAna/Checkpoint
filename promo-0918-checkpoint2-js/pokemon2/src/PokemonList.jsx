import React, { Component } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
const styles = {
  container:{
    backgroundImage: 'url(https://st2.depositphotos.com/3213441/12022/v/950/depositphotos_120226298-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg)',
    backgroundSize: '15%',
    height: '100%',
    width: '100%',
    position: 'fixed',
    opacity: '0.4',
    filter: 'blur(3px)',
  },
  image: {
    position: 'relative',
    width: '85%',
  },
  list:{
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '50px',
  },
  pageNumContainer:{
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pageNum: {
    padding: '5px',
    borderRadius: '20%',
    background: 'white',
    border: 'red solid 2px',
  },
  pageNumActive: {
    padding: '5px',
    borderRadius: '20%',
    background: 'red',
    border: '2px solid white',
    color: 'white',
  },

}

class PokemonList extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons : [],
      pageNum : 1,
      pageSize: 11,
      totalPages: 1,
    }

  }
  componentWillMount(){
    axios.get('https://api.pokemontcg.io/v1/cards?from=1@to=20')
    .then(result => {
      console.log(result.data.cards[0]);
      this.setState({
        pokemons:result.data.cards,
        totalPages: Math.floor(result.data.cards.length/this.state.pageSize)
      });
  })
}

  render() {
    const { pokemons, pageNum, pageSize, totalPages } = this.state;
    const firstItem = pageNum * pageSize;
    const lastItem = firstItem + pageSize;
    const dummyArray = new Array(totalPages).fill(0);
    return (
      <div>
        <div style={styles.container}></div>
        <img
          alt="logo"
          style={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"/>

        <div className="PokemonList" style={styles.list}>
          {
            pokemons.slice(firstItem,lastItem).map((pokemon,i) => <Pokemon key={i} pokemon={pokemon} />)
          }
        </div>
        
        <div style={styles.pageNumContainer}>
          {
            dummyArray.map((page, i) => 
              <a
                href="#"
                onClick={()=>this.setState({pageNum:i+1})}
                style={(i+1===pageNum)?styles.pageNum:styles.pageNumActive}>{i}</a>)
          }
        </div>
      </div>
    );
  }
}

export default PokemonList;

import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayedStocks: [],
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then((r) => r.json())
    .then((stocks) => {
      this.setState({
        stocks: stocks,
        displayedStocks: stocks
      })
    })
  }

  filterStocks = (type) => {
    console.log(type)
    this.setState({
      displayedStocks: this.state.displayedStocks.sort(
         (a,b) => a.stock.ticker(b.ticker))
    })
  }

  sortByName = () => {
    console.log('displayedStocks', this.state.displayedStocks)
    this.setState({
      displayedStocks: this.state.displayedStocks.sort( (a,b) => a.ticker.localeCompare(b.ticker) )
    })
  }

  sortByPrice = () => {
    console.log('displayedStocks', this.state.displayedStocks)
    this.setState({
      displayedStocks: this.state.displayedStocks.sort( (a,b) => a.price>b.price ? 1 : -1 )
    })
  }

  searchForStock = (input) => {
    if (input.length === 0) {
      this.setState({
        displayedStocks: this.state.stocks
      })
    }else{
      this.setState({
        displayedStocks: this.state.stocks.filter( stock => stock.name.toLowerCase().includes(input.toLowerCase()))
      })
   }
  }


  render() {
    return (
      <div>
        <SearchBar 
        filterStocks={this.filterStocks}
        sortByName={this.sortByName}
        sortByPrice={this.sortByPrice}
        searchForStock={this.searchForStock}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayedStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

import React from 'react';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Checkout from './components/Donate';

import coronaPic from './images/covidimage.png'
import ButtonAppBar from './components/Navbar/Navbar';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState( {data: fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        //fetch data
       this.setState({ data: fetchedData, country: country });
        //set the state
    }
    render() {
        const { data,country } =this.state;
        return (
            <div className={styles.container}>
                <ButtonAppBar />
                <img className={styles.image} src={coronaPic} alt="COVID19-Img"/>
                
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Checkout />
            </div>
        )
    }
}

export default App;
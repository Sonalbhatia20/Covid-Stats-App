import React from 'react';
import styles from './Donate.module.css';

class Checkout extends React.Component {
    // state = {
    //   amount: 0
    // };
  
    // constructor() {
    //   super()
    //   this.changeAmount = this.changeAmount.bind(this);
    //   this.openCheckout = this.openCheckout.bind(this);
    // }
  
    // changeAmount(e) {
    //   this.setState({amount: e.target.value})
    // }
  
    // openCheckout() {
    //   let options = {
    //     "key": "rzp_test_mnEigjvMqwR4mQ",
    //     "amount": "100", // 2000 paise = INR 20, amount in paisa
    //     "name": "Merchant Name",
    //     "description": "Donate for a Cause",
    //     "image": "./images/NGO.jpeg",
    //     "handler": function (response){
    //       alert(response.razorpay_payment_id);
    //     },
    //     "prefill": {
    //       "name": "ABC BCD",
    //       "email": "ABC@razorpay.com"
    //     },
    //     "notes": {
    //       "address": "Hello World"
    //     },
    //     "theme": {
    //       "color": "#F37254"
    //     }
    //   };
      
    //   let rzp = new window.Razorpay(options);
    //   rzp.open();
    // }
    btnClick() {
        window.open("https://rzp.io/l/ZB5zQHS22");
    }
    
    render () {
      return (
        <div>
          <button className={styles.don} onClick={this.btnClick.bind(this)}>Donate for a Cause!</button> 
        </div>
      )
    }
  }
  
  export default Checkout;
//   ReactDOM.render(<Checkout />, document.getElementById('react-root'));
  
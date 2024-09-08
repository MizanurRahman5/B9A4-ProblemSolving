/**
 * problem 1
 */

/*function signature/sample */
function calculateMoney(ticketSale) {

    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid Input';
    }

    const remainimgAmount = ( ticketSale * 120) - ( 500 + (8 * 50) );
    return remainimgAmount;


    }

 const ticketPrice1 = 10;
 const ticketPrice2 = 1055;
 const ticketPrice3 =93;
 const ticketPrice4 = -130;
 const ticketPrice5= 'jhfdg';
 const result1 = calculateMoney( ticketPrice1);
 const result2 = calculateMoney( ticketPrice2);
 const result3 = calculateMoney( ticketPrice3);
 const result4 = calculateMoney( ticketPrice4);
 const result5 = calculateMoney( ticketPrice5);
 console.log(result1, result2, result3,  result4, result5);
// Calculate Function
// Using the Simple Interest=p×r×t/100
let print_interest = document.getElementById('output');


// Calculate Function
const result = () =>{
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rates').value;
    let term = document.getElementById('time').value;
    let empty_message = document.getElementById('empty');

    // If input is empty
    if (principal == 0 && rate == 0 && term == 0) {
        empty_message.innerHTML = "Try input number in the fields";
    }
    else{

        // Simple interest Rate = p*r*t/100
        let interest_rate = (principal*rate*term)/100;
        

        print_interest.textContent =`Simple Interest: ₦${interest_rate.toFixed(2)}`;
        

    }
   
}
    

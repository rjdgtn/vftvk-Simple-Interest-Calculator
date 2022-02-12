function compute()
{
    // collect form data
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // test values
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
        // produce result
        document.getElementById("result").innerHTML="\
            If you deposit <span class='res'>"+principal+"</span>,<br/>\
            at an interest rate of <span class='res'>"+rate+"%</span>.<br/>\
            You will receive an amount of <span class='res'>"+interest+"</span>,<br/>\
            in the year <span class='res'>"+year+"</span><br/>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
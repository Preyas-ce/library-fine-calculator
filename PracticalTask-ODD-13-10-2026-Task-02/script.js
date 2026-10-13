function calculateFineBill() {
    const lateDays = Number(document.getElementById("lateDays").value);
    const bookCount = Number(document.getElementById("bookCount").value);
    const memberType = document.getElementById("memberType").value;
    const rate = chooseRate(memberType);
    const basicFine = calculateFine(lateDays, bookCount, rate);
    const processingCharge = 10;
    const total = calculateTotal(basicFine, processingCharge);
    document.getElementById("result").textContent = "Rate: ₹" + rate + " | Basic fine: ₹" + basicFine + " | Total including applicable processing charge: ₹" + total;
    document.getElementById("breakdown").textContent = buildBreakdown(lateDays, bookCount, rate);
}

function calculateFine(days, books, rate) {
    // M6: basic fine = late days x number of books x rate per day per book
    return days * books * rate;
}

function chooseRate(type) {
    // D1: if / else if / else
    if (type === "Student") {
        return 5;
    } else if (type === "Staff") {
        return 3;
    } else {
        return 10; // Visitor
    }
}

function calculateTotal(fine, processingCharge) {
    // D2: no fine -> total is 0; otherwise add the processing charge
    if (fine <= 0) {
        return 0;
    }
    return fine + processingCharge;
}

function buildBreakdown(days, books, rate) {
    // D3: for loop from day 1 to days, showing cumulative fine each day
    if (days <= 0) {
        return "No late days, so no fine.";
    }
    let summary = "";
    for (let day = 1; day <= days; day++) {
        const cumulative = day * books * rate;
        summary += "Day " + day + ": cumulative fine = ₹" + cumulative + "\n";
    }
    return summary;
}

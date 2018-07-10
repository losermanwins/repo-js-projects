//Linear Equations Required
//Max = P + A
//Non Negativity : P >= 0, A >= 0
//Constraints :
//1P + 0A <= total Pumpkin Flavoring
//0P + 1A <= total Apples
//3P + 4A <= total Eggs
//4P + 3A <= total Cups of Milk
//3P + 2A <= total Cups of Sugar

//have a base number of pies at 0
//loop through all conditions
//if none fail, add one

function PNOP(pf,apples,e,com,cos) {
    let P = 0;
    let A = 0;
    let methodA = {
        PPie: 0,
        APie: 0,
        total: this.PPie + this.APie
    };
    let methodB = {
        PPie: 0,
        APie: 0,
        total: this.PPie + this.APie
    };
    let methodC = {
        PPie: 0,
        APie: 0,
        total: this.PPie + this.APie
    };
    //loop A
    let aTotal = 0;
    while (true) {
        if ((P+1) <= pf && (A+1) <= apples && 3*(P+1) + 4*(A+1) <= e && 4*(P+1) + 3*(A+1) <= com && 3*(P+1) + 2*(A+1) <= cos) {
            P++;
            A++;
            console.log("P/A hit");
        } 
        else if (A+1 <= apples && 3*P + 4*(A+1) <= e && 4*P + 3*(A+1) <= com && 3*P + 2*(A+1) <= cos) {
            A++;
            console.log("A hit");
        } else if (P+1 <= pf && 3*(P+1) + 4*A <= e && 4*(P+1) + 3*A <= com && 3*(P+1) + 2*A <= cos) {
            P++;
            console.log("P hit");
        }
        else {
            methodA.PPie = P;
            methodA.APie = A;
            aTotal = A + P;
            A = 0;
            P = 0;
            break;
        }
    }
    //loop B
    let bTotal = 0;
    while (true) {
        if (A+1 <= apples && 3*P + 4*(A+1) <= e && 4*P + 3*(A+1) <= com && 3*P + 2*(A+1) <= cos) {
            A++;
            console.log("A hit");
        } else if (P+1 <= pf && 3*(P+1) + 4*A <= e && 4*(P+1) + 3*A <= com && 3*(P+1) + 2*A <= cos) {
            P++;
            console.log("P hit");
        } else {
            methodB.PPie = P;
            methodA.APie = A;
            bTotal = P + A;
            A = 0;
            P = 0;
            break;
        }
    }
    //loop C
    let cTotal = 0;
    while (true) {
        if (P+1 <= pf && 3*(P+1) + 4*A <= e && 4*(P+1) + 3*A <= com && 3*(P+1) + 2*A <= cos) {
            P++;
            console.log("P hit");
        } 
         else if (A+1 <= apples && 3*P + 4*(A+1) <= e && 4*P + 3*(A+1) <= com && 3*P + 2*(A+1) <= cos) {
            A++;
            console.log("A hit");
        } else {
            methodC.PPie = P;
            methodC.APie = A;
            cTotal = P + A;
            A = 0;
            P = 0;
            break;
        }
    }
    if (aTotal >= bTotal && aTotal >= cTotal) {
         console.log(methodA.PPie + " Pumpkin Pies and " + methodA.APie + " Apple Pies");
    } else if (bTotal >= aTotal && bTotal >= cTotal) {
         console.log(methodB.PPie + " Pumpkin Pies and " + methodB.APie + " Apple Pies");
    } else if (cTotal >= aTotal && cTotal >= bTotal) {
         console.log(methodC.PPie + " Pumpkin Pies and " + methodC.APie + " Apple Pies");
    }
   
}

PNOP(10,14,10,42,24);
PNOP(12,4,40,30,40);
PNOP(12,14,20,42,24);

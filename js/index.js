// function for memory 
function updateExtraMeomry(memoryCostId,cost) {
    const memoryCostField = document.getElementById(memoryCostId);
    memoryCostField.innerText=cost;

    const totalCost = totalCostCalculation();

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText=totalCost;

    const totalPricePromoField =document.getElementById('promoCode-total');
    totalPricePromoField.innerText=totalCost;

}

// function for storage
function updateExtraStorage(storageCostId,cost) {
    const storageCostField = document.getElementById(storageCostId);
   
    storageCostField.innerText=cost;

    const totalCost = totalCostCalculation();

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText=totalCost;

    const totalPricePromoField =document.getElementById('promoCode-total');
    totalPricePromoField.innerText=totalCost;

}

// function for delivery charge
function updateExtraStorage(deliveryCostId,cost) {
    const deliveryCostField = document.getElementById(deliveryCostId);
   
    deliveryCostField.innerText=cost;

    const totalCost = totalCostCalculation();

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText=totalCost;

    const totalPricePromoField =document.getElementById('promoCode-total');
    totalPricePromoField.innerText=totalCost;

}
// function for promo code 
function updatePromoTotal(totalCostId,promoCode) {
    
    const totalCostField = document.getElementById(totalCostId);
    
    const totalCostPrev = totalCostCalculation();
  

    const promoInput = document.getElementById('promo-input');
    
    if(promoInput.value == promoCode){
        console.log(totalCostPrev-((totalCostPrev*20)/100))
        totalCostField.innerText = totalCostPrev-((totalCostPrev*20)/100);
    }

    promoInput.value='';
    
    
}

// total cost calculation 
function totalCostCalculation() {
    const bestPriceField = document.getElementById('best-price');
    const extraMemoryField = document.getElementById('memory-cost');
    const extraStorageField = document.getElementById('storage-cost');
    const deliverChargeField = document.getElementById('delivery-charge');
   

    // total price 
    const totalCost = parseFloat(bestPriceField.innerText)+parseFloat(extraMemoryField.innerText)+parseFloat(extraStorageField.innerText)+parseFloat(deliverChargeField.innerText);
    return totalCost;

    
}

// for memory 
// for 8gb extra memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    updateExtraMeomry('memory-cost',0);
});

// for 16gb extra memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    updateExtraMeomry('memory-cost',180);
});

// for storage 
// for 256gb extra storage
document.getElementById('storage-256gb').addEventListener('click',function(){
    updateExtraStorage('storage-cost',0);
});
// for 256gb extra storage
document.getElementById('storage-512gb').addEventListener('click',function(){
    updateExtraStorage('storage-cost',100);
});
// for 256gb extra storage
document.getElementById('storage-1tb').addEventListener('click',function(){
    updateExtraStorage('storage-cost',180);
});


// for delivery charge 
// for free delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    updateExtraMeomry('delivery-charge',0);
   
});

// for delivery cost
document.getElementById('charged-delivery').addEventListener('click',function(){
    updateExtraMeomry('delivery-charge',20);
   
});

// for promo code button 
document.getElementById('promo-button').addEventListener('click',function(){
    updatePromoTotal('promoCode-total','stevekaku');
});




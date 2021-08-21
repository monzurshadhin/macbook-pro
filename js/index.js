// function for update cost 
function updateCost(costId,cost) {
    const costField = document.getElementById(costId);
    costField.innerText=cost;

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
        
        totalCostField.innerText = totalCostPrev-((totalCostPrev*20)/100);
    }

    promoInput.value='';
    
    
}

// total cost calculation 
function totalCostCalculation() {
    const bestPriceField = document.getElementById('best-price');
    const bestPrice = parseFloat(bestPriceField.innerText);

    const extraMemoryField = document.getElementById('memory-cost');
    const extraMemoryCost = parseFloat(extraMemoryField.innerText);

    const extraStorageField = document.getElementById('storage-cost');
    const extraStorageCost = parseFloat(extraStorageField.innerText);

    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryCost = parseFloat(deliveryChargeField.innerText);
   

    // total price 
    const totalCost = bestPrice+extraMemoryCost+extraStorageCost+deliveryCost;
    return totalCost;

    
}

// for memory 
// for 8gb extra memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    updateCost('memory-cost',0);
});

// for 16gb extra memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    updateCost('memory-cost',180);
});

// for storage 
// for 256gb extra storage
document.getElementById('storage-256gb').addEventListener('click',function(){
    updateCost('storage-cost',0);
});
// for 256gb extra storage
document.getElementById('storage-512gb').addEventListener('click',function(){
    updateCost('storage-cost',100);
});
// for 256gb extra storage
document.getElementById('storage-1tb').addEventListener('click',function(){
    updateCost('storage-cost',180);
});


// for delivery charge 
// for free delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    updateCost('delivery-charge',0);
   
});

// for delivery cost
document.getElementById('charged-delivery').addEventListener('click',function(){
    updateCost('delivery-charge',20);
   
});

// for promo code button 
document.getElementById('promo-button').addEventListener('click',function(){
    updatePromoTotal('promoCode-total','stevekaku');
});




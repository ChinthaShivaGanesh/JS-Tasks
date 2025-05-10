function step1(item,nextStep){
    alert(`You Have Ordered ${item}`)
    setTimeout(()=>{
        nextStep()
    },2000)
}
step1("laptop dell",()=>{
    alert("Your Laptop Dell Ordered Shipped Successfully")
})

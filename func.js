module.exports = {
  "sin": (x) => (Math.sin(x)+1),
  "cos": (x) => (Math.cos(x)+1),
  "折线": (x) => {
    let y=0
    let tmp=x%4
    if(tmp<1){
      y=x%4
    }else if(tmp<2){
      y=2-x%4
    }else if(tmp<3){
      y=-(x-2)%4
    }
    else{
      y=-(2-(x-2)%4)
    }
    return y+1
  },
  "多项式": (x) => {
    return 0.5*(3*Math.sin(x)-2*Math.cos(x)+2*x-0.3*Math.pow(x,2)+50)
  }
}
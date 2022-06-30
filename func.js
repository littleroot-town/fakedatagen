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
  "多项式": (x, para=[0.5, 50, 3, -2, 2, -0.3]) => {
    return para[0]*(para[2]*Math.sin(x)+para[3]*Math.cos(x)+para[4]*x+para[5]*Math.pow(x,2)+para[1])
  }
}
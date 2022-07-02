module.exports = {
  "sin": (x, para=[]) => {
    let k=para[0]
    let a0=para[1]
    return k*Math.sin(x)+a0
  },
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
  "多项式": (x, para=[]) => {
    let k = para[0]
    let a0 = para[1]
    let a1 = para[2]
    let a2 = para[3]
    let a3 = para[4]
    let a4 = para[5]
    return k*(a1*Math.sin(x)+a2*Math.cos(x)+a3*x+a4*Math.pow(x,2)+a0)
  }
}
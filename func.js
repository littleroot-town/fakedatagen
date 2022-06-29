module.exports = {
  "sin": Math.sin,
  "cos": Math.cos,
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
    return y
  }
}

// (y1+y)/2 =1
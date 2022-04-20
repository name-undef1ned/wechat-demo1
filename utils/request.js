const BASE_URL="https://www.escook.cn"

export function getslides(){
  wx.request({
    url:BASE_URL+'/slides',
    method:'GET',
    success:(res)=>{
      arguments[0](res)
    }
  })
}

export function getcategories(){
  wx.request({
    url:BASE_URL+'/categories',
    method:'GET',
    success:(res)=>{
      arguments[0](res)
    }
  })
}
const data =  [{
    "id": 1,
    "title": "title",
    "imageURL": "someUrl",
    "orderId": "OD123",
    "messageList": [
      {
        "messageId": "msg1",
        "message": "Hi",
        "messageType": "text"
      },
      {
        "messageId": "msg2",
        "message": "need assistance",
        "messageType": "text"
      }
    ]
  },
  {
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234m",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234n",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234b",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234v",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234c",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234x",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234a",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234s",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234d",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234f",
    "messageList": []
  },{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234g",
    "messageList": []
  }
]


let leftList = document.querySelector(".leftNav")
let rightNav = document.querySelector(".rightNav")
let chatScreen = document.querySelector(".chatScreen")
let messageBox = document.querySelector(".messageBox")
let inputBox = document.querySelector(".inputBox")
let sendMsg = document.querySelector(".sendMsg")

console.log(leftList)

var selected = ""

function displaySelected(item){
    if(item){

        // rightNav.textContent=item
    }else{

        // rightNav.textContent="rfcrfcrfc"
    }
}
displaySelected()

data.map((elem) => {
    leftList.insertAdjacentHTML("beforeend", `<div class="listItem" key=${elem.orderId}>${elem.title}</div>`)
})

leftList.addEventListener("click",(e)=>{
    console.log(e.target.classList.contains("listItem"))
    if(e.target.classList.contains("listItem")){
        selected = e.target.getAttribute("key")
        displaySelected(selected)
    }
})





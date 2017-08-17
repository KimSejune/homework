(function (window, document) {
  'use strict'; // 엄격한것

  function addListItem(e) {
    if (!input.value.trim()) return;
    if ((e.keyCode === 13) || e.type === 'click') {
      itemPost(input.value);
      insertItem(todoList, input.value);
      input.value = '';
      input.focus();
    }
  }
  // List Item을 delete method로 제거하는 함수
  function deleteListItem(id, target) {
    var xhr = new XMLHttpRequest();
    xhr.open('delete', '/toDoList/' + id, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log('this.responseText: ', this.responseText);
          //DB에서 성공적으로 제거 됐을 경우 DOM에서도 지움
          //target(눌리는 button)의 부모인 li를 삭제해야해서 parentNode를 사용한다.
          //<li class="todo-item">task<button class ="deletebtn">삭제</button></li>
          todoList.removeChild(target.parentNode);
        }
      }
    }
  }
  // List Item을 Post method로 등록하는 함수
  // input.value값이 task로 들어가기 때문이다.
  function itemPost(task) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/toDoList', true);
    // HTTP 통신패킷의 header 속성을 바꿔주는 API content-type을 application/json으로 변경해준다.
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = {
      task
    };
    // data를 Json화 시켜서 HTTP 통신 패킷의 body에 넣어서 보냄
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 201) {
          console.log(this.responseText);
          // 통신이 성공했을 경우 해당 List item을 DOM에 추가
          // JSON 형식의 문자열 => 객체
          var item = JSON.parse(this.responseText);
          insertItem(todoList, item.task, item.id);
        }
      }
    }
  }

  //DB로 부터 List item list를 get metho를 통해 가져오는 함수
  function getListItem() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/toDoList', true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.log('this.responseText: ', this.responseText);
          var toDoItemList = JSON.parse(this.responseText);
          // 통신이 성공하면item을 list에 추가
          toDoItemList.forEach(function (item) {
            console.log('이것이 item.task: ', item.task);
            insertItem(todoList, item.task, item.id);
          });
        } else {
          console.error('GET failed')
        }
      }
    }
  }
  // List item 추가해주는 함수
  // element = toDoList이며  , task,id는 data.json을 보면 알 수 있다.
  function insertItem(element, task, id) {
    element.insertAdjacentHTML('beforeend', '<li class="todo-item">' + task + '<button class ="deletebtn">삭제</button></li>');
    // li안에 delete button이 동적으로 생성 되기 때문에 DOM에 추가한 후 클릭 이벤트 바인딩    
    bindDeleteButton(id);
  }

  // deleteButton을 바인딩 시켜주는 함수
  function bindDeleteButton(id) {
    // 비동기라서 삭제 버튼은 생성한 후에 찾아야한다. 모든요소를 찾아야해서 All을 사용.
    var deletebtn = document.querySelectorAll('.deletebtn');
    console.log('deletebtn :', deletebtn[deletebtn.length - 1]);
    // li 요소가 추가 될 때 delete button은 항상 마지막 요소이기 때문에 
    // 마지막 버튼에 이벤트 바인딩
    deletebtn[deletebtn.length - 1].addEventListener('click', function () {
      deleteListItem(id, this);
    });
  }


  var input = document.querySelector('.input');
  var button = document.querySelector('.button');
  var todoList = document.querySelector('.todo-list');

  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);

  // CRUD create, read, update, delete
  // HTTP method post, get, put, delete

  getListItem();

})(window, document);
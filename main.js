// var Title = "Hello World";
// let arrr = ['zain', 'saad', 'hamad'];
// function change() {
//     var input = document.getElementById('input');
//     console.log(input);
// }

//  var mydata = JSON. parse(data); alert(mydata[0]);

// GET JSON DATA LOCALLY

const getData = () => {
    fetch("data.json")
   .then(response => response.json())
   .then(data => {
       console.log(data);
       document.querySelector("#name").innerText = data.name;
       document.querySelector("#age").innerText = data.age;
       document.querySelector("#car").innerText = data.car;
   })
}

// GET JSON FROM API WITH AXIOS

const getDataAPI = () => {
    axios.get('https://reqres.in/api/users/2').then(response => {
        var data = response.data;
        // var id = data.id;
        console.log(data);
    });
};

const postDataAPI = () => {
    axios.post('https://reqres.in/api/register',
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        },).then(response => {
        // var data = response.data;
        // var id = data.id;
        console.log(response);
    });
};
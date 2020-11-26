// initializing socket, connecting to the server
var socket = io.connect("http://localhost:7777");
socket.on("connect", function(data){
    socket.emit("join","Hello server from client");
});

//listen for 'thread' event, which updates message
socket.on("thread", function(data){
    $("#thread").append("<li>"+data+"</li>");
});

//sends message to server, resets and prevents default form action
$("form").submit(function(){
    var message = $("#message").val();
    socket.emit("messages", message);
    this.reset();
    return false;
});
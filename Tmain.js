
var guest_list = [];
    
function submit()
{
    guest_list.push(document.getElementById("Guest").value);    
    document.getElementById("display_Guests").innerHTML = guest_list;  
    document.getElementById("Guest").value = null; 

}

function show()
{
    var guest_list_vertical = [];
    for (var j = 0; j < guest_list.length; j++) 
    {
        var name_of_guest = "<h4>"+ guest_list[j] +"</h4>";   
        guest_list_vertical.push(name_of_guest);
    } 
    
    document.getElementById("display_Guests_vertical").innerHTML = guest_list_vertical.join("");
}

function sort()
{
    var guest_list_sorted = [];
    for (var j = 0; j < guest_list.length; j++) 
    {
        var name_of_guest = "<h4>"+ guest_list[j] +"</h4>";   
        guest_list_sorted.push(name_of_guest);
    } 
    guest_list_sorted.sort();
    document.getElementById("display_Guests_sorted").innerHTML = guest_list_sorted.join("");
}

function search(){         
    var y = guest_list.includes(document.getElementById("search_input").value);  
    if(y==true)   
    {
        document.getElementById("search_guest").innerHTML = "Guest found in the list"
    } 
    else{
        document.getElementById("search_guest").innerHTML = "Guest not found in the list"
    }
    
}






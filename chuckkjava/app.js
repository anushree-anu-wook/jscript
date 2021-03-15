document.getElementById('btn').addEventListener('click',button)
 function button(e)
    {
        var number=document.getElementById("numjoke").value;
        const xhr=new  XMLHttpRequest();
        xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)
        xhr.onload=function()
        {
            if(this.status===200){
                const jokes=JSON.parse(this.responseText);
                console.log(jokes)
                if(jokes.type=="success"){
                    let output='';
                    jokes.value.forEach(function(jok){
                        output+=`<li>${jok.joke}</li>`
                    })
       document.getElementById("getjokes ").innerHTML=output;
                }
            }
        }
xhr.send();
    }

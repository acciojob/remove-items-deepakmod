//your JS code here. If required.
			let select=document.getElementById("colorSelect");
            let button=document.getElementsByTagName("input")[0];
            button.addEventListener('click',()=>{
                let rem=select.value;
                for(let i=0;i<select.children.length;i++){
                    if(select.children[i].innerText == rem){
                        select.removeChild(select.children[i]);
                    }
                }
            })
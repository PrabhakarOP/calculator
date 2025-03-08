let workspace=document.querySelector("#workspace > p");

let buttons=document.querySelectorAll("button");

buttons.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        
        switch(b.id){
            case "ac":  workspace.innerText=null;break;
            case "c": workspace.innerText= workspace.innerText.slice(0,-1);break;
            case "sign": changeSign(workspace.innerText);break;
            case "divide": workspace.innerText= addThisOperatorTo('/',workspace.innerText);break;
            case "multiply": workspace.innerText= addThisOperatorTo('x',workspace.innerText);break;
            case "minus" : workspace.innerText= addThisOperatorTo('-',workspace.innerText);break;
            case "plus" : workspace.innerText= addThisOperatorTo('+',workspace.innerText);break;
            case "equal" :  workspace.innerText=total(workspace.innerText);break;
            default : workspace.innerText+=b.innerText;
        }
        
        });
    });

    function changeSign(str){
        if(str.slice(-1)=='-'){
            return workspace.innerText=workspace.innerText.slice(0,-1);
        }
        else
            return workspace.innerText+="-";
    }

    function addThisOperatorTo(op,str){
        if(isOperator(str.slice(-1)))
            return str=str.slice(0,-1)+op;
        else
        return str=str+op;
        
    }

    function isOperator(op){
        if(op == '+' || op == '-' || op == 'x' || op == '/'){
            return true;
        }
        return false;
    }

    function total(exp){
        if(isOperator(exp.slice(-1)))
            return exp;

        if(exp.charAt(0) != '-' && isOperator(exp.charAt(0))){        //checks if there is a leading operator other than minus
            exp=exp.slice(1);
        }

        while(exp.charAt(0)=='0'){
            exp=exp.slice(1);
        }

        exp=exp.replace('x','*');
        return eval(exp);
    }
function jump1(){
    var a = document.getElementById("user").value;
    var b = document.getElementById("pwd").value;
   if ((a == 15938788961) && b == 971011) {
      window.location.href="./templates/homepage.html";
    }else{
      alert("账号或者密码错误!");
    }
  }

  function jump(){
    save();
    if ( find() == "true") {
      window.location.href="./templates/homepagecopy.html";
    }
  }
  
  //保存数据  
function save(){  
  var site = new Object;
  site.keyname = document.getElementById("add").id;
  site.sitedate = document.getElementById("add").value;  
  // site.siteurl = document.getElementById("siteurl").value;
  var str = JSON.stringify(site); // 将对象转换为字符串
  localStorage.setItem(site.keyname,str);  
  // alert(site.keyname + "保存成功");
}  
//查找数据  
function find(){  
  // 获取输入值
  // var search_site = document.getElementById("search_site").value;  
  // 根据输入值搜索值
  var str = localStorage.getItem("add");  

  // var find_result = document.getElementById("find_result");
  var site = JSON.parse(str);  

  return site.sitedate;
  // find_result.innerHTML = search_site + "的网站名是：" + site.sitename + "，网址是：" + site.siteurl;  
}
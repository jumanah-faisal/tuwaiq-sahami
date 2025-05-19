function store(){

          var name = document.getElementById('name');
          var pw = document.getElementById('pw');
          var lowerCaseLetters = /[a-z]/g;
          var upperCaseLetters = /[A-Z]/g;
          var numbers = /[0-9]/g;
      
          if(name.value.length == 0){
              alert('يرجى ملء البريد الإلكتروني');
      
          }else if(pw.value.length == 0){
              alert('يرجى ملء كلمة المرور');
      
          }else if(name.value.length == 0 && pw.value.length == 0){
              alert('يرجى ملء البريد الإلكتروني وكلمة المرور');
      
          }else if(pw.value.length > 8){
              alert('الحد الأقصى 8');
      
          }else if(!pw.value.match(numbers)){
              alert('يرجى إضافة رقم واحد');
      
          }else if(!pw.value.match(upperCaseLetters)){
              alert('الرجاء إضافة حرف واحد كبير');
      
          }else if(!pw.value.match(lowerCaseLetters)){
              alert('الرجاء إضافة حرف واحد صغير');
      
          }else{
              localStorage.setItem('name', name.value);
              localStorage.setItem('pw', pw.value);
              alert('Your account has been created');
          }
      }
       const dtToday = new Date();
        const month = dtToday.getMonth() + 1;
        const day = dtToday.getDate();
        const year = dtToday.getFullYear();
        const maxYear = year - 18;
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();

        var maxDate = maxYear + '-' + month + '-' + day;
        var minYear = year - 80;
        var minDate = minYear + '-' + month + '-' + day;
        alert(maxDate);
        document.querySelectorAll("#txtDate")[0].setAttribute("max",maxDate);

        document.querySelectorAll("#txtDate")[0].setAttribute("min",minDate);
      
      
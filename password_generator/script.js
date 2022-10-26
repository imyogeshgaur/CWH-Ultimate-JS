class Password {
    constructor(superStrongPswdLst, simplePswdList, superStrongLen, simpleSize, funnyPswdList, generatedPassword) {
      this.dict = superStrongPswdLst;
      this.size = superStrongLen;
      this.dict2 = simplePswdList;
      this.size2 = simpleSize;
      this.dict4 = funnyPswdList;
      this.ar = generatedPassword;
    }

    generateWeakPassword() {
      let n = 0;
      while (n < 8) {
        generatedPassword += simplePswdList.charAt(Math.floor(Math.random() * simpleSize));
        n = n + 1;
      }
      return generatedPassword;
    }

    generateStongPassword() {
      let n = 0;
      while (n < 8) {
        generatedPassword += superStrongPswdLst.charAt(Math.floor(Math.random() * superStrongLen));
        n = n + 1;
      }
      return generatedPassword;
    }
  
    generateSuperStongPassword() {
      let n = 0;
      while (n < 16) {
        generatedPassword += superStrongPswdLst.charAt(Math.floor(Math.random() * superStrongLen));
        n = n + 1;
      }
      return generatedPassword;
    }
  
    generateFunnyPassword() {
      let n = 0;
      generatedPassword = funnyPswdList[Math.floor(Math.random() * fpLen)];
      return generatedPassword;
    }
    resetFunc() {
      generatedPassword = "";
      return generatedPassword;
    }
  }
  
  let simplePswdList = "abcdefghijklmnopqrstuvwxyz1234567890";
  let superStrongPswdLst = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=}{][|:;?/>.<,";
  let funnyPswdList = ["iloveyou", "password", "incorrect", "love", "admin", "shreu", "haye ram", "ineedapassword", "passwordforoldpeople","yetanotherpassword","doubleclick","PasswordShmashword","whydoialwaysforget"," iforgot"," iamnottellingyoumypw","masterpassword"," myonlypassword","cantremember","passwordforoldpeople","yetanotherpassword"];
  
  let simpleSize = simplePswdList.length;
  let superStrongLen = superStrongPswdLst.length;
  let fpLen = funnyPswdList.length;
  
  let generatedPassword = "";
  
  let myPassword1 = new Password(superStrongPswdLst, simplePswdList, superStrongLen, simpleSize, funnyPswdList, fpLen, generatedPassword);
  
  document.getElementById("btn1").onclick = function() {
    input.value = myPassword1.generateWeakPassword();
  }
  
  document.getElementById("btn2").onclick = function() {
    input.value = myPassword1.generateStongPassword();
  }
  
  document.getElementById("btn3").onclick = function() {
    input.value = myPassword1.generateSuperStongPassword();
  }
  
  document.getElementById("btn4").onclick = function() {
    input.value = myPassword1.generateFunnyPassword();
  }
  document.getElementById("btn5").onclick = function() {
    input.select();
    navigator.clipboard.writeText(input.value);
    input.value = myPassword1.resetFunc();
  }
  document.getElementById("btn6").onclick = function() {
    input.value = myPassword1.resetFunc();
  }
  
  
  
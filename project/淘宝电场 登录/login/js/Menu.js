function Menu() {
    var arrSign = document.querySelector('.sign_countryCode').children;
    var form = document.forms[0];
    var img_time = document.querySelectorAll('ul li span.img_time');
    var arrow = document.querySelector('.left a');
    var arrList = document.querySelectorAll('.menu ul li');
    var num;
    xiala();
    function xiala() {
        if(arrSign[1].className === 'menu list'){
            arrow.onclick = arrow_click;
        }
        function arrow_click() {
            arrSign[1].className = 'menu list selected'
        }
    }
    for (var i = 0;i < arrList.length ;i++){
        selected();
        arrList[i].onclick = list_click;
    }
    function list_click() {
        for (i = 0;i < arrList.length ;i++){
            if(arrList[i]==this){
                arrList[i].className = 'selected';
                selected();
                img_time[i].className = 'img_time checked';
                arrSign[1].className = 'menu list';
            }else{
                arrList[i].className = '';
                img_time[i].className = 'img_time';
            }
        }
    }
    function selected() {
        for (var i = 0; i < arrList.length; i++) {
            if (arrList[i].className == 'selected') {
                num = arrList[i].value;
                write();
            }
        }
        function write() {
            form.area.placeholder = num;
        }
    }
}
//手机界面登录
function Login() {
    var form = document.forms[0];

    form.onsubmit = form_submit;
    form.uid.onfocus = uid_focus;
    form.uid.onblur = uid_blur;
    form.pwd.onfocus = pwd_focus;
    form.pwd.onblur = pwd_blur;


    function form_submit() {
        var key = true;

        if (!uid_blur()) {
            key = false;
        }
        if (!pwd_blur()) {
            key = false;
        }


        return key;
    }

    function uid_focus() {

    }
    function uid_blur() {
        var key = false;
        var tips = document.querySelector('.tips.one');
        var txt = form.uid.value;
        var code = document.querySelector('.sign .code_input a');

        if (txt != '') {
            if (/[0-9]/i.test(txt)) {
                if (txt.length == 11) {
                    code.className = '';
                    key = true;

                }
            } else {
                tips.innerHTML = '手机号码不正确，请重新输入';
                tips.className = 'tips err';
            }
        } else {
            if (this == form.uid) {
                tips.innerHTML = '';
                tips.className = 'tips';
            } else {
                tips.innerHTML = '请输入手机号码';
                tips.className = 'tips err';
            }
        }
        return key;
    }

    function pwd_focus() {

    }
    function pwd_blur() {
        var key = false;
        var tips = document.querySelector('.tips.two');
        var txt = form.pwd.value;

        if (txt.length == 4) {
            if (/[a-z][0-9]/i.test(txt)) {
                // key = true;
            }
        } else {
            if (txt.length != 0) {
                tips.innerHTML = '验证码错误';
                tips.className = 'tips err';
            } else {
                if (this != form.pwd) {
                    tips.innerHTML = '请输入验证码';
                    tips.className = 'tips err';
                } else {
                    tips.innerHTML = '';
                    tips.className = 'tips';
                }
            }
        }
        return key;
    }
}
//邮箱界面登录

function Login_email() {
    var form = document.forms[1];
    form.onsubmit = form_submit;
    form.inputuin.onfocus = inputuin_focus;
    form.inputuin.onblur = inputuin_blur;
    form.inputpwd.onfocus = inputpwd_focus;
    form.inputpwd.onblur = inputpwd_blur;

    function form_submit() {
        var key = true;

        if (!inputuin_blur()) {
            key = false;
        }
        if (!inputpwd_blur()) {
            key = false;
        }

        return key;
    }

    function inputuin_focus() {

    }
    function inputuin_blur() {
        var key = false;
        var tips = document.querySelector('.tips.three');
        var txt = form.inputuin.value;

        if (txt != '') {
            if (/^[a-z]\w{5,17}$/i.test(txt)) {
                key = true;
            } else {
                tips.innerHTML = '请填写企业邮箱的完整帐号，或管理员帐号。';
                tips.className = 'tips err';
            }
        } else {
            if (this == form.inputuin) {
                tips.innerHTML = '';
                tips.className = 'tips';
            } else {
                tips.innerHTML = '请输入邮箱帐号/管理员帐号';
                tips.className = 'tips err';
            }
        }
        return key;
    }

    function inputpwd_focus() {

    }
    function inputpwd_blur() {
        var key = false;
        var tips = document.querySelector('.tips.four');
        var txt = form.inputpwd.value;

        if (txt.length >=8 && txt.length <= 20) {
            if (/[a-z0-9]^[a-z0-9]/i.test(txt)) {
                // key = true;
            }
        } else {
            if (txt.length != 0) {
                tips.innerHTML = '密码错误';
                tips.className = 'tips err';
            } else {
                if (this != form.inputpwd) {
                    tips.innerHTML = '请输入密码';
                    tips.className = 'tips err';
                } else {
                    tips.innerHTML = '';
                    tips.className = 'tips';
                }
            }
        }
        return key;
    }
}
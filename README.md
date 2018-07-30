# Password Checker

password-checker.js is a simple password control functions that control input's password value with regex. password-checker.js contains a few validator list which are; upper case, lower case, number, 9 characters length and one special character. Those validators control input's value with regex.

### Requirements
<ul>
<li><a href="https://getbootstrap.com/">Bootstrap</a> (for validator list which is show valid|invalid results of password value)</li>
<li><a href="https://fontawesome.com/">Fontawesome</a> (for validator list's icon)</li>
<li><a href="https://jquery.com/">Jquery</a> (for javascript)</li>
</ul>

### Demo
<p align="center">
  <img src="https://imageshack.com/a/img924/701/t7wNQl.gif" alt="demo gif">
</p>

### How to use?

* You have to include password-checker.js into your html page end;
`<script src="./src/js/password-checker.js" type="text/javascript"></script>`

* Specify your validation list, password input and submit button element in html;
```
<span id="validationList"></span>
<form>
    <div class="form-group mt15">
        <input autofocus id="password" class="form-control" type="password" placeholder="Type your password here..." autocomplete="off" />
        <small id="passwordHelp" class="form-text text-muted">Typed password is: </small>
    </div>
    <button type="submit" id="submitPassword" class="btn btn-primary">Submit Password</button>
</form>
```

* After that you can simply call functions in document.ready;
```
    $(document).ready(function () {
        // init validation list
        validationList("validationList");
        
        // init password-checker.js function with your input id which password and button id which you want to disable
        passwordChecker("#password", submitButton);
    });
```
for more information and demo you can view <code><a href="https://github.com/uedemir/password-checker/blob/master/index.html">index.html</a></code>.


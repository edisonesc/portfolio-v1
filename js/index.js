// openTab();

window.onload = function() {
    initTabs();
    initCountdown();
}

function initTabs() {
    var selectedTab = "System";
    document.getElementById(selectedTab).style.display = "block";
    document.getElementById(selectedTab).className += " active";
}

function openTab(evt, tabName) {
    console.log(evt);
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for(i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-links");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function initCountdown() {
    setCountdown();
    setInterval(setCountdown, 86400);
}

function setCountdown() {     
    var today = new Date();
    var targetDate = new Date("January 1, 2030");
    var msPerDay = 24 * 60 * 60 * 1000;
    var timeLeft = (targetDate.getTime() - today.getTime());
    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
    var yearsLeft = 0;
    if (daysLeft > 365) {
    yearsLeft = Math.floor(daysLeft / 365);
    daysLeft = daysLeft % 365;
    }
    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft);
    var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);    
    document.getElementById('countdown').innerHTML = yearsLeft + "YR" + daysLeft + "D";
}

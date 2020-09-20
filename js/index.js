// openTab();

window.onload = function() {
    initTabs();
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
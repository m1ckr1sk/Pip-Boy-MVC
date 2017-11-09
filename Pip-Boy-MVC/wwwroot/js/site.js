function resetNav() {
    document.getElementById("stat-nav").className = "stat";
    document.getElementById("inv-nav").className = "inv";
    document.getElementById("data-nav").className = "data";
    document.getElementById("radio-nav").className = "radio";
    document.getElementById("map-nav").className = "map";
    document.getElementById("status-nav").className = "status";

    document.getElementById("vb-radio").className = "vaultboy-hidden";
    document.getElementById("vb-stat").className = "vaultboy-hidden";
};

function invPage() {
    resetNav();
    document.getElementById("inv-nav").className = "active inv";
};

function statPage() {
    resetNav();
    document.getElementById("stat-nav").className = "active stat";
    document.getElementById("vb-stat").className = "vaultboy";
};

function dataPage() {
    resetNav();
    document.getElementById("data-nav").className = "active data";
};

function radioPage() {
    resetNav();
    document.getElementById("radio-nav").className = "active radio";
};

function mapPage() {
    resetNav();
    document.getElementById("map-nav").className = "active map";
};

function radioPage() {
    resetNav();
    document.getElementById("radio-nav").className = "active radio";
    document.getElementById("vb-radio").className = "vaultboy";
    
};
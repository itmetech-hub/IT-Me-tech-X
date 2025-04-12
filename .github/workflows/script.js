document.getElementById("projects-btn").addEventListener("click", function() {
    var moreProjects = document.getElementById("more-projects");
    if (moreProjects.style.display === "none") {
        moreProjects.style.display = "block";
        this.textContent = "Show Less Projects";
    } else {
        moreProjects.style.display = "none";
        this.textContent = "Show More Projects";
    }
});
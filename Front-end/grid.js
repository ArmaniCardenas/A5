document.addEventListener("DOMContentLoaded", function () {
    const switches = document.querySelectorAll(".switch input");

    switches.forEach((toggle) => {
        const toggleId = toggle.id;
        const savedLocally = localStorage.getItem(toggleId)

        if (savedLocally === "on") {
            toggle.checked = true;
        }

        else 
        {
            toggle.checked = false;
        }



        toggle.addEventListener("change", function () {
            const newState = toggle.checked ? "on" : "off";
            localStorage.setItem(toggleId, newState)


        })


    })

})
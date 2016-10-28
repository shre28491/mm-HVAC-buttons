/* Magic Mirror
 * Module: HVAC Buttons
 * By Shreyas
 * 
 */

Module.register("mm-HVAC-buttons",{
        //Default module config
    defaults:{
        fadeDuration: 2000
    },
    getStyles: function(){
        return ["styles.css"];
    },
    // Define a start method. For example if you want to schedule timers,
    // or want to make connections to socket servers. this is optional
    start: function(){
        Log.info('Starting module:'+ this.name);
    },
    //Overide DOM generator
    getDom: function() {
        var wrapper = document.createElement("div");
        //var buttonElement = document.createElement("BUTTON");
        var HVACwrapper = document.createElement("div");
        //var ventselSlider = document.createElement("div");
        //var blspeedDial = document.createElement("div");
        var regenToggle = document.createElement("a");
        //var regenDial = document.createElement("div");
        
	wrapper.className = "wrap";      
        HVACwrapper.className = "hvac";
	//ventselSlider.className = "ventsel";
        //blspeedDial.className = "blspeed";
        regenToggle.className = "regen";
         
                
        wrapper.appendChild(HVACwrapper);
        //HVACwrapper.appendChild(ventselSlider);
        //HVACwrapper.appendChild(blspeedDial);
        HVACwrapper.appendChild(regenToggle);
        //HVACwrapper.appendChild(regenDial);
	
        
        var fadeDuration = this.config.fadeDuration;
        
	regenToggle.addEventListener('click', function() {
    	    Log.info('mouse-click-event');
    	    regenToggle.classList.toggle("off");
        });
        return wrapper;
    }
});
        
            
        